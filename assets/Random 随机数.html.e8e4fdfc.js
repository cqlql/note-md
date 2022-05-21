import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as d,c as t,b as n,h as a,F as o,i as s,f as i,o as c}from"./app.62a96c7f.js";const l={},u=s(`<h2 id="\u968F\u673A\u6307\u5B9A\u8303\u56F4\u7684\u6574\u6570" tabindex="-1"><a class="header-anchor" href="#\u968F\u673A\u6307\u5B9A\u8303\u56F4\u7684\u6574\u6570" aria-hidden="true">#</a> \u968F\u673A\u6307\u5B9A\u8303\u56F4\u7684\u6574\u6570</h2><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>var rng = new Random();
// \u5927\u4E8E\u6216\u7B49\u4E8E-20 \u5C0F\u4E8E55
Console.WriteLine(rng.Next(-20, 55));

// \u5927\u4E8E\u6216\u7B49\u4E8E0 \u5C0F\u4E8E55
Console.WriteLine(rng.Next(55));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u968F\u673A\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570" tabindex="-1"><a class="header-anchor" href="#\u968F\u673A\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570" aria-hidden="true">#</a> \u968F\u673A\u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570</h2><p>\u8FD4\u56DE\u5927\u4E8E\u7B49\u4E8E 0 \u5C0F\u4E8E 1 \u7684\u968F\u673A\u6D6E\u70B9\u6570</p><div class="language-c# ext-c# line-numbers-mode"><pre class="language-c#"><code>var rng = new Random();

Console.WriteLine(rng.NextDouble());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EBF\u7A0B\u5B89\u5168-random-shared" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u5B89\u5168-random-shared" aria-hidden="true">#</a> \u7EBF\u7A0B\u5B89\u5168 Random.Shared</h2>`,6),p={href:"https://vip.kingdee.com/article/313989673850775040?productLineId=29",target:"_blank",rel:"noopener noreferrer"},m=i("\u6587\u6863\uFF1A .NET 6 \u65B0\u7279\u6027 \u2014\u2014 Random.Shared"),h=s(`<div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>
  Random<span class="token punctuation">.</span>Shared<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u76F8\u5173\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u6587\u6863" aria-hidden="true">#</a> \u76F8\u5173\u6587\u6863</h2>`,2),v={href:"https://docs.microsoft.com/zh-cn/dotnet/api/system.random?view=net-5.0",target:"_blank",rel:"noopener noreferrer"},_=i("\u5B98\u65B9\u6587\u6863");function b(g,k){const e=d("ExternalLinkIcon");return c(),t(o,null,[u,n("p",null,[n("a",p,[m,a(e)])]),h,n("p",null,[n("a",v,[_,a(e)])])],64)}var N=r(l,[["render",b],["__file","Random \u968F\u673A\u6570.html.vue"]]);export{N as default};
