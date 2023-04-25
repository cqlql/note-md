import{_ as n,Z as i,$ as r,a0 as e,a1 as l,Y as s,a2 as d,E as c}from"./framework-d33190a3.js";const t={},u=d(`<ul><li><a href="#%E8%AF%B4%E6%98%8E">说明</a></li><li><a href="#range-%E7%94%9F%E6%88%90%E6%8C%87%E5%AE%9A%E8%8C%83%E5%9B%B4%E7%9A%84%E6%95%B4%E6%95%B0%E5%BA%8F%E5%88%97">Range 生成指定范围的整数序列</a><ul><li><a href="#%E5%9F%BA%E7%A1%80">基础</a></li><li><a href="#%E9%85%8D%E5%90%88-select">配合 Select</a></li></ul></li><li><a href="#%E7%9B%B8%E5%85%B3%E6%96%87%E6%A1%A3">相关文档</a></li></ul><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><p>对数据进行遍历、筛选</p><h2 id="range-生成指定范围的整数序列" tabindex="-1"><a class="header-anchor" href="#range-生成指定范围的整数序列" aria-hidden="true">#</a> Range 生成指定范围的整数序列</h2><h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>IEnumerable&lt;int&gt; nums = Enumerable.Range(1, 3);

foreach (int num in nums) {
  // 依次输出：1, 2, 3
  Console.WriteLine(num);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配合-select" tabindex="-1"><a class="header-anchor" href="#配合-select" aria-hidden="true">#</a> 配合 Select</h3><p>有点类似 js 的 map</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>IEnumerable&lt;int&gt; nums = Enumerable.Range(1, 5).Select(v =&gt; v+1);

foreach (int num in nums) {
  Console.WriteLine(num);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>`,10),o={href:"https://docs.microsoft.com/zh-cn/dotnet/api/system.linq.enumerable?view=net-5.0",target:"_blank",rel:"noopener noreferrer"};function h(m,v){const a=c("ExternalLinkIcon");return i(),r("div",null,[u,e("p",null,[e("a",o,[l("Enumerable 类"),s(a)])])])}const b=n(t,[["render",h],["__file","Enumerable 类.html.vue"]]);export{b as default};
