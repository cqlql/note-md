


## plugins

此选项可选： 

- 给值：只加载指定插件  
- 不给值：加载所有插件

karma.conf.js

```
module.exports = function (config) {
    config.set({
        plugins: [
            "karma-webpack",
            "karma-chai",
            "karma-chai-dom",
            'karma-coverage',
            "karma-spec-reporter",
            "karma-sourcemap-loader",
            "karma-mocha",
            // 'karma-phantomjs-launcher',
            "karma-chrome-launcher"
        ]
    })
}

```
