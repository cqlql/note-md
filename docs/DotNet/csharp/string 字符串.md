## 连接字符串

官方指南：[连接字符串](https://docs.microsoft.com/zh-cn/dotnet/csharp/how-to/concatenate-multiple-strings)

在使用循环连接字符串时，应避免时用 String.Concat 或 + 运算符，应使用使用 [StringBuilder](https://learn.microsoft.com/zh-cn/dotnet/csharp/how-to/concatenate-multiple-strings#stringbuilder) 代替。




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

更多信息：[如何连接多个字符串（C# 指南） | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/csharp/how-to/concatenate-multiple-strings#string-interpolation)
