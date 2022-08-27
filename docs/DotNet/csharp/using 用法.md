## 1. using 指令

省去命名空间

## 2. 释放资源

using 范围内执行完后自动调用 Dispose 释放，但只有实现了 IDisposable 接口的类才可以

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

## 与 try catch 区别

try catch 只能捕获异常，能知道具体的异常；不能释放资源，需手动释放

using 释放资源，即使异常也能释放；异常情况不能知道是什么异常

## 参考文档

https://blog.csdn.net/fuhanghang/article/details/84453734

[using 与 try catch](https://blog.csdn.net/ironxue/article/details/12071901)
