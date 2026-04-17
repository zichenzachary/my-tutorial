# Seaborn

## 1. Seaborn 简介

### 1.1 简介

<p align="center"><img src="./assets/Seaborn.png" width="150" alt="Seaborn"></p>

Seaborn 的特点：

1. <font color="#76923c">统计数据可视化</font>：Seaborn 专注于统计数据可视化，旨在帮助用户更轻松地探索和理解数据的分布、关系和趋势。
2. <font color="#76923c">美观的默认样式</font>：Seaborn 具有吸引人的默认绘图样式和颜色主题，使图表在外观上更具吸引力。
3. <font color="#76923c">内置数据集支持</font>：Seaborn 包含一些内置的示例数据集，用户可以用来练习和演示数据可视化技巧，这些数据集涵盖了不同领域的数据。
4. <font color="#76923c">轻度定制化能力</font>：虽然 Seaborn 提供了美观的默认样式，但用户仍然可以轻松地自定义图表的各个方面，包括颜色、线型、标记、标题等，以满足特定需求。
5. <font color="#76923c">集成统计方法</font>：Seaborn 提供了方便的函数来集成统计方法，如拟合回归线、绘制置信区间和展示数据的分布。

```python
import seaborn as sns
# 查看seaborn的版本
sns.__version__  
# 设置全局绘图风格                           
sns.set(style="darkgrid", color_codes=True)      
```

| style 值        | 描述                        |
| -------------- | ------------------------- |
| `darkgrid`（默认） | 有网格的深色背景（常用，适合折线/趋势图）     |
| `whitegrid`    | 白色背景 + 网格（适合统计图，如箱线图、柱状图） |
| `dark`         | 纯深色背景，无网格                 |
| `white`        | 纯白背景，无网格（适合出版或论文）         |
| `ticks`        | 白色背景 + 坐标轴刻度样式            |

`color_codes=True`（默认 `False`）：启用 Seaborn 的颜色简写系统

### 1.2 Seaborn 绘图函数血缘关系

1. Seaborn 绘图函数按照图形展示的信息可以主要分类成统计关系图类 `relplot` 、变量分布图类 `distplot` 以及分类数据图类 `catplot`
2. 每个类都有更加细化需求的*高阶封装*，比如 `lineplot` 是对 `relplot` 的高级封装
3. 除了右侧图片所示的函数，还有曲线拟合绘图函数 `regplot`/`lmplot` 以及热力图 `heatmap` 等常用函数
4. 总体使用法则是*先使用高级封装的函数*，例如 `kdeplot`，如果在做定制化的时候不如人意，可以切换成对应的低阶函数 (例如 `distplot`)

<p align="center"><img src="./assets/Seaborn-1.png" width="400" alt="Seaborn-1"></p>

## 2. Seaborn 统计关系绘图

### 2.1 统计关系图

`relpot` 函数

1. `x`, `y`：data 中的变量名
2. `hue`：将会产生具有不同颜色的元素的变量进行分组
3. `size`：将会产生具有不同尺寸的元素的变量进行分组
4. `style`：将会产生具有不同风格的元素的变量进行分组
5. `data`：`DataFrame` 长格式的 `DataFrame`
6. `palette`：色盘名、列表、或者字典，可选，用于 hue 变量的不同级别的颜色
7. `legend`：`"brief"`，`"full"`，或者 `False`，可选，用于决定如何绘制坐标轴
    - 当参数值为 `"brief"` 时，数值型的 hue 以及 size 变量将会被用等间隔采样值表示
    - 当参数值为 `"full"` 时，每组都会在坐标轴中被记录
    - 当参数值为 `False` 时，不会添加坐标轴数据，也不会绘制坐标轴
8. `kind`：类型，可选项为 `scaater` 及 `line`

```python
# 默认散点图
# plt.figure(figsize=(20,12))

tips = pd.read_csv('./tips_new.csv').iloc[:,1:]
sns.relplot(x="total_bill", y="tip", data=tips)

# sns.scatterplot(x="total_bill", y="tip", data=tips);
```

`tips.head ()`：

<p align="center"><img src="./assets/Seaborn-2.png" width="400" alt="Seaborn-2"></p>

<p align="center"><img src="./assets/Seaborn-3.png" width="400" alt="Seaborn-3"></p>

### 2.2 散点图

（1） scatterplot 绘制

`scatterplot` 函数，大部分参数与 `relplot` 相同，不同的参数主要有：

1. `estimator`：pandas 方法的名称，或者可调用的方法，可以对纵轴变量进行聚合
2. `ci`：整数型或 `"sd"` 或 `None`，可以给出置信区间；新版本替换成 `errorbar`，下同
3. `ax`：绘制图像的坐标对象，否则使用当前坐标轴，方便结合 subplot
4. `hue` 控制了颜色，`style` 控制点的形状（可以不是一个参数，这个案例只是巧合）

```python
sns.scatterplot(x="total_bill", y="tip", hue="smoker", data=tips, legend='full')
sns.scatterplot(x="total_bill", y="tip", hue="smoker", style="smoker", data=tips)
```

<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/Seaborn-4.png" width="340" alt="Seaborn-4">
  <img src="./assets/Seaborn-5.png" width="340" alt="Seaborn-5">
</div>

（2） relplot 绘制

