

## 在 docker 环境中安装 mysql

详情移步




## 新建继承 DbContext 的类

这个类将对应一个数据库。

::: info 在新建前，先学习连接字符串相关知识

**连接字符串**以后可能会修改，有时也涉及到需要保护的敏感信息，所以一般不直接存放在源码中，可以存储在 appsettings.json、环境变量、用户机密存储或其他配置源中。这里我就放在 appsettings.json 中。

[appsettings.json 的使用文档](/DotNet/appsettings.json%20使用.html)

[数据库连接字符串的更多信息](https://learn.microsoft.com/zh-cn/ef/core/miscellaneous/connection-strings)

:::

代码示例：







## 参考文档

[MySql.EntityFrameworkCore 包使用文档](https://dev.mysql.com/doc/connector-net/en/connector-net-entityframework-core.html)
