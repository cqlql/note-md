import{_ as e,Z as t,$ as p,a0 as n,a1 as s,Y as o,a2 as c,E as l}from"./framework-d33190a3.js";const i={},u=n("p",null,"实现像数组一样访问类或结构的实例",-1),r={href:"https://learn.microsoft.com/zh-cn/dotnet/csharp/programming-guide/indexers/#BKMK_RelatedSections",target:"_blank",rel:"noopener noreferrer"},k=c(`<p>索引器定义示例：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">SampleCollection<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>
<span class="token punctuation">{</span>
   <span class="token comment">// Declare an array to store the data elements.</span>
   <span class="token keyword">private</span> <span class="token class-name">T<span class="token punctuation">[</span><span class="token punctuation">]</span></span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">T</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

   <span class="token comment">// Define the indexer to allow client code to use [] notation.</span>
   <span class="token keyword">public</span> <span class="token return-type class-name">T</span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token class-name"><span class="token keyword">int</span></span> i<span class="token punctuation">]</span>
   <span class="token punctuation">{</span>
      <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
      <span class="token keyword">set</span> <span class="token punctuation">{</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Program</span>
<span class="token punctuation">{</span>
   <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
      <span class="token class-name"><span class="token keyword">var</span></span> stringCollection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SampleCollection<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      stringCollection<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Hello, World&quot;</span><span class="token punctuation">;</span>
      Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>stringCollection<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// The example displays the following output:</span>
<span class="token comment">//       Hello, World.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function d(m,v){const a=l("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[s("更多信息："),n("a",r,[s("索引器"),o(a)])]),k])}const _=e(i,[["render",d],["__file","索引器.html.vue"]]);export{_ as default};
