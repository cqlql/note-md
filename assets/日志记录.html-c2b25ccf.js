import{_ as n,Z as s,$ as a,a2 as e}from"./framework-d33190a3.js";const t={},p=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>记录 ef core 操作日志。</p><p>实测对控制器中抛出的错误也有效。</p><h2 id="自定义日志记录-输出到控制台" tabindex="-1"><a class="header-anchor" href="#自定义日志记录-输出到控制台" aria-hidden="true">#</a> 自定义日志记录 - 输出到控制台</h2><div class="hint-container info"><p class="hint-container-title">ef core 默认就有重要日志输出</p><p>在开发过程，即使不做任何日志配置，ef core 也会向控制台输出重要信息，比如生成的sql语句，以及执行效率等。</p></div><p>先创建日志类 ConsoleLogger.cs</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token keyword">static</span> <span class="token class-name">System<span class="token punctuation">.</span>Console</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">UserManage</span>
<span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConsoleLoggerProvider</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ILoggerProvider</span></span>
  <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">ILogger</span> <span class="token function">CreateLogger</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> categoryName<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConsoleLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// if your logger uses unmanaged resources,</span>
    <span class="token comment">// you can release the memory here </span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConsoleLogger</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ILogger</span></span>
  <span class="token punctuation">{</span>
    <span class="token comment">// if your logger uses unmanaged resources, you can</span>
    <span class="token comment">// return the class that implements IDisposable here </span>
    <span class="token keyword">public</span> <span class="token return-type class-name">IDisposable</span> <span class="token generic-method"><span class="token function">BeginScope</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TState<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name">TState</span> state<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token preprocessor property">#<span class="token directive keyword">pragma</span> warning disable CS8603 </span><span class="token comment">// 可能返回 null 引用。</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token preprocessor property">#<span class="token directive keyword">pragma</span> warning restore CS8603 </span><span class="token comment">// 可能返回 null 引用。</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">IsEnabled</span><span class="token punctuation">(</span><span class="token class-name">LogLevel</span> logLevel<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// to avoid overlogging, you can filter</span>
      <span class="token comment">// on the log level </span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>logLevel<span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">case</span> LogLevel<span class="token punctuation">.</span>Trace<span class="token punctuation">:</span>
        <span class="token keyword">case</span> LogLevel<span class="token punctuation">.</span>Information<span class="token punctuation">:</span>
        <span class="token keyword">case</span> LogLevel<span class="token punctuation">.</span>None<span class="token punctuation">:</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> LogLevel<span class="token punctuation">.</span>Debug<span class="token punctuation">:</span>
        <span class="token keyword">case</span> LogLevel<span class="token punctuation">.</span>Warning<span class="token punctuation">:</span>
        <span class="token keyword">case</span> LogLevel<span class="token punctuation">.</span>Error<span class="token punctuation">:</span>
        <span class="token keyword">case</span> LogLevel<span class="token punctuation">.</span>Critical<span class="token punctuation">:</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
          <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token generic-method"><span class="token function">Log</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TState<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name">LogLevel</span> logLevel<span class="token punctuation">,</span>
      <span class="token class-name">EventId</span> eventId<span class="token punctuation">,</span> <span class="token class-name">TState</span> state<span class="token punctuation">,</span> <span class="token class-name">Exception<span class="token punctuation">?</span></span> exception<span class="token punctuation">,</span>
      <span class="token class-name">Func<span class="token punctuation">&lt;</span>TState<span class="token punctuation">,</span> Exception<span class="token punctuation">,</span> <span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> formatter<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 这里可以通过判断 eventId.Id 来过滤掉不需要的日志 </span>
      <span class="token comment">// if (eventId.Id == 20100)</span>
      <span class="token comment">// {</span>

      <span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;===========自定义日志输出开始=============&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// log the level and event identifier</span>
      <span class="token function">Write</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;Level: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">logLevel</span><span class="token punctuation">}</span></span><span class="token string">, Event ID: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">eventId<span class="token punctuation">.</span>Id</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// only output the state or exception if it exists</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        <span class="token function">Write</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;, State: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">state</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>exception <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        <span class="token function">Write</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;, Exception: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">exception<span class="token punctuation">.</span>Message</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// }</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将日志类注入到 DbContext。新建 UserManageDbContext.cs，内容如下：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>EntityFrameworkCore</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>EntityFrameworkCore<span class="token punctuation">.</span>Infrastructure</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">UserManage</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserManageDbContext</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">DbContext</span></span>
<span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token return-type class-name">DbSet<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span><span class="token punctuation">?</span></span> User <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">UserManageDbContext</span><span class="token punctuation">(</span><span class="token class-name">DbContextOptions<span class="token punctuation">&lt;</span>UserManageDbContext<span class="token punctuation">&gt;</span></span> options<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnModelCreating</span><span class="token punctuation">(</span><span class="token class-name">ModelBuilder</span> modelBuilder<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> loggerFactory <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ILoggerFactory<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    loggerFactory<span class="token punctuation">.</span><span class="token function">AddProvider</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConsoleLoggerProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日志到文件" tabindex="-1"><a class="header-anchor" href="#日志到文件" aria-hidden="true">#</a> 日志到文件</h2><p>对上面的例子稍做修改即可</p><p>首先修改入口文件 Program.cs，加入如下代码：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Diagnostics</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个 Trace 和 Debug 的监听器，监听所有的日志输出操作，并写入文件</span>
Trace<span class="token punctuation">.</span>Listeners<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">TextWriterTraceListener</span><span class="token punctuation">(</span>File<span class="token punctuation">.</span><span class="token function">CreateText</span><span class="token punctuation">(</span><span class="token string">&quot;log.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 在每次写入后自动刷新缓冲区，并写入文件。否则只有在缓冲区满了后才写入文件。</span>
<span class="token comment">// 这样是否会有性能问题？？待学习</span>
Trace<span class="token punctuation">.</span>AutoFlush <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对 ConsoleLogger.cs 进行修改，将 <code>using static System.Console;</code> 换成 <code>using static System.Diagnostics.Trace;</code> 即可</p><h2 id="实测对控制器抛出的错误也有效" tabindex="-1"><a class="header-anchor" href="#实测对控制器抛出的错误也有效" aria-hidden="true">#</a> 实测对控制器抛出的错误也有效</h2><p>UserController.cs</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>AspNetCore<span class="token punctuation">.</span>Mvc</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">JoDotNet<span class="token punctuation">.</span>SDK<span class="token punctuation">.</span>APIEntity</span><span class="token punctuation">;</span>

<span class="token keyword">namespace</span> <span class="token namespace">UserManage</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiController</span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;[controller]&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Produces</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ControllerBase</span></span>
<span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">ILogger<span class="token punctuation">&lt;</span>UserController<span class="token punctuation">&gt;</span></span> _logger<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">UserManageDbContext</span> _db<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token function">UserController</span><span class="token punctuation">(</span><span class="token class-name">UserManageDbContext</span> db<span class="token punctuation">,</span> <span class="token class-name">ILogger<span class="token punctuation">&lt;</span>UserController<span class="token punctuation">&gt;</span></span> logger<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    _db <span class="token operator">=</span> db<span class="token punctuation">;</span>
    _logger <span class="token operator">=</span> logger<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;GetUserList&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
  <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> <span class="token function">GetUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>

    <span class="token comment">// 手动抛错</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">IndexOutOfRangeException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> _db<span class="token punctuation">.</span>User<span class="token operator">!</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ToList</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用查询标记" tabindex="-1"><a class="header-anchor" href="#使用查询标记" aria-hidden="true">#</a> 使用查询标记</h2><p>用来找到是哪里生成的sql语句。其实就是加sql注释。使用 <code>TagWith</code> 方法增加。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> _db<span class="token punctuation">.</span>User<span class="token operator">!</span>
  <span class="token punctuation">.</span><span class="token function">TagWith</span><span class="token punctuation">(</span><span class="token string">&quot;=====用户列表=====&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ToList</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","日志记录.html.vue"]]);export{r as default};
