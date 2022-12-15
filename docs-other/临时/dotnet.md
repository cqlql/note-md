- [相关文档](#相关文档)
- [CLI](#cli)
  - [`dotnet --info`](#dotnet---info)
  - [安装 NuGet 包](#安装-nuget-包)
- [cli 的 3 种发布模式](#cli-的-3-种发布模式)
  - [参考文档](#参考文档)
- [大纲](#大纲)
- [安装](#安装)
- [ubuntu apt 安装](#ubuntu-apt-安装)
  - [检测是否安装](#检测是否安装)
- [cli 创建 web 项目](#cli-创建-web-项目)
- [cli 发布项目](#cli-发布项目)
  - [发布](#发布)
  - [使用 systemd 启用网站](#使用-systemd-启用网站)
- [配置 nginx](#配置-nginx)
- [--------------------------](#--------------------------)
- [mysql 连接](#mysql-连接)
  - [相关文档](#相关文档-1)
- [--------](#--------)
- [使用存储库](#使用存储库)
- [token 生成](#token-生成)
- [记录问题](#记录问题)

## 相关文档

[.NET 文档](https://docs.microsoft.com/zh-cn/dotnet/)

[教程：使用 ASP.NET Core 创建 Web API](https://docs.microsoft.com/zh-cn/aspnet/core/tutorials/first-web-api?view=aspnetcore-5.0&tabs=visual-studio)

[Entity Framework Core](https://docs.microsoft.com/zh-cn/ef/core/)

## CLI

### `dotnet --info`

查看 dotnet 版本信息，以及安装细节：

### 安装 NuGet 包

dotnet add package [pageageName]

比如安装 Figgle 包

```sh
dotnet add package Figgle
```

## cli 的 3 种发布模式

### 参考文档

[使用 .NET CLI 发布 .NET 应用](https://docs.microsoft.com/zh-cn/dotnet/core/deploying/deploy-with-cli#self-contained-deployment)

---

## 大纲

安装 dotnet sdk，查看当前安装信息，已经安装了哪些

使用 cli 新建 web 项目，使用 cli 发布项目，发布 FDD 即可

安装 dotnet runtime，使用 systemd 启用网站

安装 nginx，配置 nginx.conf

完成

---

## 安装

## ubuntu apt 安装

```bash
# 服务端环境只需安装 runtime
sudo apt install -y aspnetcore-runtime-5.0

# 开发环境只需安装 sdk，sdk 包含 runtime
sudo apt install -y dotnet-sdk-5.0
```

[参考文档](https://docs.microsoft.com/zh-cn/dotnet/core/install/linux-ubuntu)

### 检测是否安装

```bash
# 版本、是否安装，以及安装位置
dotnet --info
```

[参考文档](https://docs.microsoft.com/zh-cn/dotnet/core/install/how-to-detect-installed-versions?pivots=os-windows)

## cli 创建 web 项目

```bash
# 创建一个名为 aspnetcoreapp 的 web 项目
dotnet new webapp -o aspnetcoreapp
```

[参考文档](https://docs.microsoft.com/zh-cn/aspnet/core/getting-started/?view=aspnetcore-5.0&tabs=linux)

## cli 发布项目

### 发布

发布 FDD 即可

```bash
# dotnet 5.0
dotnet publish -c Release -p:UseAppHost=false
```

参考文档： [使用 .NET CLI 发布 .NET 应用](https://docs.microsoft.com/zh-cn/dotnet/core/deploying/deploy-with-cli#self-contained-deployment)

### 使用 systemd 启用网站

创建服务定义文件

```bash
sudo nano /etc/systemd/system/kestrel-helloapp.service
```

以下示例是应用的服务文件：

```ini
[Unit]
Description=Example .NET Web API App running on Ubuntu

[Service]
WorkingDirectory=/var/www/helloapp
ExecStart=/usr/bin/dotnet /var/www/helloapp/helloapp.dll
Restart=always
# Restart service after 10 seconds if the dotnet service crashes:
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=dotnet-example
User=www-data
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target

# The default value is 90 seconds for most distributions.
TimeoutStopSec=90
```

启用该服务

```bash
sudo systemctl enable kestrel-helloapp.service
```

运行

```bash
sudo systemctl start kestrel-helloapp.service
```

查看状态

```bash
sudo systemctl status kestrel-helloapp.service
```

查看日志

```bash
sudo journalctl -fu kestrel-helloapp.service

# 日志过滤
sudo journalctl -fu kestrel-helloapp.service --since "2016-10-18" --until "2016-10-18 04:00"

```

[参考文档](https://docs.microsoft.com/zh-cn/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-5.0#monitor-the-app)

## 配置 nginx

确认配置文件位置，找到关键字 `--conf-path`

```bash
nginx -V
```

编辑 `nginx.conf` 将 `server {*}` 替换如下内容

```ini
server {
    listen        80;
    server_name   example.com *.example.com;
    location / {
        proxy_pass         http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```

## --------------------------

## mysql 连接

### 相关文档

[数据库提供程序](https://docs.microsoft.com/zh-cn/ef/core/providers/?tabs=dotnet-core-cli)

[Entity Framwork Core 连接](https://dev.mysql.com/doc/connector-net/en/connector-net-entityframework-core.html)

## --------

## 使用存储库

LyricContext.cs

```c#
  public class LyricContext : DbContext
    {
        public DbSet<Lyric> Lyric { get; set; }

        public LyricContext(DbContextOptions<LyricContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // 数据库连接字符串也可以在 services.AddDbContext 中指定，见下
            optionsBuilder.UseMySQL("server=192.168.1.115;database=LyricSys;user=jo;password=123!@#qwe");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Lyric>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired();
            });
        }
    }
```

Startup.cs 的 ConfigureServices

```c#

services.AddDbContext<LyricContext>();
// 或者：
// services.AddDbContext<LyricContext>(options =>options.UseMySQL("server=192.168.1.115;database=LyricSys;user=jo;password=123!@#qwe"));
// 这样 DbContext.OnConfiguring 中就不用指定了

services.AddScoped<ILyricRepository, LyricRepository>();

```

ILyricRepository.cs

```c#
using System.Threading.Tasks;
using System.Collections.Generic;
namespace mywebapi
{
    public interface ILyricRepository
    {
        //Task<Lyric> CreateAsync(Lyric l);
        Task<IEnumerable<Lyric>> RetrieveAllAsync();
    }
}
```

LyricRepository.cs 使用缓存，直接存在内存中，实际应用应使用 Redis 分布式缓存

```c#
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Linq;
namespace mywebapi
{
    public class LyricRepository : ILyricRepository
    {
        private LyricContext db;

        private static ConcurrentDictionary<int, Lyric> lyricsCache;

        public LyricRepository(LyricContext db)
        {
            this.db = db;

            // pre-load customers from database as a normal
            // Dictionary with CustomerID is the key,
            // then convert to a thread-safe ConcurrentDictionary
            if (lyricsCache == null)
            {
                lyricsCache = new ConcurrentDictionary<int, Lyric>(db.Lyric.ToDictionary(c => c.Id));
            }
        }

        public Task<IEnumerable<Lyric>> RetrieveAllAsync()
        {
            // for performance, get from cache
            return Task.Run<IEnumerable<Lyric>>(() => lyricsCache.Values);
        }
    }

}
```

## token 生成

https://blog.csdn.net/qq_38977099/article/details/103335727

https://www.cnblogs.com/menglin2010/p/12502279.html

https://www.cnblogs.com/lovewl2/p/10723425.html

https://blog.csdn.net/qq_36204796/article/details/117123296

https://blog.csdn.net/biubiiu/article/details/89453830?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.control

https://docs.microsoft.com/zh-cn/dotnet/api/system.web.security.formsauthenticationticket?view=netframework-4.8

```c#
FormsAuthenticationTicket ticket = new FormsAuthenticationTicket(1,
        username,
        DateTime.Now,
        DateTime.Now.AddMinutes(30),
        isPersistent,
        userData,
        FormsAuthentication.FormsCookiePath);
```

## 记录问题

https 换成 http
