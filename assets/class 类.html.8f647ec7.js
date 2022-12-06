import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,a,b as e}from"./app.3a990e4f.js";const t={},p=e(`<h2 id="\u7C7B\u57FA\u672C\u5B9A\u4E49\u4E0E\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u57FA\u672C\u5B9A\u4E49\u4E0E\u4F7F\u7528" aria-hidden="true">#</a> \u7C7B\u57FA\u672C\u5B9A\u4E49\u4E0E\u4F7F\u7528</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>
<span class="token comment">// \u5B9A\u4E49</span>
<span class="token keyword">class</span> <span class="token class-name">WeatherForecast</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> Date <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> TemperatureC <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token comment">// \u53EA\u6709 get</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> TemperatureF <span class="token operator">=&gt;</span> <span class="token number">32</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>TemperatureC <span class="token operator">/</span> <span class="token number">0.5556</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8BBE\u7F6E\u521D\u59CB\u503C</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span>  <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">;</span>

    <span class="token comment">// \u53EF\u4E3A null</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span><span class="token punctuation">?</span></span> Summary <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528</span>
<span class="token comment">// \u521B\u5EFA\u5B9E\u4F8B\uFF0C\u5E76\u521D\u59CB\u90E8\u5206\u6210\u5458</span>
<span class="token class-name"><span class="token keyword">var</span></span> weather <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">WeatherForecast</span>
<span class="token punctuation">{</span>
  Date <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">,</span>
  TemperatureC <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>weather<span class="token punctuation">.</span>Date<span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>weather<span class="token punctuation">.</span>TemperatureF<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9759\u6001\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u7C7B" aria-hidden="true">#</a> \u9759\u6001\u7C7B</h2><ol><li>\u76F8\u5F53\u4E8E\u5168\u5C40\u5BF9\u8C61\uFF0C\u4E00\u76F4\u5B58\u5728\u5185\u5B58\u4E2D\u3002</li><li>\u4EC5\u5305\u542B\u9759\u6001\u6210\u5458\u3002</li><li>\u65E0\u6CD5\u5B9E\u4F8B\u5316\u3002</li><li>\u53EA\u80FD\u5305\u542B\u9759\u6001\u6784\u9020\u51FD\u6570\uFF0C\u5E76\u4E14\u5728\u6210\u5458\u88AB\u8BBF\u95EE\u540E\u6267\u884C\u3002</li><li>\u5BC6\u5C01\u6027\uFF0C\u65E0\u6CD5\u88AB\u7EE7\u627F\u3002</li><li>\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u9759\u6001\u7C7B\uFF0C\u80FD\u4E0D\u7528\u5C31\u4E0D\u7528\u3002</li></ol><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">// \u5B9A\u4E49</span>
<span class="token keyword">namespace</span> <span class="token namespace">AppConsole</span>
<span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">StaticClass</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name"><span class="token keyword">int</span></span> num <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

    <span class="token comment">// \u9759\u6001\u6784\u9020\u51FD\u6570</span>
    <span class="token keyword">static</span> <span class="token function">StaticClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      num <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>
      Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;\u6B64\u5904\u5728\u6210\u5458\u88AB\u8BBF\u95EE\u540E\u6267\u884C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8BBF\u95EE</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>StaticClass<span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9759\u6001\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u6210\u5458" aria-hidden="true">#</a> \u9759\u6001\u6210\u5458</h2><p>\u6211\u7684\u7406\u89E3\uFF1A</p><ol><li>\u6240\u6709\u5B9E\u4F8B\u7684\u5171\u4EAB\u6210\u5458\uFF0C\u516C\u5171\u6210\u5458\u3002</li><li>\u4E0D\u7528\u5B9E\u4F8B\u5316\uFF0C\u8DDF\u7C7B\u662F\u5426\u5B9E\u4F8B\u5316\u6CA1\u6709\u5173\u7CFB\u3002</li><li>\u53EF\u76F4\u63A5\u901A\u8FC7\u7C7B\u8BBF\u95EE\u3001\u4FEE\u6539\u3002</li></ol><p>\u4EC0\u4E48\u662F\u88AB\u521D\u59CB\u5316\uFF1F \u5728\u7C7B\u7684\u6784\u9020\u51FD\u6570\u6267\u884C\u65F6\uFF0C\u5305\u62EC\u9759\u6001\u6784\u9020\u51FD\u6570\u548C\u975E\u9759\u6001\u6784\u9020\u51FD\u6570\u3002</p><p>\u90A3\u4E48\u7C7B\u7684\u6784\u9020\u51FD\u6570\u4EC0\u4E48\u65F6\u5019\u88AB\u6267\u884C\uFF1F \u5728\u6210\u5458\u88AB\u8C03\u7528\u65F6\u6267\u884C\uFF0C\u5305\u62EC\u9759\u6001\u6210\u5458\u548C\u4E00\u822C\u6210\u5458\u3002</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BankAccount</span>
<span class="token punctuation">{</span>
  <span class="token comment">// \u5B9A\u4E49\u9759\u6001\u6210\u5458</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name"><span class="token keyword">decimal</span></span> InterestRete<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u76F4\u63A5\u8C03\u7528</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>BankAccount<span class="token punctuation">.</span>InterestRete<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[p];function l(o,i){return s(),a("div",null,c)}const d=n(t,[["render",l],["__file","class \u7C7B.html.vue"]]);export{d as default};
