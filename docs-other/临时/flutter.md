- [问题解决](#问题解决)
  - [卡在 `Running Gradle task 'assembleDebug'`，或者报错 `Exception in thread "main" java.util.zip.ZipException: error in opening zip file`](#卡在-running-gradle-task-assembledebug或者报错-exception-in-thread-main-javautilzipzipexception-error-in-opening-zip-file)
- [安装](#安装)
  - [windows](#windows)
    - [配置相关环境变量](#配置相关环境变量)
- [Final 和 Const](#final-和-const)
- [？？](#)

## 问题解决

### 卡在 `Running Gradle task 'assembleDebug'`，或者报错 `Exception in thread "main" java.util.zip.ZipException: error in opening zip file`

手动下载 `https://services.gradle.org/distributions/gradle-5.6.2-all.zip`，删除 `C:\Users\cql13\.gradle\wrapper\dists\gradle-5.6.2-all\9st6wgf78h16so49nn74lgtbb` (这是windows，其它平台可能不一样)目录下的 `gradle-5.6.2-all.zip` 文件和 `gradle-5.6.2` 文件夹。将下载的 `gradle-5.6.2-all.zip` 丢到这个目录下即可。注意文件版本与你的对应

下载地址也可以在项目中找到，`flutter_app\gradle\wrapper\gradle-wrapper.properties` 文件中有下载地址

参考：

https://stackoverflow.com/questions/61442718/whenever-i-try-flutter-run-it-gives-me-the-same-error-and-i-am-not-sure-what-to

https://my.oschina.net/u/729139/blog/4496537

## 安装

### windows

需安装 Android Studio

#### 配置相关环境变量

可以配置到用户变量中

**PATH** 新增 `C:\src\flutter\bin` (下载到的 flutter 解压到 D 盘情况)

**ANDROID_HOME** sdk 找不到情况才需要配。`ANDROID_HOME=D:\Android\sdk`

## Final 和 Const

Const 只能用于编译时常量，即编译时才能确定的值

Final 不仅可以编译时，还包括运行时才能确定的值

## ？？

```dart
class Impostor implements Person {
  // 
  get _name => '';

  String greet(String who) => 'Hi $who. Do you know who I am?';
}
```

重写运算符

noSuchMethod 应对不存在方法或变量调用时导致的NoSuchMethodError错误

class 的 Mixin


```dart
// 集合字面量
var names = <String>['Seth', 'Kathy', 'Lars'];
var uniqueNames = <String>{'Seth', 'Kathy', 'Lars'};
var pages = <String, String>{
  'index.html': 'Homepage',
  'robots.txt': 'Hints for web robots',
  'humans.txt': 'We are people, not machines'
};

// map 
var views = Map<int, View>();

// 函数类型：定义拥有参数个数，参数类型，返回值类型信息的函数类型
typedef Compare = int Function(Object a, Object b);

// p 为 null 将不设置
var a = p?.y;
```

元数据

反射
