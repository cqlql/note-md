- [原生标题栏](#原生标题栏)
  - [获取当前 webview 标题栏](#获取当前-webview-标题栏)
  - [manifest.json 设置](#manifestjson-设置)
  - [定制按钮](#定制按钮)
  - [修改 title 、颜色](#修改-title-颜色)
  - [字体图标](#字体图标)
  - [原生返回按钮事件](#原生返回按钮事件)
  - [文档参考](#文档参考)
- [webview 是否可后退](#webview-是否可后退)

## 原生标题栏

### 获取当前 webview 标题栏

```js
var titleNView = plus.webview.currentWebview().getTitleNView();
```

### manifest.json 设置

```json
{
  "plus": {
    "launchwebview": {
      "titleNView": {
        "backgroundcolor": "#f7f7f7",
        // "titletext": "首页",  // 不设置便会以 webview title 作为值
        "titlecolor": "#ff461f",
        "autoBackButton": true // 显示内置的返回按钮。将出发原生返回事件
      }
    }
  }
}
```

### 定制按钮

```js
plus.webview.currentWebview().setStyle({
  titleNView: {
    titleColor: "#000",
    buttons: [
      // 返回按钮
      {
        type: "back",
        text: "\ue123",
        float: "left",
        onclick: clickButton(),
      },

      // 分享按钮
      {
        float: "right",
        fontSize: "27px",
        fontSrc: "__wap2app.ttf", //wap2app内置字体文件
        text: "\ue602",
        onclick:
          "javascript:plus.webview.getWebviewById('page1').evalJS('myshare();')",
      },
    ],
  },
});
```

### 修改 title 、颜色

**使用浏览器 title**
不设置 titleText 便会以浏览器 title 作为值

**手动设置**

```js
plus.webview.currentWebview().setStyle({
  titleNView: {
    titleText: "new text",
    titlecolor: isShow ? "#88b8f8" : "#00000000", // #00000000 为透明色
  },
});
```

### 字体图标

wap2app 内置字体：
titleNView 上经常需要配置的字体图标，wap2app 已经内置，字体及 unicode 编码如下：

向右箭头：\ue600
向左箭头（返回箭头）：\ue601
分享图标：\ue602
收藏图标：\ue604
主页图标：\ue605
关闭图标：\ue650

### 原生返回按钮事件

参考文档：https://blog.csdn.net/qq_43681948/article/details/100552140

```js
// callback 参数要传一个function
var plusReady = function (callback) {
  if (window.plus) {
    callback();
  } else {
    document.addEventListener("plusready", callback);
  }
};
//plusReady是一个function
plusReady(function () {
  var firstBack = 0;
  var handleBack = function () {
    var currentWebview = plus.webview.currentWebview();
    var topWebview = plus.webview.getTopWebview();
    var now =
      Date.now ||
      function () {
        return new Date().getTime();
      };
    currentWebview.canBack(function (evt) {
      /**
       * 有可后退的历史记录，则后退。
       * 否则，关闭当前窗口。
       * 如果当前窗口是入口页，那么执行退出的逻辑。
       */
      if (currentWebview.id === plus.runtime.appid) {
        if (!firstBack) {
          firstBack = now();
          plus.nativeUI.toast("再按一次退出应用");

          // 定时俩秒内
          setTimeout(function () {
            firstBack = 0;
          }, 2000);
        } else if (now() - firstBack < 2000) {
          // 退出应用
          plus.runtime.quit();
        }
      } else {
        // canBack: 查询Webview窗口是否可后退
        if (evt.canBack) {
          history.back();
        } else {
          currentWebview.close("auto");
        }
      }
    });
  };
  // backbutton判断物理返回键
  plus.key.addEventListener("backbutton", handleBack);
});
```

### 文档参考

https://ask.dcloud.net.cn/article/1205

https://ask.dcloud.net.cn/article/1246

## webview 是否可后退

```js
plus.webview.currentWebview().canBack(function (e) {
  console.log("是否可返回：" + e.canBack);
});
```