1. `relplot` 默认绘制*散点图*而不是折线图
2. 当 `hue` 和 `style` 使用不同列的时候，在图形视觉上我们可以认为我们具备了多个维度观测图形的能力，例如分别按照颜色和图形的形状去展开分析
3. 注意：人的视觉对于*颜色*的敏感程度很高，对于*形状*的敏感程度较为一般
4. 当 `hue` 被指定为数值型变量的时候，那么颜色会按照深浅去绘制，从而在颜色上保留数值类型的大小关系，例如较小的数值颜色浅，较大的数值颜色深
5. 注意：当我们用 `relplot` 绘图的时候，系列的信息都会展会在*图形外侧*

```python
sns.relplot(x="total_bill", y="tip", hue="smoker", style="time", data=tips)
sns.relplot(x="total_bill", y="tip", hue="size", data=tips)
```

<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/Seaborn-6.png" width="340" alt="Seaborn-6">
  <img src="./assets/Seaborn-7.png" width="340" alt="Seaborn-7">
</div>

### 2.3 气泡图

 `relplot` 绘制气泡图

1. 当使用 `size` 参数时，会按照对应列决定气泡大小
2. 如果我们对气泡大小有要求，可以通过 `sizes` 参数来制定一个元组，其中依次包含最小值和最大值
3. 当 `size` 和 `hue` 指定相同的列，可以认为我们有两个信息去对数据进行分类与可视化，这种效果一般是更好的

```python
sns.relplot(x="total_bill", y="tip", size="size", hue='size',
            sizes=(15, 500), data=tips);        #sizes 接收元组，代表气泡最小和最大
```

<p align="center"><img src="./assets/Seaborn-8.png" width="400" alt="Seaborn-8"></p>

### 2.4 折线图

#### 2.4.1 基础折线图

（1） lineplot 绘制

1. `lineplot` 参数与 `scatterplot` 大多数相同，以下几点不同需要注意：
2. `dashes`：线的类型
    - 设置为 `True` 将使用默认的短划线代码
    - `dashes` 参数用列表时，列表长度必须和 `style` 分组个数相同
3. 横轴为时间的时候较多

```python
# 固定随机种子
np.random.seed(2024)

# 构造示例数据
# time 为 0~499 的序列，value 为标准正态随机数的累计和（随机游走）
df = pd.DataFrame(dict(
    time=np.arange(500),
    value=np.random.randn(500).cumsum()
))

# x 轴为 time，y 轴为 value，kind="line" 指定为折线图
g = sns.relplot(x="time", y="value", kind="line", data=df)
```

<p align="center"><img src="./assets/Seaborn-9.png" width="400" alt="Seaborn-9"></p>

（2） relplot 绘制

1. 如果使用 `relplot` 画折线图，**需要指定** `kind='line'`
2. 当在 `x` 值唯一，但 `y` 值不唯一的情况下，折线图会默认给出均值和置信区间（如图中*阴影*所示）
3. 这一类情况一般适用于横轴数值为离散型
4. 如果实际绘图不需要置信区间，可以通过 `ci=None` 来取消置信区间

```python
sns.relplot(x="int_value", y="time", kind="line",
    		data=df.assign(int_value=np.ceil(df['value'])) # int_value为value列取整
)
```

<p align="center"><img src="./assets/Seaborn-10.png" width="384" alt="Seaborn-10"></p>

#### 2.4.2 分组折线图

（1） lineplot 绘制

1. `lineplot` 的参数 `hue` 会使得数据分组再后分别绘制图像，这与 `scatterplot` 有所不同
2. 默认情况下，只要 `x` 与 `y` 并非一一对应，`lineplot` 都会给出带有置信区间的折线图

```python
fmri = pd.read_csv('./seaborn_data/fmri.csv')
sns.lineplot(x="timepoint", y="signal", hue="event", data=fmri)
```

`fmri.head()`:

<p align="center"><img src="./assets/Seaborn-11.png" width="400" alt="Seaborn-11"></p>

<p align="center"><img src="./assets/Seaborn-12.png" width="400" alt="Seaborn-12"></p>

（2） relplot 绘制

1. `style` 参数是可以指定利用哪个变量来决定折线的样式
2. 所以当同时指定了 `hue` 和 `style` 两个参数时，我们会得到 `2*2 = 4` 条折线图
3. 同时也是默认带置信区间
4. 当 `hue` 与 `style` 取相同列时候，可以画出 2 条折线，而且两条折现的颜色和形状分别因为 `hue` 参数和 `style` 参数而不同
5. 当我们想加强系列间对比效果的时候，可以指定 `hue` 和 `style` 为*相同参数*，适合做汇报

```python
sns.relplot(x="timepoint", y="signal", hue="region", style="event",
			kind="line", data=fmri)
			
sns.relplot(x="timepoint", y="signal", hue="event", style="event",
            kind="line", data=fmri)					
```

<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/Seaborn-13.png" width="340" alt="Seaborn-13">
  <img src="./assets/Seaborn-14.png" width="340" alt="Seaborn-14">
</div>

#### 2.4.3 多水平折线图

（1） relplot 绘制

