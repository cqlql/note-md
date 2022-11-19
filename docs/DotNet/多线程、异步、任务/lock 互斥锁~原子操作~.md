
## 理解

多线程同时访问一个资源会出问题。这时就需要 lock 锁。

应用了 lock 的变量，只有再等待此方法之前完后，才会继续执行使用了 lock 此变量的其他方法。

问题？如果 lock 外围还有其他代码？那么会与 lock 语句包裹的代码分开执行吗？

**死锁**：线程X锁定变量A，但一直没有释放锁定，导致其他线程锁定变量A时一直阻塞。

**避免死锁**：使用 Monitor.TryEnter 方法结合 try-finally 语句代替 lock，并提供超时。


## lock 使用


## Monitor 使用 -- 推荐

为避免死锁，推荐使用 Monitor


```cs
static Random r = new Random();
static string Message; // a shared resource
static object conch = new object();
static void MethodA()
{
  bool lockWasTaken = false;
  try
  {
    /* 
    如果已经被锁定，则挂起线程，并提供最多 15s 挂起时间。超过时间或者变量不在挂起再往下执行。
    如果没有被锁定，则开始锁定，lockWasTaken 变量设为 true。

    参数2 也可直接使用 int 类型的毫秒时间
     */
    Monitor.TryEnter(conch, TimeSpan.FromSeconds(15), ref lockWasTaken);
    
    for (int i = 0; i < 5; i++)
    {
      Thread.Sleep(1000);
      Message += "A";
      Write(".");
    }
  }
  finally
  {
    /* 
    finally 语句：不管是否异常，这里都会执行
    
    解锁变量 conch。
    只有是当前进程锁定变量时才有效，否则会触发 System.Threading.SynchronizationLockException 异常，所以要加个判断。
     */
    if (lockWasTaken) Monitor.Exit(conch);
  }
}
```


## 参考文档
[lock 语句](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/statements/lock)
