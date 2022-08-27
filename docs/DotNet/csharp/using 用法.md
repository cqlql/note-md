## 1. using 指令

省去命名空间

## 2. 释放资源

（try catch 也可以），范围内执行完后自动调用 IDisposable 释放，但只有实现了 IDisposable 接口的类才可以

## 3. using 别名

```cs

using aClass = NameSpace1.MyClass;
using bClass = NameSpace2.MyClass;

namespace testUsing
{
    class Class1
    {
        static void Main(string[] args)
        {
            aClass my1 = new aClass();
            Console.WriteLine(my1);
            bClass my2 = new bClass();
            Console.WriteLine(my2);
        }
    }
}

```

## 参考文档

https://blog.csdn.net/fuhanghang/article/details/84453734
