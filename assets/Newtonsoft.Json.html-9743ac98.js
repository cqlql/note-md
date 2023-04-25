import{_ as n,Z as s,$ as a,a2 as t}from"./framework-d33190a3.js";const e={},p=t(`<p>一款受欢迎的高性能的 JSON 框架, 从 .net core 开始默认集成</p><h2 id="可以修正映射" tabindex="-1"><a class="header-anchor" href="#可以修正映射" aria-hidden="true">#</a> 可以修正映射</h2><p>当请求带的 json 参数字段名与后端定义的模型不一样时，便可通过 <code>JsonProperty</code> 修正</p><p>模型</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 登录参数</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginView</span>
<span class="token punctuation">{</span>
  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
  <span class="token doc-comment comment">/// 账号</span>
  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
  <span class="token punctuation">[</span><span class="token function">JsonProperty</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Required</span><span class="token attribute-arguments"><span class="token punctuation">(</span>ErrorMessage <span class="token operator">=</span> <span class="token string">&quot;账号不能为空&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
  <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span><span class="token punctuation">?</span></span> UserName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
  <span class="token doc-comment comment">/// 密码</span>
  <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
  <span class="token punctuation">[</span><span class="token function">JsonProperty</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span><span class="token punctuation">?</span></span> Password <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>某控制器内</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>  <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpPost</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
  <span class="token keyword">public</span> <span class="token return-type class-name">APIResult<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> <span class="token function">Login</span><span class="token punctuation">(</span><span class="token class-name">LoginView</span> user<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Ok</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>### 登录
POST https://{{hostname}}/api/login
content-type: application/json

{
  &quot;username&quot;: &quot;joly&quot;,
  &quot;password&quot;: &quot;123123&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","Newtonsoft.Json.html.vue"]]);export{d as default};
