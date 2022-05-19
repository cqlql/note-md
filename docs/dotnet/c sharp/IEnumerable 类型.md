- [说明](#说明)
- [使用 foreach in 进行迭代](#使用-foreach-in-进行迭代)
- [相关文档](#相关文档)

## 说明

公开枚举数，该枚举数支持在指定类型的集合上进行简单迭代。

用来迭代数据的枚举类型

## 使用 foreach in 进行迭代

```c#
using System.Collections.Generic;
using System.Linq;

IEnumerable<int> nums = Enumerable.Range(1, 5);
foreach (int num in nums) {
  Console.WriteLine(num);
}
```

## 相关文档

[IEnumerable&ltT&gt 接口](https://docs.microsoft.com/zh-cn/dotnet/api/system.collections.generic.ienumerable-1?view=net-5.0)
