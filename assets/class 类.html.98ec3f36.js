import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,a,b as e}from"./app.fb479c86.js";const t={},p=e(`<h2 id="\u5B9E\u4F53\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F53\u7C7B" aria-hidden="true">#</a> \u5B9E\u4F53\u7C7B</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","class \u7C7B.html.vue"]]);export{k as default};