1. 当 `hue` 参数为离散变量时，折线会根据数值大小显示同颜色的深浅
2. `style` 参数为离散变量，决定了折线形状的不同
3. `size` 参数决定了折线的*粗细*不同
4. 主要是突出 `hue` 列数值较大的系列的变化趋势，对于较小值系列趋势的变化呈现不那么明显
5. 如果没有颜色参数，想快速准确定位某条曲线，还是有一定难度

```python
dots = pd.read_csv('./seaborn_data/dots.csv').query("align=='dots'")

# hue和style都来自离散变量
sns.relplot(x="time", y="firing_rate", hue="coherence", style="choice", 
    		kind="line",data=dots)
    		
sns.relplot(x="time", y="firing_rate", size="coherence", style="choice",
            kind="line", data=dots)    		
```

`dots.head()`:

<p align="center"><img src="./assets/Seaborn-15.png" width="325" alt="Seaborn-15"></p>

<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/Seaborn-16.png" width="340" alt="Seaborn-16">
  <img src="./assets/Seaborn-17.png" width="340" alt="Seaborn-17">
</div>

（2） lineplot 绘制

1. 为了弥补上一幅图的缺点，我们新加入了 `hue` 参数，并且指定了调色板 `palette` 参数
2. 当前的效果，可以认为，我们有能力快速指认一条折线，例如<font color="#548dd4">蓝色</font>实线/<font color="#d99694">粉色</font>虚线

```python
sns.lineplot(x="time", y="firing_rate", size="coherence", style="choice",
             hue = 'coherence', palette = 'Accent', data=dots)  		
```

<p align="center"><img src="./assets/Seaborn-18.png" width="400" alt="Seaborn-18"></p>

### 2.5 多面绘图

1. 通过参数 `col` 对数据按列分组绘图每一列图对应参数列中不同取值下的*数据子集*不同取值生成不同列
2. 列的排列方向是按列展开当使用 `col=xxx` 时多个子图会*横向排列*每个图都是独立的数据绘制
3. 适用于想查看变量在不同分类下的分布差异时常用于对比不同组之间趋势或相关性区别当分析重点在*组内结构*而非组间关系时更合适
4. 参数 `row` 是按照 `row` 参数列分组绘图排列，按照*行的方向*展开
5. `height` 参数指定了图形高度
6. `estimator` 指定为 `None`，含义是不返回置信区间，默认为 `'mean'` 取平均

```python
sns.relplot(x="total_bill", y="tip", hue="smoker",
            col="time", data=tips)
          
# estimator=None不使用数据聚合              
sns.relplot(x="timepoint", y="signal", hue="subject",
            col="region", row="event", height=3,
            kind="line", estimator=None, data=fmri) 
```

<p align="center"><img src="./assets/Seaborn-19.png" alt="Seaborn-19"></p>

<p align="center"><img src="./assets/Seaborn-20.png" alt="Seaborn-20"></p>

## 3. Seaborn 分类数据绘图

### 3.1 catplot 类型

主要包含：

- 分类散点图
	- `stripplot()` (with kind="strip"; the default) catplot 默认图
	- `swarmplot()` (with kind="swarm")
- 分类分布图
	- `boxplot()` (with kind="box")
	- `violinplot()` (with kind="violin")
	- `boxenplot()` (with kind="boxen")
- 分类估计图
	- `pointplot()` (with kind="point")
	- `barplot()` (with kind="bar")
	- `countplot()` (with kind="count")

### 3.2 分类散点图

`catplot` 参数与 `relplot` 绝大部分相同，主要不同参数如下

1. `aspect` 每个面的纵横比
2. `orient` 方向，“v” | “h” 分别单标竖直方向和水平方向
3. 可以通过 `jitter` 参数来控制重复点是否抖动绘制
4. 注意：`catplot` 默认绘制分类散点图（左右有*发散*）

```python
sns.catplot(x="day", y="total_bill", data=tips)
sns.catplot(x="day", y="total_bill", jitter=False, data=tips) #jitter=False关闭抖动
```

<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/Seaborn-21.png" width="340" alt="Seaborn-21">
  <img src="./assets/Seaborn-22.png" width="340" alt="Seaborn-22">
</div>

### 3.3 蜂群图

1. 关键参数 `x` 和 `y` 共同指定了分类基准
2. `hue` 决定了颜色
3. 如果想绘制 swarm 散点图（非重叠分类散点图），需要指定 `kind='swarm'`
4. swarm 散点图的限制是*数据集不能太大*，否则无法完成**不重叠**的要求
5. 调整 `x` 和 `y`，可以在视觉上使得分类散点图实现*转置*
6. `hue` 参数可以使得颜色成为一个区分维度
7. catplot 绘图后，系列信息会展示在画板外侧

```python
sns.catplot(x="day", y="total_bill", hue="sex", kind="swarm", data=tips)
# x与y对调即可绘制水平扫把图/蜂群图
sns.catplot(x="total_bill", y="day", hue="time", kind="swarm", data=tips);
```

<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/Seaborn-23.png" width="340" alt="Seaborn-23">
  <img src="./assets/Seaborn-24.png" width="340" alt="Seaborn-24">
</div>

➤ 分组蜂群图：

1. 参数 `col` 使得数据按照 `time` 列分组绘图 然后按照列的方向展开
2. `aspect` 为图形的宽长比 (子图)

