## 连接字符串

在使用循环连接字符串时，应避免时用 String.Concat 或 + 运算符，应使用使用 [StringBuilder](https://learn.microsoft.com/zh-cn/dotnet/csharp/how-to/concatenate-multiple-strings#stringbuilder) 代替。

更多信息：[连接字符串](https://docs.microsoft.com/zh-cn/dotnet/csharp/how-to/concatenate-multiple-strings)

## 字符串格式

更多信息：[标准数字格式字符串 | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/standard/base-types/standard-numeric-format-strings)

### 货币格式 `:C`

```cs
Console.WriteLine(format: "余额: {0:C}",arg0: 1.126); // 余额： ¥1.13
```

### 数字格式 `:N`

```cs
Console.WriteLine($"数: {10000:N}"); // 10,000.00

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

## 多行字符串 `"""`

从 C# 11 开始支持

```cs
string embeddedXML = """
       <element attr = "content">
           <body style="normal">
               Here is the main text
           </body>
           <footer>
               Excerpts from "An amazing story"
           </footer>
       </element >
       """;
```

更多信息：[字符串 - C# 编程指南 | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/csharp/programming-guide/strings/#raw-string-literals)
