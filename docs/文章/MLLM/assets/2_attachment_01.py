import argparse
import os
import joblib

import pandas as pd
import numpy as np

from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.metrics import classification_report

import lightgbm as lgb


def load_and_prepare(path):
    """Load CSV and prepare features and labels.

    Steps:
    - 读取 CSV
    - 将 `stars` 转为数值并丢弃空值
    - 丢弃 `stars == 3.0`（题目要求只考虑大于或小于 3 的情形）
    - 生成二分类标签 `label`：stars>3 -> 1，stars<3 -> 0
    - 填充缺失的评论文本为 ''（避免 TF-IDF 出错）
    - 选择数值列 `comment_len, hour, month`（如果存在）
    - 将 `kouwei, huanjing, fuwu` 这类文本评级映射为数值并用中位数填充缺失值

    返回:
    - X: 包含文本列与其它数值特征的 DataFrame
    - y: ndarray，二分类标签
    """
    df = pd.read_csv(path)

    # 确认 label 列名为 `stars`（数据中的列名）
    if 'stars' not in df.columns:
        raise ValueError('data.csv 中未找到 `stars` 列')

    # 把 stars 转成数值，丢弃无法转换的
    df['stars'] = pd.to_numeric(df['stars'], errors='coerce')
    df = df.dropna(subset=['stars'])

    # 只保留 label 为 >3 或 <3 的样本；等于 3 的按要求丢弃
    df = df[df['stars'] != 3.0]
    df = df[df['stars'].notnull()]

    # 生成二分类标签：>3 -> 1, <3 -> 0
    df['label'] = (df['stars'] > 3.0).astype(int)

    # 文本列（评论）
    text_col = 'cus_comment'
    if text_col not in df.columns:
        raise ValueError(f'data.csv 中未找到评论列 `{text_col}`')
    # 填充缺失的评论文本，避免 TF-IDF 报错
    df[text_col] = df[text_col].fillna('')

    # 其他可用特征：数值列和口味/环境/服务评级列
    # 数值特征：comment_len, hour, month
    numeric_cols = [c for c in ['comment_len', 'hour', 'month'] if c in df.columns]

    # 把 kouwei/huanjing/fuwu（文本评级）映射为数值等级
    rating_cols = [c for c in ['kouwei', 'huanjing', 'fuwu'] if c in df.columns]

    # 简单映射（按从好到差）
    mapping = {
        '非常好': 5,
        '非常好,': 5,
        '很好': 4,
        '好': 3,
        '一般': 2,
        '差': 1,
        '很差': 1,
    }

    for col in rating_cols:
        df[col] = df[col].astype(str).map(mapping).astype(float)
        # 若映射后出现 NaN，则用中位数填充
        df[col] = df[col].fillna(df[col].median())

    # 确保数值列的缺失值处理
    for col in numeric_cols:
        df[col] = pd.to_numeric(df[col], errors='coerce').fillna(df[col].median())

    features = [text_col] + numeric_cols + rating_cols

    X = df[features].copy()
    y = df['label'].values

    return X, y


def build_pipeline(text_col, numeric_cols, rating_cols):
    """Build preprocessing transformer and a LightGBM classifier.

    返回两个对象：
    - preprocessor: 一个 `ColumnTransformer`，将文本列用 TF-IDF 编码，数值列用 `StandardScaler` 标准化；
    - clf: 一个未训练的 `LGBMClassifier` 实例。

    注意：我们把预处理器与分类器分开返回，方便先对训练/验证集做 transform，再将变换后的矩阵传给 LightGBM 的
    原生 `fit(..., eval_set=...)`，这样可以在训练过程中使用 LightGBM 的回调(callback)打印每轮训练/验证准确率。
    """
    # 文本向量器
    tfidf = TfidfVectorizer(max_features=20000, ngram_range=(1,2), lowercase=True)

    # ColumnTransformer: 对评论使用 tfidf，对数值特征做标准化
    transformers = []
    transformers.append(('tfidf', tfidf, text_col))

    num_cols = numeric_cols + rating_cols
    if num_cols:
        transformers.append(('num', StandardScaler(), num_cols))

    preprocessor = ColumnTransformer(transformers=transformers, remainder='drop')

    clf = lgb.LGBMClassifier(n_estimators=1000, learning_rate=0.05, n_jobs=-1, random_state=42)

    return preprocessor, clf


def main(args):
    X, y = load_and_prepare(args.csv)

    text_col = 'cus_comment'
    numeric_cols = [c for c in ['comment_len', 'hour', 'month'] if c in X.columns]
    rating_cols = [c for c in ['kouwei', 'huanjing', 'fuwu'] if c in X.columns]

    # train/test split
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    # 构建预处理器和分类器（未训练）
    preprocessor, clf = build_pipeline(text_col, numeric_cols, rating_cols)

    # 先对训练/测试集做特征转换（TF-IDF + 标准化）
    print('Fitting preprocessor and transforming data...')
    X_train_trans = preprocessor.fit_transform(X_train)
    X_test_trans = preprocessor.transform(X_test)

    # 自定义 LightGBM 回调：每轮打印训练和验证的 accuracy
    def print_accuracy(period=1):
        def _callback(env):
            # env.evaluation_result_list: list of tuples (dataset_name, eval_name, result, is_higher_better)
            if env.iteration % period == 0:
                msgs = []
                for data_name, eval_name, result, _ in env.evaluation_result_list:
                    # 我们使用的 eval_metric 为 'binary_error'（错误率），accuracy = 1 - error
                    if eval_name == 'binary_error':
                        acc = 1.0 - result
                        msgs.append(f"{data_name}:acc={acc:.4f}")
                if msgs:
                    print(f"[iter {env.iteration}] " + " ".join(msgs))
        _callback.order = 10
        return _callback

    # 训练 LightGBM，传入 eval_set 和自定义 callback
    print('Training LightGBM with eval_set (printing accuracy each iteration)...')
    clf.fit(
        X_train_trans,
        y_train,
        eval_set=[(X_train_trans, y_train), (X_test_trans, y_test)],
        eval_names=['train', 'valid'],
        eval_metric='binary_error',
        callbacks=[print_accuracy(period=1)],
    )

    # 训练完成后评估并输出 classification_report
    print('Evaluating on test set...')
    y_pred = clf.predict(X_test_trans)
    report = classification_report(y_test, y_pred, digits=4)
    print('\nClassification report:\n')
    print(report)

    # 保存最终 pipeline（包含已拟合的 preprocessor 和训练好的 clf）
    final_pipeline = Pipeline([
        ('preprocess', preprocessor),
        ('clf', clf),
    ])

    out_dir = args.out_dir or '.'
    os.makedirs(out_dir, exist_ok=True)
    model_path = os.path.join(out_dir, 'lgb_pipeline.joblib')
    joblib.dump(final_pipeline, model_path)
    print(f'Saved trained pipeline to: {model_path}')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Train LightGBM on data.csv with TF-IDF features')
    parser.add_argument('--csv', type=str, default='data.csv', help='路径到 data.csv')
    parser.add_argument('--out-dir', type=str, default='.', help='模型输出目录')
    args = parser.parse_args()
    main(args)
