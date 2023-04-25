import{_ as r,Z as d,$ as t,a0 as n,a1 as a,Y as s,a2 as i,E as c}from"./framework-d33190a3.js";const o={},l=i(`<h2 id="随机指定范围的整数" tabindex="-1"><a class="header-anchor" href="#随机指定范围的整数" aria-hidden="true">#</a> 随机指定范围的整数</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>var rng = new Random();
// 大于或等于-20 小于55
Console.WriteLine(rng.Next(-20, 55));

// 大于或等于0 小于55
Console.WriteLine(rng.Next(55));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="随机双精度浮点数" tabindex="-1"><a class="header-anchor" href="#随机双精度浮点数" aria-hidden="true">#</a> 随机双精度浮点数</h2><p>返回大于等于 0 小于 1 的随机浮点数</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>var rng = new Random();

Console.WriteLine(rng.NextDouble());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="线程安全-random-shared" tabindex="-1"><a class="header-anchor" href="#线程安全-random-shared" aria-hidden="true">#</a> 线程安全 Random.Shared</h2>`,6),u={href:"https://vip.kingdee.com/article/313989673850775040?productLineId=29",target:"_blank",rel:"noopener noreferrer"},p=i(`<div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>
  Random<span class="token punctuation">.</span>Shared<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>`,2),v={href:"https://docs.microsoft.com/zh-cn/dotnet/api/system.random?view=net-5.0",target:"_blank",rel:"noopener noreferrer"};function m(h,b){const e=c("ExternalLinkIcon");return d(),t("div",null,[l,n("p",null,[n("a",u,[a("文档： .NET 6 新特性 —— Random.Shared"),s(e)])]),p,n("p",null,[n("a",v,[a("官方文档"),s(e)])])])}const k=r(o,[["render",m],["__file","Random 随机数.html.vue"]]);export{k as default};
