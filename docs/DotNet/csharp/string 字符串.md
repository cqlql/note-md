## 连接字符串

[连接字符串 - 参考文档](https://docs.microsoft.com/zh-cn/dotnet/csharp/how-to/concatenate-multiple-strings)

## 货币格式 `:C`

```cs
Console.WriteLine(format: "余额: {0:C}",arg0: 1.126); // 余额： ¥1.13

```

## 字符串内插 `$`

行字符串内插入其他字符串值。

```cs
string userName = "<Type your name here>";
string date = DateTime.Today.ToShortDateString();

// Use string interpolation to concatenate strings.
string str = $"Hello {userName}. Today is {date}.";
System.Console.WriteLine(str);


```

