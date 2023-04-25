import{_ as e,Z as o,$ as p,a0 as n,a1 as a,Y as t,a2 as c,E as l}from"./framework-d33190a3.js";const i={},u=c(`<div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>AspNetCore<span class="token punctuation">.</span>Mvc</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiController</span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;api/[controller]&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InfoController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ControllerBase</span></span>
<span class="token punctuation">{</span>

  <span class="token comment">// 从容器中获取ILogger实例</span>
  <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">ILogger<span class="token punctuation">&lt;</span>LogTestController<span class="token punctuation">&gt;</span></span> _logger<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token function">LogTestController</span><span class="token punctuation">(</span><span class="token class-name">ILogger<span class="token punctuation">&lt;</span>LogTestController<span class="token punctuation">&gt;</span></span> logger<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
      _logger <span class="token operator">=</span> logger<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 使用ILogger</span>
  <span class="token punctuation">[</span><span class="token function">HttpGet</span><span class="token punctuation">(</span><span class="token string">&quot;log&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
      _logger<span class="token punctuation">.</span><span class="token function">LogInformation</span><span class="token punctuation">(</span><span class="token string">&quot;Info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      _logger<span class="token punctuation">.</span><span class="token function">LogError</span><span class="token punctuation">(</span><span class="token string">&quot;Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      _logger<span class="token punctuation">.</span><span class="token function">LogWarning</span><span class="token punctuation">(</span><span class="token string">&quot;Warning&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;GetInfo&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
  <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Random<span class="token punctuation">.</span>Shared<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,2),r={href:"https://blog.csdn.net/m0_47659279/article/details/119845995",target:"_blank",rel:"noopener noreferrer"},k={href:"https://docs.microsoft.com/zh-cn/dotnet/core/extensions/logging",target:"_blank",rel:"noopener noreferrer"};function d(v,m){const s=l("ExternalLinkIcon");return o(),p("div",null,[u,n("p",null,[n("a",r,[a(".net 日志 ILogger 基本使用"),t(s)])]),n("p",null,[n("a",k,[a(".NET 中的日志记录"),t(s)])])])}const b=e(i,[["render",d],["__file","日志 ILogger 基本使用.html.vue"]]);export{b as default};
