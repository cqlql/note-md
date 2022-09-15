## 安装 mysql 依赖

使用 dotnet cli 安装

```sh
dotnet add package MySql.Data
```

安装成功后会在 \*.csproj 文件生成一条引用。以后项目迁移只要运行就会自动安装。

```xml {7}
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <Nullable>enable</Nullable>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="MySql.Data" Version="8.0.30" />
  </ItemGroup>
</Project>
```

## 连接数据库

参考 [mysql 官方文档](https://dev.mysql.com/doc/connector-net/en/connector-net-connections-string.html)

## 插入数据

使用 @参数名 避免 sql 注入， 以及字符串单双引号冲突等等问题

```cs {5,15-17}
var name = "张三\"牛\"";
var pwd = "123123";
var nickname = "123123";

var sqlStr = "INSERT INTO db_user.user (username,password,nickname) VALUES (@name,@pwd,@nickname);";

string connStr = "server=192.168.1.222;user=joly;database=;port=3306;password=123123";
using (MySqlConnection conn = new MySqlConnection(connStr))
{
  using (MySqlCommand cmd = new MySqlCommand(sqlStr, conn))
  {
    conn.Open();

    // 参数赋值
    cmd.Parameters.AddWithValue("name", name);
    cmd.Parameters.AddWithValue("pwd", pwd);
    cmd.Parameters.AddWithValue("nickname", nickname);

    // 执行 sql 语句
    cmd.ExecuteNonQuery();
  }
}
```

## 参考文档

[相关包以及安装 - MySql 官方](https://dev.mysql.com/doc/connector-net/en/connector-net-installation-binary-nuget.html)
