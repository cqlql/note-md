## 不使用构造函数初始化字段

```csharp
namespace CqlDotNet.SDK.APIEntity;
public class APIResult
{
  public string? message { get; set; }

  public int status { get; set; }

  public Object? result { get; set; }

  public static APIResult Ok(object result)
  {
    return new APIResult { status = 200, result = result };
  }

  public static APIResult Error(int status, string message)
  {
    return new APIResult { status = status, message = message };
  }
}

```
