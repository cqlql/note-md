import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,a,b as e}from"./app.d8cd8e11.js";const t={},p=e(`<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u8BB0\u5F55 ef core \u64CD\u4F5C\u65E5\u5FD7</p><h2 id="\u81EA\u5B9A\u4E49\u65E5\u5FD7\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u65E5\u5FD7\u5B9E\u73B0" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u65E5\u5FD7\u5B9E\u73B0</h2><div class="custom-container info"><p class="custom-container-title">ef core \u9ED8\u8BA4\u5C31\u6709\u91CD\u8981\u65E5\u5FD7\u8F93\u51FA</p><p>\u5728\u5F00\u53D1\u8FC7\u7A0B\uFF0C\u5373\u4F7F\u4E0D\u505A\u4EFB\u4F55\u65E5\u5FD7\u914D\u7F6E\uFF0Cef core \u4E5F\u4F1A\u5411\u63A7\u5236\u53F0\u8F93\u51FA\u91CD\u8981\u4FE1\u606F\uFF0C\u6BD4\u5982\u751F\u6210\u7684sql\u8BED\u53E5\uFF0C\u4EE5\u53CA\u6267\u884C\u6548\u7387\u7B49\u3002</p></div><p>\u5148\u521B\u5EFA\u65E5\u5FD7\u7C7B ConsoleLogger.cs</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>Extensions<span class="token punctuation">.</span>Logging</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token keyword">static</span> <span class="token class-name">System<span class="token punctuation">.</span>Console</span><span class="token punctuation">;</span>

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
      <span class="token preprocessor property">#<span class="token directive keyword">pragma</span> warning disable CS8603 </span><span class="token comment">// \u53EF\u80FD\u8FD4\u56DE null \u5F15\u7528\u3002</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token preprocessor property">#<span class="token directive keyword">pragma</span> warning restore CS8603 </span><span class="token comment">// \u53EF\u80FD\u8FD4\u56DE null \u5F15\u7528\u3002</span>
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
      <span class="token comment">// \u8FD9\u91CC\u53EF\u4EE5\u901A\u8FC7\u5224\u65AD eventId.Id \u6765\u8FC7\u6EE4\u6389\u4E0D\u9700\u8981\u7684\u65E5\u5FD7 </span>
      <span class="token comment">// if (eventId.Id == 20100)</span>
      <span class="token comment">// {</span>

      <span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;===========\u81EA\u5B9A\u4E49\u65E5\u5FD7\u8F93\u51FA\u5F00\u59CB=============&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u65E5\u5FD7\u7C7B\u6CE8\u5165\u5230 DbContext\u3002\u65B0\u5EFA UserManageDbContext.cs\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>EntityFrameworkCore</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","\u65E5\u5FD7\u8BB0\u5F55.html.vue"]]);export{k as default};
