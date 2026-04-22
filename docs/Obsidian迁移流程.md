# Obsidian 迁移流程

这份流程用于把从 Obsidian 复制过来的整套笔记迁移到当前 VitePress 站点中。当前约定是：

- 用户给我的通常是一个文件夹，例如 `笔记1/`
- 里面通常包含一个完整文档，例如 `笔记1.md`
- 以及一个同级 `assets/` 文件夹

迁移时先做“完整迁移”，把内容和格式都整理好；是否拆分成子文档，要在完整迁移完成后再单独询问用户。当前阶段先**不处理导航栏和侧边栏**，这部分后续可以单独配置。

## 1. 总原则

先完整迁移，再决定是否拆分。

完整迁移阶段要做到：

- 原始正文顺序不乱
- 标题结构清晰
- 图片全部可正常显示
- Obsidian 语法替换为 VitePress 稳定语法
- 专有名词、提示块、代码块格式统一

完整迁移完成后，才询问用户：

- 要不要拆分
- 如果拆分，是否保留一级标题序号
- 拆分后的文件名和标题编号采用哪套规则

不要在用户还没确认拆分规则之前，提前拆文档。

## 2. 输入结构约定

典型输入：

```text
笔记1/
├─ 笔记1.md
└─ assets/
   ├─ L1.png
   ├─ L1-1.png
   └─ ...
```

迁移目标通常也是同样结构：

```text
docs/某分类/笔记1/
├─ 笔记1.md
└─ assets/
   ├─ 笔记1.png
   ├─ 笔记1-1.png
   └─ ...
```

规则：

- 完整文档文件保留，不删除
- `assets` 文件夹保留在文档同级目录
- 拆分时产生的新子文档也放在同一目录
- 当前阶段先不改 `config.mts` 里的导航和侧边栏，除非用户明确要求

## 3. 完整迁移阶段

### 3.1 标题整理

先只读取标题，不改文件，过滤代码块里的 `#`。

目标：

- 保持正文顺序不移动
- 修正重复的大章编号，例如后半部分又从 `## 1` 开始
- 修正同级标题跳号，例如 `2.2` 后直接到 `2.4`
- 修正同级标题重复，例如两个 `5.1.1`
- 修正明显标题错字，例如 `caplot` 改为 `catplot`
- 专有名词在标题中使用规范显示名，例如 `NumPy`、`Pandas`、`Matplotlib`、`Seaborn`

如果标题结构调整幅度较大，先把新的标题结构发给用户确认，再正式修改。

### 3.2 图片文件重命名

Obsidian 图片通常是 `L1.png`、`L2-10.png`、`L8-30.png` 这类名字。迁移后按文档中图片出现顺序统一命名。

命名规则：

- 第一张：`文档名.png`
- 第二张：`文档名-1.png`
- 第三张：`文档名-2.png`
- 依此类推

示例：

```text
L8.png    -> Seaborn.png
L8-1.png  -> Seaborn-1.png
L8-11.png -> Seaborn-2.png
```

注意：

- 按文档出现顺序，不按文件名自然排序
- 先生成映射并确认数量
- 重命名前检查目标文件是否已经存在
- Windows 上只改大小写时，可能需要临时名中转

### 3.3 图片引用格式转换

把 Obsidian 图片语法：

```markdown
![[L1.png]]
![[L1.png|400]]
```

改成 VitePress 更稳定的 HTML 图片格式。

单张图片：

```html
<p align="center"><img src="./assets/文档名.png" alt="文档名"></p>
```

带宽度的单张图片：

```html
<p align="center"><img src="./assets/文档名.png" width="400" alt="文档名"></p>
```

两图并排：

```html
<div style="display: flex; justify-content: center; gap: 10px; align-items: center;">
  <img src="./assets/文档名-1.png" width="340" alt="文档名-1">
  <img src="./assets/文档名-2.png" width="340" alt="文档名-2">
</div>
```

四图并排：

```html
<div style="display: flex; justify-content: center; gap: 10px; align-items: center; flex-wrap: wrap;">
  <img src="./assets/文档名-1.png" width="165" alt="文档名-1">
  <img src="./assets/文档名-2.png" width="165" alt="文档名-2">
  <img src="./assets/文档名-3.png" width="165" alt="文档名-3">
  <img src="./assets/文档名-4.png" width="165" alt="文档名-4">
</div>
```

宽度约定：

- 两图并排：`340 + 340 + 10 = 690px`
- 四图并排：`165 * 4 + 10 * 3 = 690px`
- `width="165"` 默认单位就是 px

如果用户指出某些图片不应该并排，就改成单图居中、上下排列。

