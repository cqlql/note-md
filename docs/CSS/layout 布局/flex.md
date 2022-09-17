## 容器属性

### gap 项间距

```css
.TableBtns {
  display: inline-flex;
  gap: 16px;
}
```

## 项目属性

### flex-grow 增长

按设置的比例填充剩余空间，默认为 0，即如果存在剩余空间，也不放大

**可放大空间** = 容器尺寸 - 所有项的 flex-basis 或者内容大小（什么时候以内容大小为准：当内容尺寸大于 flex-basis 时）

### flex-shrink 缩小

设置缩小比例，默认 1，即空间不够，该元素将按 1 的占比缩小可缩放空间。

**设置成不缩放：**设置成 0 即可。此时当容器不够时，将按 flex-basis 设置的大小显示。

**可缩放的空间 = flex-basis 设置的值 - 内容大小**。所以当内容大于 flex-basis 值时，是不能被缩放的，而且此时固定放大到内容大小。其他内容小于 flex-basis 也将缩放到内容大小后就不再缩放了。也就是**项的最小尺寸就是内容尺寸**

### flex-basis 基础大小

设置在分配多余空间前的基础大小

假如 flex-basis 为 auto，那么将以内容大小作为 flex-basis 的值

### flex 简写

flex-grow flex-shrink flex-basis 的简写

有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

### order 项排序

数值越小，排列越靠前，默认为 0

### align-self

设置不一样的对其方式。可覆盖 align-items 属性。

默认值 auto，表示继承父容器的 align-items。
