
## 声明一个继承 DbContext 的类

这样就可以通过此类的实例访问数据库了

```cs
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
namespace AppConsole
{
  public class UserManage : DbContext
  {
    // 将 User 映射到表
    public DbSet<User> User { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      // Program.configuration 说明：这是根据 appsettings.json 创建的对象，将在控制台程序运行时进行初始化，实现代码见下面的控制台程序入口
      // MysqlDatabase 是数据库名
      optionsBuilder.UseMySQL(ConfigurationExtensions.GetConnectionString(Program.configuration!, "MysqlDatabase")!);
    }
  }
}

```



## 简单使用

## 数据播种

## fluent api