```python
# 显示与facet的多种关系
sns.catplot(x="day", y="total_bill", hue="smoker",
            col="time", aspect=.6,
            kind="swarm", data=tips)  # 按time展开列方向子图
```

<p align="center"><img src="./assets/Seaborn-25.png" alt="Seaborn-25"></p>

➤ 分组蜂群图（2×2）：

1. 参数 `row` 使得数据按照 `sex` 列分组绘图 然后按照行的方向展开
2. 如果同时设置了 `col` 和 `row` 参数 则会展示矩阵形状的图形集
3. 观察右侧蓝色圆圈中的图例信息，可以判断出图形是先对数据集按照 row、col、hue 所对应的变量进行分组，再分别在各子图中绘制的

```python
sns.catplot(x="day", y="total_bill", hue="smoker",
            col="time", aspect=1.5, row="sex",
            kind="swarm", data=tips)  # 行列双维度展开图形矩阵
```

<p align="center"><img src="./assets/Seaborn-26.png" alt="Seaborn-26"></p>

### 3.4 箱线图

1. 指定参数 `kind='box'`  , `catplot` 可以绘制箱线图
2. 指定 `x` 为分类基准
3. `y` 为被计算的列需要计算 `y` 的中位数、上四分位数、下四分位数
4. 箱线图常用在*数据 EDA* 过程中来判断分类变量和连续变量见的相关关系
5. 参数 `hue` 会实现 2 个功能
	- 实现分组，并且分别绘制箱线图用颜色
	- 将 `hue` 列不同组的数据区分开
	- 总结：可以实现“day” 和”smoker”两列交叉对比
6. 如果 `hue` 参数和 x 列存在包含关系，可以认为 `hue` 是针对 x 列进行一次强化展示 (新增了颜色信息)
7. `dodge` 参数：使用色调嵌套时，元素是否应沿分类轴移动,在这个例子中，因为 day 和 weekend 存在真包含关系，所以应该*禁用 dodge*，设置为 False
8. `boxenplot` 是*增强箱线图*，针可以理解为在 `boxplot` 基础上新增了很多分位数的计算，其余功能与 `boxplot` 相同
9. 如果想让每个系列颜色不同，可以指定 `palette` 参数

```python
sns.catplot(x="day", y="total_bill", kind="box", data=tips)
# sns.boxplot(x="day", y="total_bill", data=tips)

sns.catplot(x="day", y="total_bill", hue="smoker", kind="box", data=tips)

tips["weekend"] = tips["day"].isin(["Sat", "Sun"])
sns.catplot(x="day", y="total_bill", hue="weekend",
            kind="box", dodge=False, data=tips)

sns.boxenplot(x="color", y="price",
              data=diamonds.sort_values("color"), palette='Set2',
              hue='color', legend=False)
```

> [!NOTE] 信息
> 箱子中间的线为中位数，上方的点为一些异常点

<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/Seaborn-27.png" width="340" alt="Seaborn-27">
  <img src="./assets/Seaborn-28.png" width="340" alt="Seaborn-28">
</div>

<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/Seaborn-29.png" width="340" alt="Seaborn-29">
  <img src="./assets/Seaborn-30.png" width="340" alt="Seaborn-30">
</div>

➤ 水平箱线图：

1. 水平方向的箱线图通过参数 `orient` 来指定
2. 如果没有指定 `x` 和 `y` 那么就默认按照 `DataFrame` 的各个列来绘图 且自动区分颜色

```python
sns.catplot(data=iris, orient="h", kind="box")  # 绘制水平箱线图，自动按列分组上色
```

`iris.head()`：

<p align="center"><img src="./assets/Seaborn-31.png" width="400" alt="Seaborn-31"></p>

<p align="center"><img src="./assets/Seaborn-32.png" width="400" alt="Seaborn-32"></p>

### 3.5 小提琴图

1. 小提琴图是通过展示密度曲线的方式来展示分布
2. `hue` 参数会实现分组绘制小提琴图
3. 通过 `catplot` 绘制小提琴图要指定 `kind='violin'`

`catplot` + `swarmplot` 叠加图：

- `catplot` 的 `inner` 参数决定了小提琴图中间的箱子是否被画出来 `None` 意味着不画
- 通过 `ax=g.ax` 使得 `swarmplot` 也在小提琴图上绘图
- `size` 参数为标记的直径大小控制 `swarmplot` 点的大小

```python
sns.catplot(x="total_bill", y="day", hue="time",
            kind="violin", data=tips)  
            
g = sns.catplot(x="day", y="total_bill", kind="violin", inner=None, data=tips)
sns.swarmplot(x="day", y="total_bill", color="k", size=3, data=tips, ax=g.ax)               
```

> [!NOTE] 信息
> 隆起的地方越靠右代表平均值越大，白色的线代表中位数

<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/Seaborn-33.png" width="340" alt="Seaborn-33">
  <img src="./assets/Seaborn-34.png" width="340" alt="Seaborn-34">
</div>

### 3.6 柱状图

（1） barplot 绘制

1. `barplot` 参数 `hue` 作用与 `catplot` 相同
2. `barplot` 绘图后，系列信息的展示是在画板内部的

```python
sns.barplot(x="sex", y="survived", hue="class", data=titanic)
```

`titanic.head()`：

<p align="center"><img src="./assets/Seaborn-35.png" alt="Seaborn-35"></p>

