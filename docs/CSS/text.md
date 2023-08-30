---
title: 文本
nav: css
---

- [word-spacing：html 空格宽度控制](#word-spacinghtml-空格宽度控制)
- [换行](#换行)
- [不换行](#不换行)
- [裁剪](#裁剪)
- [垂直居中](#垂直居中)
- [文字描边](#文字描边)

## word-spacing：html 空格宽度控制

控制文本中的空格宽度

```html
<style>
  .l-label {
    word-spacing: 30px;
  }
</style>
<div class="l-label">行 为:</div>
```

## 换行

单词默认会自动换行，字母就要加下面的

```css
.t {
  word-wrap: break-word;
  word-break: break-all;
}
```

pre 自动换行(在保留文本格式前提下自动换行)

```
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
```

兼容性：所有浏览器

## 不换行

```css
.t {
  white-space: nowrap;
}
```

## 裁剪

快速使用：

```css
/*
单行
兼容性：包括ie6的所有
 */
.test {
  width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 多行裁剪 */
.test {
  width: 50px;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
```

## 垂直居中

作用到元素上

```css
/* 1. inline-height */
.test {
  height: 50px;
  line-height: 50px;
}

/* 2. flex */
.test {
  display: flex; /* 或者 inline-flex */
  align-items: center; /* 垂直 */
  justify-content: center; /* 左右 */
}
```

## 文字描边

```css
.demo {
  -webkit-text-stroke: 4px red;
}
```
