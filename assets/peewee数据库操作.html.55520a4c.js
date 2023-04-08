import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,a,b as e}from"./app.489a6a76.js";const t={},p=e(`<h2 id="\u76F8\u5173\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u6587\u6863" aria-hidden="true">#</a> \u76F8\u5173\u6587\u6863</h2><p>https://blog.csdn.net/xhltk316/article/details/115967840</p><h2 id="\u8FDE\u63A5\u6570\u636E\u5E93\u3001\u5EFA\u8868" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u6570\u636E\u5E93\u3001\u5EFA\u8868" aria-hidden="true">#</a> \u8FDE\u63A5\u6570\u636E\u5E93\u3001\u5EFA\u8868</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token keyword">from</span> peewee <span class="token keyword">import</span> <span class="token operator">*</span>

db <span class="token operator">=</span> SqliteDatabase<span class="token punctuation">(</span>Path<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>path<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;data/database.db&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">BaseModel</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        database <span class="token operator">=</span> db

<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># unique \u662F\u5426\u552F\u4E00</span>
    phoneNumber <span class="token operator">=</span> CharField<span class="token punctuation">(</span>unique<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>create_tables<span class="token punctuation">(</span><span class="token punctuation">[</span>User<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># User.create(name=&#39;\u5F20\u4E09&#39;, phoneNumber=&#39;+8613923401528&#39;)</span>
<span class="token comment"># User.create(name=&#39;\u674E\u56DB&#39;, phoneNumber=&#39;+8618673696661&#39;)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","peewee\u6570\u636E\u5E93\u64CD\u4F5C.html.vue"]]);export{r as default};