<p align="center"><img src="./assets/Seaborn-36.png" width="400" alt="Seaborn-36"></p>

（2） catplot 绘制

1. `palette` 参数为指定的调色板
2. `legend` 参数设置为 `False` 则不显示系列信息
3. 参数 `kind='count'` 则为计数统计图
4. 其中 `palette` 参数为 Matplotlib Colormap 的名字，例如 `ch:` 、`hls`、 `husl` 等

```python
sns.catplot(x="deck", kind="count", palette="ch:.25",
            data=titanic, hue="deck", legend=False)    # legend=False不展示系列信息
```

<p align="center"><img src="./assets/Seaborn-37.png" width="400" alt="Seaborn-37"></p>

（3） countplot 绘制

1. `countplot` 参数与 `barplot` 完全相同
2. 指定 `y` 参数 那么就按照 `y` 为分类变量去做统计 `count`
3. `hue` 作用与 `catplot` 相同
4. `edgecolor` 为柱子边缘参数

```python
sns.countplot(y="deck", hue="class",
              palette="pastel", edgecolor=".6",      # edgecolor设置边框
              data=titanic)  
```

<p align="center"><img src="./assets/Seaborn-38.png" width="400" alt="Seaborn-38"></p>

## 4. Seaborn 变量分布绘图

### 4.1 直方图和密度图

（1） distplot 绘制

1. `a` : 可以是 Series、1 维数组或者列表
2. `bins` : 桶数
3. `hist`: 是否绘制直方图
4. `kde` : 是否绘制密度图，一定程度上和竖线*重复*
5. `rug` : 是否绘制竖线
6. `fit` : 拟合指定分布
7. `vertical` : 是否在 y 轴显示结果
8. 当前版本中 `distplot` 属于被警告函数，在 Seaborn 后续版本中会被取消，可以根据需求用 `histplot`/`kdeplot`/`rugplot` 来替换

说明：默认情况下 会绘制直方图和密度图 但是不会绘制竖线

```python
np.random.seed(2024)                    # 设置随机种子
x = np.random.normal(size=1000)         # 生成正态分布数据

sns.distplot(x)                         # 默认绘制直方图和密度曲线
sns.distplot(x, kde=True, rug=True)     
```

<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/Seaborn-39.png" width="340" alt="Seaborn-39">
  <img src="./assets/Seaborn-40.png" width="340" alt="Seaborn-40">
</div>

➤ 拟合正态分布：

1. `fit` 参数后面给定的分布例如正态分布 可以给定 `stats.norm`
2. 结合结果来看变量还是比较符合正态分布的
3. `fit` 参数后面可以接其他的分布

```python
from scipy import stats                     # 导入统计分布
np.random.seed(2024)  
x = np.random.normal(10, 20, size=2000)   

sns.distplot(x, kde=False, fit=stats.norm)  # 拟合正态分布并绘图
```

<p align="center"><img src="./assets/Seaborn-41.png" width="400" alt="Seaborn-41"></p>

（2） histplot 绘制

1. `histplot` 与 `distplot` 参数大多数相同
2. `stat` 为统计方法 包含 `count` `frequency` `probability` `percent` `density`
3. `histplot`/`kdeplot` 都可以接收 `DataFrame` 和指定列的方式绘图 这一点与前面的分类绘图/关系绘图已经对齐

```python
sns.histplot(x, kde=True, bins=20)        # 绘制直方图并叠加密度曲线
```

<p align="center"><img src="./assets/Seaborn-42.png" width="400" alt="Seaborn-42"></p>

（3） kdeplot 绘制（密度图）

参数 `fill` 是否填充曲线下方

```python
np.random.seed(2024)
x = np.random.normal(0, 1, size=300)

sns.kdeplot(x, fill=True)               # 绘制密度曲线并填充下方区域
```

<p align="center"><img src="./assets/Seaborn-43.png" width="400" alt="Seaborn-43"></p>

### 4.2 联合变量分布图

1. `x`、 `y` : 横轴和纵轴变量
2. 默认在 `x` 轴和 `y` 轴周边绘制直方图，用 `x` 和 `y` 绘制散点图
3. `kind` 可选：`'scatter'`、`'reg'`、`'resid'`、`'kde'`、`'hex'`
	- 参数 `kind='kde'`，指定用密度曲线去绘制图表
	- 参数 `kind='reg'`
		- 指定用密度图和直方图绘制 `x` 和 `y` 的边界
		- 用散点图 + 回归直线的方式来绘制主画板
		- 总体来说，`reg` 参数下图形使用频率更高

```python
np.random.seed(2024)  # 设置随机种子
mean, cov = [0, 1], [(1, .5), (.5, 1)]                # 设置均值和协方差矩阵
data = np.random.multivariate_normal(mean, cov, 200)  # 生成二维正态分布数据
df = pd.DataFrame(data, columns=["x", "y"])           # 构建DataFrame

sns.jointplot(x="x", y="y", data=df)           # 绘制联合分布图 默认散点+边缘直方图
sns.jointplot(x="x", y="y", data=df, kind='kde')      # 二维密度图+边缘密度曲线
sns.jointplot(x="x", y="y", data=df,kind='reg')       # 散点回归图+密度直方图
```

