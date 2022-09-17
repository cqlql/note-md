## 容器属性

## 项目属性

### flex-grow 增长

按设置的比例填充剩余空间，默认为 0，即如果存在剩余空间，也不放大

### flex-shrink 缩小

设置缩小比例，默认 1，即空间不够，该项将 1 的占比缩小。

如果是 0，则按 flex-basis 设置的宽度显示

疑问：假如某项内容过多，是否撑住宽度不让缩小呢？答案：是的，真正的等比只在内容一致的情况

### flex-basis 基础大小

设置在分配多余空间前的基础大小

### flex 简写

flex-grow flex-shrink flex-basis 的简写

有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

### order 项排序

数值越小，排列越靠前，默认为 0

### align-self

设置不一样的对其方式。可覆盖 align-items 属性。

默认值 auto，表示继承父容器的 align-items。
