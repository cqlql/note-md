import{_ as s,Z as a,$ as n,a2 as e}from"./framework-d33190a3.js";const d={},l=e(`<h2 id="创建库" tabindex="-1"><a class="header-anchor" href="#创建库" aria-hidden="true">#</a> 创建库</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> db_user<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看所有库" tabindex="-1"><a class="header-anchor" href="#查看所有库" aria-hidden="true">#</a> 查看所有库</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 权限内的所有库</span>
<span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span>

<span class="token comment">-- 过滤</span>
<span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span> <span class="token operator">like</span> <span class="token string">&#39;%db_user&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> db_user<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),r=[l];function c(i,o){return a(),n("div",null,r)}const p=s(d,[["render",c],["__file","01_库操作.html.vue"]]);export{p as default};