<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/Seaborn-44.png" width="340" alt="Seaborn-44">
  <img src="./assets/Seaborn-45.png" width="340" alt="Seaborn-45">
</div>

<p align="center"><img src="./assets/Seaborn-46.png" width="400" alt="Seaborn-46"></p>

### 4.3 成对关系图

主要辅助作 EDA 探索分析

（1） pairplot 绘制

1. `data`：数据框
2. `vars` ：变量名列表（参与绘图的列）
3. `kind` ：非对角线图形，可选 `'scatter'`、 `'reg'`
4. `diag_kind` : 对角线图形，可选 `'auto'`、 `'hist'` 、`'kde'`
5. `height` : 高度（子图）
6. `aspect` : 宽长比

```python
# sns.load_dataset("iris")
g = sns.pairplot(iris)            # 绘制成对关系图
g.fig.set_size_inches(10, 6)      # 设置整体图长度和高度
```

<p align="center"><img src="./assets/Seaborn-47.png" alt="Seaborn-47"></p>

（2） PairGrid 绘制

1. 与 `pairplot` 参数大部分相同，但是少了 `diag_kind` 和 `kind`
2. 需要通过 `map_diag` 和 `map_offdiag` 方法去指定绘图形状
3. 这两个方法只需要传入 Seaborn 或者 Matplotlib 的绘图函数
4. 可以通过 `hue` 参数来指定分组标准

```python
# g.map_diag(sns.histplot)
# g.map_offdiag(sns.kdeplot, n_levels=6)
# g.map(sns.kdeplot)

g = sns.PairGrid(iris,hue='species')      # 创建PairGrid对象，按species分组
g.map_diag(sns.kdeplot)                   # 对角线绘密度图
g.map_offdiag(sns.scatterplot)            # 非对角线绘散点图
g.fig.set_size_inches(10,7)              # 设置整体图长度和高度
```

<p align="center"><img src="./assets/Seaborn-48.png" alt="Seaborn-48"></p>

## 5. Seaborn 曲线拟合绘图

### 5.1 线性关系图

#### 5.1.1 单图绘制

（1） regplot 绘制

1. `data` ：DataFrame
2. `x_ci`： 可选置信区间计算方法 , `'ci'`、 `'sd'`
3. `fit_reg`: 是否拟合线性方程
4. `ci` : 置信水平（0~100）
5. `logistic` : 是否用逻辑回归拟合
6. `lowess` : 启用非参数拟合
7. `robust` : 是否使用*稳健估计*
8. `logx` : 是否使用 `y~log(x)` 的线性回归

```python
sns.regplot(x="total_bill", y="tip", data=tips)    # 散点图+线性回归拟合
```

<p align="center"><img src="./assets/Seaborn-49.png" width="400" alt="Seaborn-49"></p>

（2） lmplot 绘制

➤ lmplot vs regplot：

1. `regplot` 接受多种格式的 `x` 和 `y` 变量 包括简单的 numpy 数组 pandas Series 对象 或者作为对传递给 `data` 的 pandas DataFrame 对象
2. 这种数据格式被称为“长格式”或“整齐”数据
3. 除了这种输入的灵活性之外 `regplot` 拥有 `lmplot` 一个子集的功能 所以我们将使用后者来演示它们

```python
# lmplot要求x和y是列名字符串，size虽然为数值，但是属于离散型
sns.lmplot(x="size", y="tip", data=tips)
```

<p align="center"><img src="./assets/Seaborn-50.png" width="400" alt="Seaborn-50"></p>

➤ x_estimator 用法：

1. `x_estimator` 是指需要对纵轴统计的统计函数，可以接受 numpy 的函数
2. 默认情况下，会绘出回归直线和置信区间
3. 默认情况下，拟合一元一次方程曲线

```python
# 指定对x分组后的y均值再做回归
sns.lmplot(x="size", y="tip", data=tips, x_estimator=np.mean)  
```

<p align="center"><img src="./assets/Seaborn-51.png" width="400" alt="Seaborn-51"></p>

➤ scatter_kws + ci 用法：

1. `scatter_kws` 参数指定了点的大小
2. `ci` 确定了是否返回置信区间

```python
sns.lmplot(x="x", y="y", data=anscombe.query("dataset == 'III'"),
           ci=None, scatter_kws={"s": 80})  # 不显示置信区间，点大小为80

sns.lmplot(x="x", y="y", data=anscombe.query("dataset == 'III'"),
           scatter_kws={"s": 80})           # 默认显示置信区间，点大小为80
```

anscombe.head()：

<p align="center"><img src="./assets/Seaborn-52.png" width="161" alt="Seaborn-52"></p>

<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/Seaborn-53.png" width="340" alt="Seaborn-53">
  <img src="./assets/Seaborn-54.png" width="340" alt="Seaborn-54">
</div>

➤ robust 用法：

1. `robust` 参数为 `True` 代表对于当前数据集，会先去除掉异常点后再进行回归方程
2. 这个功能在做 2 个变量线性关系探查的过程中，是需要指定的避免被异常值影响回归估计

```python
sns.lmplot(x="x", y="y",
           data=anscombe.query("dataset == 'III'"),
           robust=True, ci=None,
           scatter_kws={"s": 80})          # 使用稳健回归，去除异常点后再拟合
```