### 3.4 提示块转换

Obsidian 风格提示块可以保留，但类型尽量统一为当前站点样式，并补上对应 emoji。

示例：

```markdown
> [!TIP] 💡 为什么需要 Pandas
> 这里写提示内容
```

常见处理方式：

- `[!question] 标题` 改成 `[!TIP] 💡 原标题`
- `[!hint]` 改成 `[!TIP] 💡 提示`
- `[!info]` 改成 `[!NOTE] 📝 信息`

如果语义不明确，先给用户看建议，不要自作主张替换。

### 3.5 专有名词规范

正文和标题里统一使用官方展示名：

```text
NumPy
Pandas
Matplotlib
Seaborn
Jupyter Notebook
MySQL
DataFrame
Series
```

代码里的包名保持原样：

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
```

不要把代码里的包名强行改成展示名。

## 4. 拆分阶段

只有在完整迁移已经完成后，才进入这一阶段。

拆分前先问用户：

- 是否需要拆分
- 按几级标题拆分
- 是否保留一级标题编号
- 文件名是否保留序号
- 子文档内标题编号是否保留原编号体系

例如用户后来确认的新规则可能是：

- 子文档文件名保留一级标题序号
- 序号和标题之间不加空格
- 例如 `2.NumPy数组形态转换与计算.md`
- 子文档内部编号保留原体系
- 例如文档内第一个标题为 `## 2.1 NumPy 数组创建函数`

拆分时注意：

- 完整文档 `笔记1.md` 不删除
- 先生成新子文档，再让用户确认是否需要清理旧的错误拆分版本
- 如果目录里已经存在旧的无序号拆分文件，不要默认保留，需按用户要求清理

## 5. 文件和目录命名

推荐结构：

```text
docs/文章/数据分析/Seaborn/Seaborn.md
docs/文章/数据分析/Seaborn/1.Seaborn简介.md
docs/文章/数据分析/Jupyter命令/Jupyter命令.md
```

规则：

- 文件夹名尽量不要有空格
- 文件名尽量不要有空格
- 拆分后的子文档是否带序号，取决于用户确认的规则
- 英文多词如果需要可用短横线，但当前项目里更常见的是直接连写
- Windows 上只改大小写可能失败，必要时使用临时名中转

## 6. 检查清单

每篇文档处理完成后执行检查。

检查标题：

```powershell
$inCode = $false; $lineNo = 0; Get-Content -Path "docs/路径/文档.md" -Encoding utf8 | ForEach-Object {
  $lineNo++
  if ($_ -match '^```') { $inCode = -not $inCode; return }
  if (-not $inCode -and $_ -match '^(#{1,6})\s+(.+)$') {
    '{0}:{1} {2}' -f $lineNo, $matches[1], $matches[2]
  }
}
```

检查旧图片语法：

```powershell
rg -n "!\[\[|```image-layout" "docs/路径/文档.md"
```

检查图片是否缺失：

```powershell
$refs = [regex]::Matches((Get-Content -Path "docs/路径/文档.md" -Encoding utf8 -Raw), '<img src="\./assets/([^"]+)"')
"IMG_REFS=" + $refs.Count
$missing = foreach ($r in $refs) {
  $p = Join-Path "docs/路径/assets" $r.Groups[1].Value
  if (-not (Test-Path -LiteralPath $p)) { $r.Groups[1].Value }
}
if ($missing) { "MISSING:"; $missing } else { "MISSING=0" }
```

检查明显冲突和拼写残留：

```powershell
rg -n "<<<<<<<|=======|>>>>>>>|Flase|Ture|Seires|indx|arrary|funtion|paramter" "docs/路径/文档.md"
```

如果用户要求拆分，还要额外检查：

- sidebar 链接和真实文件名是否一致
- 路径大小写是否与实际文件夹一致
- 新旧拆分文件是否重复并存

最后如果需要再跑构建：

```powershell
npm run docs:build
```

## 7. 最终回复格式

回复用户时简要说明：

- 改了哪个完整文档
- 图片处理了多少张
- 是否还有旧语法残留
- 图片引用是否全部存在
- 是否已经拆分
- 如果已拆分，拆分规则是什么
- 是否跑过 `npm run docs:build`，结果是否通过

示例：

```text
已处理好 docs/文章/数据分析/Seaborn/Seaborn.md。

- 完整文档已迁移完成。
- 图片按出现顺序重命名为 Seaborn.png 到 Seaborn-96.png。
- 旧的 ![[...]] 已清空。
- 图片引用检查通过。
- 目前还没有拆分；如果你要，我下一步再按一级标题拆分。
```
