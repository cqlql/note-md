import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,a as n,b as e}from"./app.ab00bac6.js";const d={},l=e(`<h2 id="\u521B\u5EFA\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5E93" aria-hidden="true">#</a> \u521B\u5EFA\u5E93</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> db_user<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u6240\u6709\u5E93" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6240\u6709\u5E93" aria-hidden="true">#</a> \u67E5\u770B\u6240\u6709\u5E93</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u6743\u9650\u5185\u7684\u6240\u6709\u5E93</span>
<span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span>

<span class="token comment">-- \u8FC7\u6EE4</span>
<span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span> <span class="token operator">like</span> <span class="token string">&#39;%db_user&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> db_user<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),r=[l];function o(i,c){return a(),n("div",null,r)}const u=s(d,[["render",o],["__file","01_\u5E93\u64CD\u4F5C.html.vue"]]);export{u as default};
