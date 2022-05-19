

## 这里涉及的工具库：

- karma：测试管理工具
- mocha：测试框架
- chai：断言库
- webpack：实现 es6 语法转换

## 需要安装的包

测试相关：  
mocha karma-mocha chai karma-chai 

测试浏览器环境：  
karma-chrome-launcher karma-phantomjs-launcher


es6 转换相关：  
webpack  
babel-core babel-loader babel-preset-env [karma-webpack](https://www.npmjs.com/package/karma-webpack)

## karma.config.js 参考

这里说明一下，并不需要设置 plugins 选项

```js
// Karma configuration

let path = require('path')

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','chai'],


    // list of files / patterns to load in the browser
    files: [
      './test/*.js'
    ],


    // list of files to exclude
    // exclude: [
    //   'You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".',
    //   'You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".'
    // ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        './test/*.js':['webpack']
    },

    webpack:{
      module: {
        //加载器配置
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              "presets": ["env"],
            }
          }
        ]
      },
    },
    webpackMiddleware: {
      noInfo: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

```

## 问题解决，注意项：

### karma 有依赖缺失问题：

勿使用淘宝镜像命令 cnpm 安装。  **可使用 yarn**，速度也很快

## test.js 代码说明范例

```
import {isNum,isString} from '../src/index'

describe('index.js的测试', function () {
    it('1应该是数字', function() {
        // expect(isNum(1)).to.be.true
        isNum(1).should.equal(true)
    })
    it('"1" 应该是字符', function() {
        // expect(isString('1')).to.be.true
        isString('1').should.equal(true)
    })
})

```