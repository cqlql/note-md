## 注入方式：webapi + ef core 项目

appsettings.json 配置文件

```json {9-11}
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "UserManageDb": "server=192.168.1.223;database=db_user;user=joly;password=123123"
  }
}
```

入口文件 Program.cs

获取连接字符串，并注入到 DbContext

```cs {3-4}
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddDbContext<UserManage>(options =>
              options.UseMySQL(ConfigurationExtensions.GetConnectionString(builder.Configuration, "UserManageDb")));
```

继承 DbContext 的 UserManage.cs

```cs

using Microsoft.EntityFrameworkCore;
namespace AppWebApi
{
  public class UserManage : DbContext
  {
    public DbSet<User>? User { get; set; }

    public UserManage(DbContextOptions<UserManage> options) : base(options)
    {
    }
  }
}
```

控制器文件 UserController.cs

由框架通过控制器构造函数注入 UserManage 实例

将为每个请求创建 `ApplicationDbContext` 实例，并传递给控制器，并在请求结束后释放连接资源。

```cs
[ApiController]
[Route("[controller]")]
[Produces("application/json")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly UserManage _context;

    public UserController(UserManage context, ILogger<UserController> logger)
    {
      _context = context;
      _logger = logger;
    }

    [HttpGet("GetUserList")]
    public DbSet<User> GetUserList()
    {
      return _context.User!;
    }
}
```

## new 方式：任意项目

这是一个控制台程序例子

UserManage.cs

```cs
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
namespace AppConsole
{
  public class UserManage : DbContext
  {
    // 将 User 映射到表
    public DbSet<User> User { get; set; }

    private readonly IConfigurationRoot? _configuration;
    public UserManage (IConfigurationRoot configuration) {
      _configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      // MysqlDatabase 是数据库名
      optionsBuilder.UseMySQL(ConfigurationExtensions.GetConnectionString(_configuration!, "MysqlDatabase")!);
    }
  }
}

```

Program.cs

```cs
using Microsoft.Extensions.Configuration;
 // 用指定 json 文件创建 ConfigurationBuilder 对象
  var builder = new ConfigurationBuilder()
      // Microsoft.Extensions.Configuration.FileExtensions 包
      .SetBasePath(Directory.GetCurrentDirectory())
      // Microsoft.Extensions.Configuration.Json 包
      .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

using (var db = new UserManage(builder.Build()))
{
  foreach (var item in db.User!)
  {
    Console.WriteLine(item.username);
  }
}
```

## 数据播种

实现数据自动增删改。比如实现一个在如果没有数据时，填充一个初始数据。


官方文档参考 [数据种子设定 - EF Core](https://learn.microsoft.com/zh-cn/ef/core/modeling/data-seeding)

## fluent api
