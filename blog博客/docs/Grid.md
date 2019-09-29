# CSS Grid

### 父元素 网格容器(Grid Container) 属性

- [display](#display)
- [grid-template-rows](#grid-template-rows-grid-template-columns)
- [grid-template-columns](#grid-template-rows-grid-template-columns)
- [grid-template-areas](#grid-template-areas)
- [grid-auto-rows](#grid-auto-rows-grid-auto-columns)
- [grid-auto-columns](#grid-auto-rows-grid-auto-columns)
- [grid-auto-flow](#grid-auto-flow)
- [grid-template](#grid-template)
- [grid](#grid)
- [grid-row-gap](#grid-row-gap-grid-column-gap)
- [grid-column-gap](#grid-row-gap-grid-column-gap)
- [grid-gap](#grid-gap)
- [justify-items](#justify-items-align-items)
- [align-items](#justify-items-align-items)
- [place-items](#place-items)
- [justify-content](#justify-content-align-content)
- [align-content](#justify-content-align-content)
- [place-content](#place-content)

### 子元素 网格项(Grid Items) 属性

- [grid-row-start](#grid-row-start-grid-row-end-grid-column-start-grid-column-end)
- [grid-row-end](#grid-row-start-grid-row-end-grid-column-start-grid-column-end)
- [grid-column-start](#grid-row-start-grid-row-end-grid-column-start-grid-column-end)
- [grid-column-end](#grid-row-start-grid-row-end-grid-column-start-grid-column-end)
- [grid-row](#grid-row-grid-column)
- [grid-column](#grid-row-grid-column)
- [grid-area](#grid-area)
- [justify-self](#justify-self-align-self)
- [align-self](#justify-self-align-self)
- [place-self](#place-self)

## Grid Container 网格容器属性

### display

定义网格容器

值：

- `grid`
- `inline-grid`

CSS 代码:

```
.container {
  display: grid | inline-grid;
}
```

- [Grid Container 目录](#父元素-网格容器-grid-container-属性)

### grid-template-rows / grid-template-columns

定义网格的行和列，`grid-template-columns`属性定义每一列的列宽，`grid-template-rows`属性定义每一行的行高。

示例：

CSS 代码:

```
.container {
  grid-template-rows: 25% 100px auto;
  grid-template-columns: 33.33% 33.33% 33.33%;
}
```

- [Grid Container 目录](#父元素-网格容器-grid-container-属性)

### (1). repeat()

```
.container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}
```

`repeat()`接受两个参数，第一个参数是重复的次数（上例是 3），第二个参数是所要重复的值。

`repeat()`重复某种模式也是可以的。

```
grid-template-columns: repeat(2, 100px 20px 80px);
```

上面代码定义了 6 列，第一列和第四列的宽度为`100px`，第二列和第五列为`20px`，第三列和第六列为`80px`。

### (2). auto-fill / auto-fit 关键字

`auto-fill`关键字表示自动填充。

```
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
```

上面代码表示每列宽度`100px`，然后自动填充，直到容器不能放置更多的列。

`auto-fit` 关键词与 `auto-fill` 有点类似，只是在网格项放置之后，它只会在需要时创建尽可能多的轨道，而重复的空轨道会堆叠在一起（合并）。

### (3). fr 关键字

为了方便表示比例关系，网格布局提供了`fr`关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为`1fr`和`2fr`，就表示后者是前者的两倍。

```
.container {
  display: grid;
  grid-template-columns: 150px 1fr 2fr;
}
```

上面代码表示，第一列的宽度为 150 像素，第二列的宽度是第三列的一半。

### (4). minmax()

`minmax()`函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

```
grid-template-columns: 1fr 1fr minmax(100px, 1fr);
```

上面代码中，`minmax(100px, 1fr)`表示列宽不小于`100px`，不大于`1fr`。

### (5). auto 关键字

`auto`关键字表示由浏览器自己决定长度。

```
grid-template-columns: 100px auto 100px;
```

上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了`min-width`，且这个值大于最大宽度。

### (6). 网格线的名称

可以使用方括号，指定每一根网格线的名字，方便以后的引用。

```
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```

上面代码指定网格布局为 3 行 x 3 列，因此有 4 根垂直网格线和 4 根水平网格线。方括号里面依次是这八根线的名字。

网格布局允许同一根线有多个名字，比如`[fifth-line row-5]`。

- [Grid Container 目录](#父元素-网格容器-grid-container-属性)

### grid-template-areas

指定"区域"（area），一个区域由单个或多个单元格组成。

```
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
```

上面代码先划分出 9 个单元格，然后将其定名为 a 到 i 的九个区域，分别对应这九个单元格。

多个单元格合并成一个区域的写法如下。 +

```
grid-template-areas: 'a a a'
                     'b b b'
                     'c c c';
```

上面代码将 9 个单元格分成`a`、`b`、`c`三个区域。

- [Grid Container 目录](#父元素-网格容器-grid-container-属性)

### grid-auto-rows / grid-auto-columns

`grid-auto-columns`属性和`grid-auto-rows`属性用来设置浏览器自动创建的多余网格的列宽和行高(隐式轨道的大小)。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。

- [Grid Container 目录](#父元素-网格容器-grid-container-属性)

### grid-auto-flow

子元素放置顺序，默认"先行后列"。

`grid-auto-flow`属性除了设置成`row`和`column`，还可以设成`row dense`和`column dense`。这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。

- [Grid Container 目录](#父元素-网格容器-grid-container-属性)

### grid-template

用于定义`grid-template-rows` ，`grid-template-columns` ，`grid-template-areas` 简写属性。

值：

- `none`：将所有三个属性设置为其初始值
- `<grid-template-rows>`：设置 `grid-template-rows` ，并且设置`grid-template-areas`为`none`
- `<grid-template-columns>`：设置 `grid-template-columns` ，并且设置`grid-template-areas`为`none`
- 同时指定三个属性：

```
.container {
  grid-template:
    [row1-start] "header header header" 25px [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
}
```

等价于：

```
.container {
  grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;
  grid-template-areas:
    "header header header"
    "footer footer footer";
}
```

- [Grid Container 目录](#父元素-网格容器-grid-container-属性)

### grid

值：

- `none`：将所有子属性设置为其初始值。
- `<grid-template>`：与 [grid-template](#grid-template) 简写的工作方式相同。
- `行高 / auto-flow 隐列`
- `auto-flow 隐行 / 列宽`

  `auto-flow` 关键字位于斜杠的右侧，则会将 `grid-auto-flow` 设置为 `column`，否则为 `row`，如果另外指定了 `dense` 关键字，则自动放置算法使用 “dense” 算法。 如果省略 `隐行 / 隐列` ，则将其设置为 `auto`。

* [Grid Container 目录](#父元素-网格容器-grid-container-属性)

### grid-row-gap / grid-column-gap

指定网格线(grid lines)的大小。即列/行之间间距，网格外部边缘不会有这个间距。

注意：这两个属性将删除 `grid-` 前缀，就是将 `grid-column-gap` 和 `grid-row-gap` 重命名为 `column-gap` 和 `row-gap`。 Chrome 68+，Safari 11.2 Release 50+ 和 Opera 54+ 已经支持无前缀的属性。

- [Grid Container 目录](#父元素-网格容器-grid-container-属性)

### grid-gap

`grid-column-gap` 和 `grid-row-gap` 的简写语法

值：

- `<grid-row-gap> <grid-column-gap>`：长度值

```
.container{
  /* 设置 grid-column-gap 和 grid-row-gap */
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  /* 等价于 */
  grid-gap: 10px 10px;

  /* 等价于 */
  grid-gap: 10px;
}
```

- [Grid Container 目录](#父元素-网格容器-grid-container-属性)

### justify-items / align-items

justify-items 属性设置单元格内容的水平位置（左中右），align-items 属性设置单元格内容的垂直位置（上中下）。

值：

- `start`：对齐单元格的起始边缘。
- `end`：对齐单元格的结束边缘。
- `center`：单元格内部居中。
- `stretch`：拉伸，占满单元格的整个宽度（默认值）。

### place-items

`place-items` 属性是 `align-items` 属性和 `justify-items` 属性的合并简写形式。

```
place-items: <align-items> <justify-items>;
```

- [Grid Container 目录](#父元素-网格容器-grid-container-属性)

### justify-content / align-content

`justify-content` 属性是整个内容区域在容器里面的水平位置（左中右），`align-content` 属性是整个内容区域的垂直位置（上中下）。

值：

- start - 对齐容器的起始边框。
- end - 对齐容器的结束边框。
- center - 容器内部居中。
- stretch - 项目大小没有指定时，拉伸占据整个网格容器。
- space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。
- space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。
- space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。

### place-content

`place-content` 属性是 `align-content` 属性和 `justify-content` 属性的合并简写形式。

```
place-content: <align-content> <justify-content>
```

- [Grid Container 目录](#父元素-网格容器-grid-container-属性)

## Grid Item 网格项属性

### grid-row-start / grid-row-end / grid-column-start / grid-column-end

值：

- `<line>` ：编号的网格线，或者网格线的名字
- `span <number>` ：左右边框（上下边框）之间跨越多少个网格。
- `span <name>` ：表示跨越到该名称位置
- `auto`：表示自动放置，自动跨度，默认会扩展一个网格轨道的宽度或者高度

如果没有声明指定 `grid-column-end` / `grid-row-end`，默认情况下，该网格项将占据 1 个轨道。

项目可以相互重叠，可以使用 `z-index` 来控制它们的重叠顺序。

- [Grid Item 目录](#子元素-网格项-grid-items-属性)

### grid-row / grid-column

`grid-row` 属性是 `grid-row-start` 属性和 `grid-row-end` 的合并简写形式，`grid-column` 属性是 `grid-column-start` 和 `grid-column-end` 的合并简写形式

```
.item {
  grid-column:  <start-line> / <end-line> | <start-line> / span <value>;
  grid-row: <start-line> / <end-line> | <start-line> / span <value>;
}

.item-c {
  grid-column: 3 / span 2;
  grid-row: span 2;
}
```

- [Grid Item 目录](#子元素-网格项-grid-items-属性)

### grid-area

为网格项提供一个名称，以便可以 被使用网格容器 [grid-template-areas](#grid-template-areas) 属性创建的模板进行引用。 另外，这个属性可以用作 `grid-row-start` + `grid-column-start` + `grid-row-end` + `grid-column-end` 的简写。

```
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
     _1_
   2|   |4
    |_ _|
      3
}

.item-d {
  grid-area: header
}
```

- [Grid Item 目录](#子元素-网格项-grid-items-属性)

### justify-self / align-self

`justify-self` 属性设置单元格内容的水平位置（左中右），跟 `justify-items` 属性的用法完全一致，但只作用于单个项目。

`align-self` 属性设置单元格内容的垂直位置（上中下），跟 `align-items` 属性的用法完全一致，也是只作用于单个项目。

值：

- start：对齐单元格的起始边缘。
- end：对齐单元格的结束边缘。
- center：单元格内部居中。
- stretch：拉伸，占满单元格的整个宽度（默认值）。

### place-self

`place-self` 属性是 `align-self` 属性和 `justify-self` 属性的合并简写形式。

如果省略第二个值，place-self 属性会认为这两个值相等。

```
place-self: <align-self> <justify-self>;

.item-a {
  place-self: center;
}
```

- [Grid Item 目录](#子元素-网格项-grid-items-属性)
