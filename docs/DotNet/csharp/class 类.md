## 实体类

```c#

// 定义
class WeatherForecast
{
    public DateTime Date { get; set; }

    public int TemperatureC { get; set; }

    // 只有 get
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

    // 设置初始值
    public string Title { get; set; } =  string.Empty;

    // 可为 null
    public string? Summary { get; set; };
}

// 使用
// 创建实例，并初始部分成员
var weather = new WeatherForecast
{
  Date = DateTime.Now,
  TemperatureC = 1,
};
Console.WriteLine(weather.Date);
Console.WriteLine(weather.TemperatureF);

```