<p align="center"><img src="./assets/Seaborn-55.png" width="400" alt="Seaborn-55"></p>

#### 5.1.2 多图对比

（1） regplot + subplot2grid

1. 使用 `subplot2grid` 可以在一个大画布中灵活放置多个子图
2. `regplot` 可以通过 `ax` 参数将图绘制到指定子图上
3. 通过控制 `scatter_kws`、`ci` 和 `order` 可以观察不同数据集的拟合效果差异

```python
anscombe = pd.read_csv('./seaborn_data/anscombe.csv')  # 读取数据
plt.figure(figsize=(20, 12))  # 设置画布大小

a1 = plt.subplot2grid((4, 4), (0, 0), rowspan=2, colspan=2)  # 左上子图
a2 = plt.subplot2grid((4, 4), (0, 2), rowspan=2, colspan=2)  # 右上子图
a3 = plt.subplot2grid((4, 4), (2, 0), rowspan=2, colspan=2)  # 左下子图

sns.regplot(x="x", y="y", data=anscombe.query("dataset == 'I'"),
            ci=None, scatter_kws={"s": 80}, ax=a1)  # Data1线性关系散点图
a1.set_xticklabels(labels=np.arange(4, 16, 2), fontsize=20)  # 设置x刻度
a1.set_yticklabels(labels=np.arange(4, 12, 1), fontsize=20)  # 设置y刻度
a1.set_title('Data1: 线性关系散点图', fontsize=30)

sns.regplot(x="x", y="y", data=anscombe.query("dataset == 'II'"),
            ci=None, scatter_kws={"s": 80}, ax=a2)  # Data2线性拟合效果差
a2.set_title('Data2: 线性拟合效果差', fontsize=30)

sns.regplot(x="x", y="y", data=anscombe.query("dataset == 'II'"),
            order=2, ci=None, scatter_kws={"s": 80}, ax=a3)  # Data2二次拟合效果
a3.set_title('Data2: 二次拟合效果', fontsize=30)

plt.suptitle('reg拟合效果', fontsize=50, color='g', alpha=1)  # 总标题
plt.tight_layout(w_pad=0.5, h_pad=1.0)  # 调整布局
plt.show()
```

<p align="center"><img src="./assets/Seaborn-56.png" alt="Seaborn-56"></p>

（2） 多种拟合图对比

线性拟合 vs 逻辑曲线拟合

```python
tips["big_tip"] = (tips.tip / tips.total_bill) > .15  # 生成big_tip分类变量

sns.lmplot(x="total_bill", y="big_tip",
           data=tips, y_jitter=.03)  # 线性拟合，y值抖动
           
sns.lmplot(x="total_bill", y="big_tip",
           data=tips, logistic=True,y_jitter=.03) # 逻辑曲线拟合，逻辑曲线实际在分类                 
```

<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/Seaborn-57.png" width="340" alt="Seaborn-57">
  <img src="./assets/Seaborn-58.png" width="340" alt="Seaborn-58">
</div>

### 5.2 拟合残差图

`residplot` 函数

1. `residplot` 参数与 `lmplot` 参数相同
2. 观察残差在 `y=0` 上下的分布 可以确认残差是否随机
3. 如果残差有明显规律 可以认为拟合曲线效果欠佳

```python
sns.residplot(x="x", y="y",data=anscombe.query("dataset == 'I'"),
              scatter_kws={"s": 80})      # 绘制残差图，点大小为80
```

> [!TIP] 提示
>
> 残差（residual） = 真实值 - 拟合值
>
> 理想情况：残差应该随机分布在 0 附近，没有规律
>
> 非理想情况：残差呈现明显规律（曲线、锯齿、波动），说明模型没有捕捉到数据的趋势

<p align="center"><img src="./assets/Seaborn-59.png" width="400" alt="Seaborn-59"></p>

➤ 拟合残差图对比：

```python
sns.residplot(x="x", y="y",
              data=anscombe.query("dataset == 'II'"),
              scatter_kws={"s": 80})           # 残差曲线规律明显
              
 sns.residplot(x="x", y="y",
              data=anscombe.query("dataset == 'II'"),
              order=2, scatter_kws={"s": 80})  # 二次拟合后，曲线规律减弱          
```

<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/Seaborn-60.png" width="340" alt="Seaborn-60">
  <img src="./assets/Seaborn-61.png" width="340" alt="Seaborn-61">
</div>

### 5.3 分组线性回归图

1.`hue` 参数会在同一个画板上完成两份数据集的拟合、实现分组回归
2.`markers` 是可以指定不同数据点的形状、配合 `hue` 可以指定颜色、所以右图的两份拟合曲线区分更明显

```python
# 使用hue分组、markers区分形状、palette区分颜色
sns.lmplot(x="total_bill", y="tip", hue="smoker", data=tips,
           markers=["o","x"], palette="Set1")  
```

<p align="center"><img src="./assets/Seaborn-62.png" width="400" alt="Seaborn-62"></p>

### 5.4 矩阵线性关系图

1. `col` 和 `row` 参数可以让 `lmplot` 绘制矩阵结构的图形集
2. `hue` 参数作用不变
3. 相当于一张图展示了 8 份数据的散点与回归拟合曲线

```python
g = sns.lmplot(x="total_bill", y="tip", hue="smoker",
               col="time", row="sex", data=tips)
g.fig.set_size_inches(10, 7)  # 设置整体图集大小
```

