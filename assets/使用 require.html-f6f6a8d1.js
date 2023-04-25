import{_ as n,Z as s,$ as a,a2 as e}from"./framework-d33190a3.js";const p={},t=e(`<ul><li><a href="#%E6%A8%A1%E5%9D%97%E5%AE%9A%E4%B9%89%E5%AF%BC%E5%87%BA">模块定义\\导出</a></li><li><a href="#require-%E8%87%AA%E5%8A%A8%E5%AF%BB%E6%89%BE%E7%89%B9%E6%80%A7">require 自动寻找特性</a></li></ul><h2 id="模块定义-导出" tabindex="-1"><a class="header-anchor" href="#模块定义-导出" aria-hidden="true">#</a> 模块定义\\导出</h2><p>导出 1：直接导出模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// math.js</span>
<span class="token keyword">var</span> math <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
      i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
      args <span class="token operator">=</span> arguments<span class="token punctuation">,</span>
      l <span class="token operator">=</span> args<span class="token punctuation">.</span>length
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sum <span class="token operator">+=</span> args<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> math
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导出 2：自定义导出，可以导出多个</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// math.js</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    args <span class="token operator">=</span> arguments<span class="token punctuation">,</span>
    l <span class="token operator">=</span> args<span class="token punctuation">.</span>length
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> args<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">sub</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// app.js 可以这样使用</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./math&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用：</strong></p><p>上面两个例子的效果一致</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// program.js</span>
<span class="token keyword">var</span> math <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;math&#39;</span><span class="token punctuation">)</span>
math<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="require-自动寻找特性" tabindex="-1"><a class="header-anchor" href="#require-自动寻找特性" aria-hidden="true">#</a> require 自动寻找特性</h2><p>不指明路径的直接模块调用，比如 require(&#39;gulp&#39;)，将自动在 node_modules 中寻找。</p><p>目录级别不影响。即可以是 node_modules 同级，也可以是某子级</p>`,12),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","使用 require.html.vue"]]);export{r as default};
