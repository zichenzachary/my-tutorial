# Obsidian 迁移流程

这份流程用于把从 Obsidian 导出的课程笔记整理成当前 VitePress 站点里的标准文档。后续处理新文档时，按这里的顺序执行即可。

## 1. 标题编号整理

先只读取标题，不改文件，过滤代码块里的 `#`。

目标：

- 保持正文顺序不移动。
- 修正重复的大章编号，例如后半部分又从 `## 1` 开始。
- 修正同级标题跳号，例如 `2.2` 后直接到 `2.4`。
- 修正同级标题重复，例如两个 `5.1.1`。
- 修正明显标题错字，例如 `caplot` 改为 `catplot`。
- 专有名词在标题中使用规范显示名，例如 `NumPy`、`Pandas`、`Matplotlib`、`Seaborn`。

标题排序前，先把新的标题结构发给用户确认。用户确认后再修改。

常用扫描命令：

```powershell
$inCode = $false; $lineNo = 0; Get-Content -Path "docs/路径/文档.md" -Encoding utf8 | ForEach-Object {
  $lineNo++
  if ($_ -match '^```') { $inCode = -not $inCode; return }
  if (-not $inCode -and $_ -match '^(#{1,6})\s+(.+)$') {
    '{0}:{1} {2}' -f $lineNo, $matches[1], $matches[2]
  }
}
```

## 2. 图片文件重命名

Obsidian 图片通常是 `L1.png`、`L2-10.png`、`L8-30.png` 之类。迁移后按文档中图片出现顺序统一命名。

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

- 按文档出现顺序，不按文件名自然排序。
- 先生成映射并确认数量。
- 重命名前检查目标文件是否已经存在。
- Windows 上大小写重命名可能需要临时名中转。

## 3. 图片引用格式转换

把 Obsidian 图片语法：

```markdown
![[L1.png]]
![[L1.png|400]]
```

改成 VitePress 可稳定渲染的 HTML 图片格式。

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
- `width="165"` 默认单位是 px。

如果用户指出某些图片不应该并排，则改成多张单图居中，上下排列。

## 4. 引用块转换

Obsidian 风格引用块可以保留，但类型尽量统一为当前站点样式。参照样式预览，需带上对应emoji。

示例：

```markdown
> [!TIP] 💡 为什么需要 Pandas
> 这里写提示内容
```

常见处理方式：

- `[!question] 标题` 可以改成 `[!TIP] 💡 原标题`
- `[!hint]` 可以改成 `[!TIP] 💡 提示`
- `[!info]` 可以改成 `[!NOTE] 📝 信息`

改之前如果语义不明确，先给用户看建议。

## 5. 专有名词规范

正文和标题里使用官方展示名：

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

不要把代码里的包名改成大写。

## 6. 文件夹和文档命名

推荐：

```text
docs/数据科学/Seaborn/Seaborn.md
docs/数据科学/Jupyter命令/Jupyter命令.md
docs/Pandas/Pandas.md
docs/Matplotlib/Matplotlib.md
```

规则：

- 文件夹和文件名尽量不要有空格。
- 英文多词可用短横线，例如 `Machine-Learning`。
- 已发布页面改路径前，需要同步改 `docs/.vitepress/config.mts` 和其他引用。
- Windows 上只改大小写可能失败，需要关闭占用目录的程序，或使用临时目录名中转。

## 7. 检查清单

每篇文档改完后执行检查。

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

检查旧图片语法和旧文件名：

```powershell
rg -n "!\\[\\[|```image-layout|L1|L2|L3|L8|L9" "docs/路径/文档.md"
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

最后跑构建：

```powershell
npm run docs:build
```

构建通过后再回复用户处理结果。

## 8. 最终回复格式

回复用户时简要说明：

- 改了哪个文档。
- 标题是否已重新编号。
- 图片处理了多少张。
- 是否还有旧语法残留。
- 图片引用是否全部存在。
- 是否跑过 `npm run docs:build`，结果是否通过。

示例：

```text
已处理好 docs/数据科学/Seaborn/Seaborn.md。

- 标题顺序已统一。
- 图片按出现顺序重命名为 Seaborn.png 到 Seaborn-96.png。
- 旧的 ![[...]] 和 image-layout 已清空。
- 97 个图片引用都能找到对应文件。
- npm run docs:build 构建通过。
```