<p align="center"><img src="./assets/Seaborn-63.png" alt="Seaborn-63"></p>

➤ col_wrap 用法：

1. 指定了 `col` 参数同时、指定了 `col_wrap` 数量、那么排列会按照参数进行
2. 这里面就是不能与 `row` 参数一起使用了

```python
sns.lmplot(x="total_bill", y="tip", col="day", data=tips,
           col_wrap=3, height=3)          # 每行3列
```

<p align="center"><img src="./assets/Seaborn-64.png" alt="Seaborn-64"></p>

➤ aspect 用法：

1. 可以通过设置宽长比来使得整体图集大小合适
2. `aspect` 参数没有绝对合适的默认值、需要调整来判断合适的大小

```python
sns.lmplot(x="total_bill", y="tip", col="day", data=tips,
           aspect=.5)
```

<p align="center"><img src="./assets/Seaborn-65.png" alt="Seaborn-65"></p>

### 5.5 多变量图集

`pairplot` 函数

1. 参数指定 `x_vars` 和 `kind`，就会按照 `x_vars` 每一列绘制一张图
2. 通过设置 `height` 和 `aspect` 来使得整体图集大小合适

```python
sns.pairplot(tips, x_vars=["total_bill", "size"], y_vars=["tip"],
             hue="smoker", height=5, aspect=.8, kind="reg")
```

<p align="center"><img src="./assets/Seaborn-66.png" alt="Seaborn-66"></p>


## 6. Onesky 数据处理

### 6.1 Onesky 数据集简介

Onesky 数据集是一家专门收集*空气质量数据*的公司在 2022-2023 年某段时间收集的数据集，里面包含各种气体指数以及 pm1/2.5/10 指数，数据读取时间等字段，*样本量为 58767 左右*。具体详情看下方数据框。

<p align="center"><img src="./assets/Seaborn-67.png" width="325" alt="Seaborn-67"></p>

### 6.2 数据处理流程简介

<p align="center"><img src="./assets/Seaborn-68.png" alt="Seaborn-68"></p>

### 6.3 数据处理流程简介（代码）

<p align="center"><img src="./assets/Seaborn-69.png" alt="Seaborn-69"></p>

### 6.4 数据处理过程

见 notebook

## 7. Seaborn 知识点补充

### 7.1 热力图

<p align="center"><img src="./assets/Seaborn-70.png" alt="Seaborn-70"></p>

<p align="center"><img src="./assets/Seaborn-71.png" alt="Seaborn-71"></p>

<p align="center"><img src="./assets/Seaborn-72.png" alt="Seaborn-72"></p>

### 7.2 图表美化

<p align="center"><img src="./assets/Seaborn-73.png" alt="Seaborn-73"></p>

<p align="center"><img src="./assets/Seaborn-74.png" alt="Seaborn-74"></p>

<p align="center"><img src="./assets/Seaborn-75.png" alt="Seaborn-75"></p>

<p align="center"><img src="./assets/Seaborn-76.png" alt="Seaborn-76"></p>

<p align="center"><img src="./assets/Seaborn-77.png" alt="Seaborn-77"></p>

<p align="center"><img src="./assets/Seaborn-78.png" alt="Seaborn-78"></p>

## 8. Seaborn-Onesky 单变量可视化分析

<p align="center"><img src="./assets/Seaborn-79.png" alt="Seaborn-79"></p>

<p align="center"><img src="./assets/Seaborn-80.png" alt="Seaborn-80"></p>

<p align="center"><img src="./assets/Seaborn-81.png" alt="Seaborn-81"></p>

<p align="center"><img src="./assets/Seaborn-82.png" alt="Seaborn-82"></p>

<p align="center"><img src="./assets/Seaborn-83.png" alt="Seaborn-83"></p>

<p align="center"><img src="./assets/Seaborn-84.png" alt="Seaborn-84"></p>

<p align="center"><img src="./assets/Seaborn-85.png" alt="Seaborn-85"></p>

<p align="center"><img src="./assets/Seaborn-86.png" alt="Seaborn-86"></p>

<p align="center"><img src="./assets/Seaborn-87.png" alt="Seaborn-87"></p>

## 9. Seaborn-Onesky 变量间可视化分析

<p align="center"><img src="./assets/Seaborn-88.png" alt="Seaborn-88"></p>

<p align="center"><img src="./assets/Seaborn-89.png" alt="Seaborn-89"></p>

<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/Seaborn-90.png" width="340" alt="Seaborn-90">
  <img src="./assets/Seaborn-91.png" width="340" alt="Seaborn-91">
</div>

<p align="center"><img src="./assets/Seaborn-92.png" alt="Seaborn-92"></p>

<p align="center"><img src="./assets/Seaborn-93.png" alt="Seaborn-93"></p>

## 10. 利用 Matplotlib 和 Seaborn 搭建仪表盘

<p align="center"><img src="./assets/Seaborn-94.png" alt="Seaborn-94"></p>

<p align="center"><img src="./assets/Seaborn-95.png" alt="Seaborn-95"></p>

## 11. 数据分析四件套掌握程度总结

<p align="center"><img src="./assets/Seaborn-96.png" alt="Seaborn-96"></p>


