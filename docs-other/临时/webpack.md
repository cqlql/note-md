- [webpack](#webpack)

## css 使用@别名

可以使用 ~@/

```js
const webpackConfig = {
  resolve: {
    alias: {
      // css-loader 专用，也可像 js 一样使用 @
      // https://webpack.js.org/loaders/css-loader/#url
      // 因为 ：
      // url(image.png) => require('./image.png')
      // 所以
      // url(@/image.png) => require('./@/image.png')
      "./@": path.resolve(__dirname, "src"),

      // js 用
      "@": path.resolve(__dirname, "src"),
    },
  },
};
```
