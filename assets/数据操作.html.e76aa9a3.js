import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,a,b as t}from"./app.d8cd8e11.js";const e={},p=t(`<h2 id="\u589E" tabindex="-1"><a class="header-anchor" href="#\u589E" aria-hidden="true">#</a> \u589E</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiController</span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;[controller]&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Produces</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;application/json&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ControllerBase</span></span>
<span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">ILogger<span class="token punctuation">&lt;</span>UserController<span class="token punctuation">&gt;</span></span> _logger<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">UserManageDbContext</span> _db<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token function">UserController</span><span class="token punctuation">(</span><span class="token class-name">UserManageDbContext</span> db<span class="token punctuation">,</span> <span class="token class-name">ILogger<span class="token punctuation">&lt;</span>UserController<span class="token punctuation">&gt;</span></span> logger<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    _db <span class="token operator">=</span> db<span class="token punctuation">;</span>
    _logger <span class="token operator">=</span> logger<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u589E</span>
  <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpPost</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;Add&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
  <span class="token keyword">public</span> <span class="token return-type class-name">APIResult<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// mark product as added in change tracking</span>
    _db<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// save tracked changes to database</span>
    <span class="token class-name"><span class="token keyword">int</span></span> affected <span class="token operator">=</span> _db<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>affected <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Error</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;\u65B0\u589E\u5931\u8D25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6539</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpPost</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;Update&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
  <span class="token keyword">public</span> <span class="token return-type class-name">APIResult<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
   <span class="token comment">// get first user whose name starts with name</span>
        <span class="token class-name">User</span> updateUser <span class="token operator">=</span> _db<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span>
          p <span class="token operator">=&gt;</span> p<span class="token punctuation">.</span>ProductName<span class="token punctuation">.</span><span class="token function">StartsWith</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>affected <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Ok</span><span class="token punctuation">(</span><span class="token string">&quot;\u4FEE\u6539\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Error</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;\u4FEE\u6539\u5931\u8D25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5220</span>



<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6539" tabindex="-1"><a class="header-anchor" href="#\u6539" aria-hidden="true">#</a> \u6539</h2>`,3),c=[p];function o(l,i){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","\u6570\u636E\u64CD\u4F5C.html.vue"]]);export{k as default};
