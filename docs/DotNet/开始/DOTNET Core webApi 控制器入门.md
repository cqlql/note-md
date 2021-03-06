---
title: .NET Core webApi 控制器入门
---

在 Controller 文件夹中添加一个名为 InfoController.cs 的控制器类文件

```csharp
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class InfoController : ControllerBase
{
  [HttpGet(Name = "GetInfo")]
  public int Get()
  {
    return Random.Shared.Next(2);
  }
}

```

1. [Router] 特性

   1. 用来注册相对 URL，以处理客户端使用该 URL 发起的 HTTP 请求。[controller] 将使用类名 Controller 前面的字符，所以此处的相对 URL 是 `/api/info`

2. [HttpGet] 特性
   1. 设置 HTTP 方法

## 路由名称

可以在 [Router] 或者 [{HTTP 方法}] 特性中设置 Name，如果有[Router]属性，将只能在 [Router] 中设置 Name

```csharp
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class InfoController : ControllerBase
{
  [HttpGet(Name = "GetInfo")]
  public String GetInfo()
  {
    return "Info";
  }

  [HttpGet]
  [Route("link")]
  public string GetLink()
  {
    // 通过 Name 值获取 Url
    return Url.Link("GetInfo", null) ?? "";
  }
}

```

## 日志 ILogger 基本使用

```csharp
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class InfoController : ControllerBase
{

  // 从容器中获取ILogger实例
  private readonly ILogger<LogTestController> _logger;
  public LogTestController(ILogger<LogTestController> logger)
  {
      _logger = logger;
  }

  // 使用ILogger
  [HttpGet("log")]
  public void Log()
  {
      _logger.LogInformation("Info");
      _logger.LogError("Error");
      _logger.LogWarning("Warning");
  }

  [HttpGet(Name = "GetInfo")]
  public int Get()
  {
    return Random.Shared.Next(2);
  }
}


```

## 参考文档

<!--


https://blog.csdn.net/xiaouncle/article/details/83869952

-->

[ASP.NET Web API 2 | Microsoft Docs](https://docs.microsoft.com/zh-cn/aspnet/web-api/overview/web-api-routing-and-actions/attribute-routing-in-web-api-2#route-names)

[.net 日志 ILogger 基本使用](https://blog.csdn.net/m0_47659279/article/details/119845995)

[.NET 中的日志记录 | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/core/extensions/logging)
