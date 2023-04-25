import{_ as n,Z as s,$ as a,a2 as e}from"./framework-d33190a3.js";const t={},p=e(`<h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2><p>https://blog.csdn.net/xhltk316/article/details/115967840</p><h2 id="连接数据库、建表" tabindex="-1"><a class="header-anchor" href="#连接数据库、建表" aria-hidden="true">#</a> 连接数据库、建表</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token keyword">from</span> peewee <span class="token keyword">import</span> <span class="token operator">*</span>

db <span class="token operator">=</span> SqliteDatabase<span class="token punctuation">(</span>Path<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>path<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;data/database.db&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">BaseModel</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        database <span class="token operator">=</span> db

<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># unique 是否唯一</span>
    phoneNumber <span class="token operator">=</span> CharField<span class="token punctuation">(</span>unique<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>create_tables<span class="token punctuation">(</span><span class="token punctuation">[</span>User<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># User.create(name=&#39;张三&#39;, phoneNumber=&#39;+8613923401528&#39;)</span>
<span class="token comment"># User.create(name=&#39;李四&#39;, phoneNumber=&#39;+8618673696661&#39;)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","peewee数据库操作.html.vue"]]);export{d as default};
