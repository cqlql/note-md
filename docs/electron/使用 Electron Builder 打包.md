
## 概述

除了使用 [Electron Forge](https://www.electronforge.io/)（受官方推荐支持）, [Electron Builder](https://www.electron.build) 也是不错的选择。


## 配置

这里直接写在 package.json 中，不多说，直接贴代码吧。`build` 字段就是打包配置。

更多配置信息见[官方文档](https://www.electron.build/configuration/configuration)

portable 便携版每次打开速度较慢，原理就是每次打开都解压到临时目录，关闭后立即删除。如果不是临时使用，还是使用安装版吧

```json
{
  "name": "pwd-electron",
  "version": "1.0.0",
  "author": "cql",
  "scripts": {
    "start": "electron .",
    "build": "electron-builder build"
  },
  "devDependencies": {
    "electron": "22.0.2",
    "electron-builder": "^23.6.0"
  },
  "build": {  
    "productName":"pwd",
    "appId": "com.pwd.app",
    "copyright":"Copyright © 2023 ${author}",
    "directories": { 
      "output": "build"
    }, 
    "win": {  
      "icon": "./res/logo.ico",
      "target": "nsis" 
    }  
  }
}

```
