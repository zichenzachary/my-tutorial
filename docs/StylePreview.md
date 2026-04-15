# Style Preview

## 目录表
```
[[TOC]]
```

## 标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

## 强调

**强调**

## 斜体

*斜体*

***斜体并强调***

## 删除线

~~删除线~~

## 下划线

<u>下划线</u>

## 分隔线

---

## 高亮

<mark>高亮</mark>

## 代码

`code`

## 代码块

```c
print("Hello world!\n");
```

在代码块中实现行高亮：

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

代码块中聚焦：

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

代码块中的颜色差异：

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

高亮“错误”和“警告”：

```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

添加行号：

```ts:line-numbers {1}
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

## 代码组
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

## 引用

> 引用

## 表格

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## 无序列表

- 第一行
- 第二行
- 第三行

## 有序列表

1. 第一行
2. 第二行
3. 第三行

## 上下标

这是<sup>上标</sup>，这是<sub>下标</sub>


## 链接

[Google](https://www.google.com/)


## 内联 $\LaTeX$ 公式

行内公式：$E=mc^2$

块级公式：

$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

舒展公式：在公式前加入 `\displaystyle` 

$\displaystyle\int_{0}^{1} f(x) \, dx$

$\displaystyle\sum_{i=1}^{n}$

应用在分式上时，直接在 `\frac` 前面加 `d` 变为 `\dfrac`

$\dfrac{\dfrac{a}{c} - 4x}{b - \dfrac{a}{b}}$

## 自定义容器

> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。

::: details
折叠和展开详细信息。
:::

可以自定义标题：

> [!NOTE] 信息
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP] 提示 
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT] 重要
> 对用户达成目标至关重要的信息。

> [!WARNING] 警告
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION] 危险
> 行为可能带来的负面影响。

::: details 详细信息
折叠和展开详细信息。
:::

## 图片布局

需使用 `Image Layouts` 插件

![[Style Preview-2.png]]

示例：

```image-layout-a
![[Style Preview.png]]
![[Style Preview-1.png]]
```

```image-layout-d
![[Style Preview-9.png]]
![[Style Preview-4.png]]
![[Style Preview-7.png]]
```

## 图片标题

可使用 `Editing Toolbar` 插件，使文字居中

![[Style Preview-3.png]]

<center>图 1-1  山间布朗之家</center>

## 分区显示

需使用 `Code Tab` 插件

```tab
tab: 标题1
内容1

tab: 标题2
内容2
```

## 分栏布局

需使用 `Columns` 插件

➊ 使用类 callout 写法

> [!col]
> A col callout
>
> Second column of the callout

> [!col]
> A col callout
>
> Second column of the callout
>
> Third column of the callout

> [!col]
> A col callout
>
> > [!col-md-3]
> > The second column of the callout
> >
> > This column is now 3 times the width of the first column

➋ 使用类代码域写法

````col

height=longtest
===
```col-md
line 1
line 2
line 3
line 4
```

```col-md
line 1
line 2
```
````

## 表格

合并单元格 (有时候无法正常打印，暂不清楚原因)

需使用 `obsidian-sheets-basic` 插件

在表格中使用 `<` 字符表示与左边的单元格合并，使用 `^` 字符表示与上方的单元格合并

| 班级  | 姓名  | 学号  |
| --- | --- | --- |
| 1   | 张三  | 1   |
| ^   | 李四  | 2   |
| 2   | 王五  | 3   |
|^   | 赵六  | 4   |
| 3   | 无   |<     |

## 强制分页

```html
<div style="page-break-after: always;"></div>
```

## 将 Obsidian 图片引用转换为 Markdown 格式

图片放在跟 md 文件同级的 `assets` 目录下

进入 VSCode，  `Ctrl+H` 打开替换，点亮正则（`.*`）

（1）先替换带宽度的

查找 (Find)

```regex
!\[\[([^\|\]]+)\|(\d+)\]\]
```

替换（Replace）

```md
![](assets/$1){ width="$2" }
```

效果：

 `![[简明LaTex教程.png|500]]`  → `![](assets/简明LaTex教程.png){ width="500" }`

(2) 再替换不带宽度的

查找（Find）

```regex
!\[\[([^\]]+)\]\]
```

替换（Replace）

```md
![](assets/$1)
```

效果：

`![[简明LaTex教程-1.png]]`  → `![](assets/简明LaTex教程-1.png)`
