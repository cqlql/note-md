
```js
let webpack = require('webpack');

webpack(require('./webpack.config')(),function (err, stats) {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  // const info = stats.toJson();
  const info =stats.toString({
    // chunks: true,
    // Add console colors
    colors: true
  });

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings)
  }

  console.log(info)
})
```
