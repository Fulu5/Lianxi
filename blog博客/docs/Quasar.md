# Quasar

## 断点

| Token           | Media     | Description / When it applies |
| --------------- | --------- | ----------------------------- |
| <code>xs</code> | 0 ~ 599px | Extra small sized window      |
| <code>sm</code> | ≥ 600px   | Small sized window            |
| <code>md</code> | ≥ 1024px  | Medium sized window           |
| <code>lg</code> | ≥ 1440px  | Large sized window            |
| <code>xl</code> | ≥ 1920px  | Extra large sized window      |

## Grid Gutter

| Class                    | Width |
| ------------------------ | ----- |
| <code>q-gutter-xs</code> | 4px   |
| <code>q-gutter-sm</code> | 8px   |
| <code>q-gutter-md</code> | 16px  |
| <code>q-gutter-lg</code> | 24px  |
| <code>q-gutter-xl</code> | 48px  |

### 1. q-gutter-{size}

> `q-gutter-*`类对父类应用负的顶部和左`margins`，对子类应用正的顶部和左`margins`。在处理其他间距类时要考虑到这一点，以免破坏`gutter`的 css。
>
> 当直接子类 **没有** `col-*`或 `offset-*`类时，将使用该类。

### 2. q-col-gutter-{size}

> `q-col-gutter-*`类对父类应用负的顶部和左`margins`，对子类应用正的顶部和左`paddings`。在处理其他间距类时要考虑到这一点，以免破坏`gutter`的 css。
>
> 当直接子类 **包含** col-*或 offset-*类时，将使用该类。

### 3. 设置 background, margin or border related properties

- **父类**
  > 1. 因为`q-gutter-*`和`q-col-gutter-*`类都对父类应用了负的顶部和左`margins`，所以不应该在父类上应用背景、边距或边框相关属性。
  > 2. 相反，您需要将它们包装在容器中，在容器上应用样式，并在容器上添加 `overflow-auto` 或 `row` 类。
- **子类**
  > 1. `q-gutter-*`类不会更改子元素的`padding`，因此可以直接在子元素上使用背景或边框。
  > 2. `q-col-gutter-*`类对子类应用了一个负的顶部和左`padding`，所以不应该对子类应用背景、边距或边框相关属性。相反，您需要将样式元素放在子元素中，并将样式应用于该元素。
