## flex 弹性盒布局

flex-basis：设置占用空虚，也可以使用 width/height。同时设置，flex-basis 优先级更高

flex-grow：按比例扩张，瓜分剩余空间。容器空间有剩余时生效

flex-shrink：按比例缩放，吸收超出空间。容器空间放不下时生效

## flex 容器里的元素居中

```css
.box {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
```

## gap

```css
.TableBtns {
  display: inline-flex;
  gap: 16px;
}
```
