import{_ as n,Z as s,$ as a,a2 as e}from"./framework-d33190a3.js";const t={},p=e(`<h2 id="理解" tabindex="-1"><a class="header-anchor" href="#理解" aria-hidden="true">#</a> 理解</h2><ol><li>抽象的函数，没有具体实现。</li><li>函数的类型，因为值是函数，而且还可以使用 <code>new</code></li></ol><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><p>使用new</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 声明一个委托（函数指针）</span>
<span class="token keyword">delegate</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DelegateA</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> a<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方式1</span>
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 直接使用函数赋值</span>
  <span class="token class-name">DelegateA</span> d <span class="token operator">=</span> MethodSum<span class="token punctuation">;</span>
  <span class="token comment">// 执行</span>
  <span class="token function">d</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 方式2</span>
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 使用 new 创建委托对象并赋值</span>
  <span class="token class-name"><span class="token keyword">var</span></span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DelegateA</span><span class="token punctuation">(</span>MethodSum<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 执行</span>
  <span class="token function">d</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MethodSum</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> a<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">a</span><span class="token punctuation">}</span></span><span class="token string">+</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">b</span><span class="token punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">a <span class="token operator">+</span> b</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">MethodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">MethodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[p];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","委托-函数类型.html.vue"]]);export{k as default};
