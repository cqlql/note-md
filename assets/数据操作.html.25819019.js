import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,a as e,e as n,f as p,c as o,b as c,r as l}from"./app.2cfecfd0.js";const i={},u=c(`<h2 id="\u589E" tabindex="-1"><a class="header-anchor" href="#\u589E" aria-hidden="true">#</a> \u589E</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiController</span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;api/[controller]&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
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
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>post \u8BF7\u6C42\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST https://localhost:7085/api/User/Add

content-type: application/json
{
  &quot;username&quot;: &quot;joly1&quot;,
  &quot;password&quot;: &quot;123123&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6539" tabindex="-1"><a class="header-anchor" href="#\u6539" aria-hidden="true">#</a> \u6539</h2><p>\u76F4\u63A5\u4F7F\u7528\u5B8C\u6574\u7684\u5B9E\u4F8B\u5B9E\u73B0\u4FEE\u6539</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpPost</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;Update&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name">APIResult<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  _db<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// save tracked changes to database </span>
  <span class="token class-name"><span class="token keyword">int</span></span> affected <span class="token operator">=</span> _db<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>affected <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Ok</span><span class="token punctuation">(</span><span class="token string">&quot;\u4FEE\u6539\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;\u4FEE\u6539\u5931\u8D25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u6307\u5B9A\u7684\u5C5E\u6027</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpPost</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;UpdatePassword&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name">APIResult<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> <span class="token function">UpdatePassword</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  SharpPad<span class="token punctuation">.</span>Output<span class="token punctuation">.</span><span class="token function">DumpBlocking</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// get first user whose name starts with name</span>
  <span class="token class-name">User</span> updateUser <span class="token operator">=</span> _db<span class="token punctuation">.</span>User<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span>u <span class="token operator">=&gt;</span> u<span class="token punctuation">.</span>id <span class="token operator">==</span> user<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  updateUser<span class="token punctuation">.</span>password <span class="token operator">=</span> user<span class="token punctuation">.</span>password<span class="token punctuation">;</span>

  <span class="token comment">// save tracked changes to database </span>
  <span class="token class-name"><span class="token keyword">int</span></span> affected <span class="token operator">=</span> _db<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>affected <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Ok</span><span class="token punctuation">(</span><span class="token string">&quot;\u4FEE\u6539\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;\u4FEE\u6539\u5931\u8D25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>post \u8BF7\u6C42\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
### \u4FEE\u6539\u6574\u4E2A\u5BF9\u8C61
POST https://localhost:7085/api/User/update

content-type: application/json

{
  &quot;id&quot;:&quot;1&quot;,
  &quot;username&quot;: &quot;joly1&quot;,
  &quot;password&quot;: &quot;123123&quot;
}

### \u4FEE\u6539\u5BC6\u7801

POST https://localhost:7085/api/User/UpdatePassword
content-type: application/json

{
  &quot;id&quot;:&quot;1&quot;,
  &quot;password&quot;: &quot;xxx&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5220" tabindex="-1"><a class="header-anchor" href="#\u5220" aria-hidden="true">#</a> \u5220</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">// DELETE: api/User/5</span>
<span class="token punctuation">[</span><span class="token function">HttpDelete</span><span class="token punctuation">(</span><span class="token string">&quot;{id}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name">APIResult<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> <span class="token function">Delete</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">long</span></span> id<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token class-name">User<span class="token punctuation">?</span></span> updateUser <span class="token operator">=</span> _db<span class="token punctuation">.</span>User<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span>u <span class="token operator">=&gt;</span> u<span class="token punctuation">.</span>id <span class="token operator">==</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>updateUser <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;\u7528\u6237\u4E0D\u5B58\u5728&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  _db<span class="token punctuation">.</span>User<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>updateUser<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name"><span class="token keyword">int</span></span> affected <span class="token operator">=</span> _db<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>affected <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Ok</span><span class="token punctuation">(</span><span class="token string">&quot;\u5220\u9664\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;\u5220\u9664\u5931\u8D25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>delete \u8BF7\u6C42\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DELETE https://localhost:7085/api/User/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>`,16),r={href:"https://learn.microsoft.com/zh-cn/aspnet/core/tutorials/first-web-api?view=aspnetcore-7.0&tabs=visual-studio",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const s=l("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",r,[p("\u6559\u7A0B\uFF1A\u4F7F\u7528 ASP.NET Core \u521B\u5EFA Web API"),o(s)])])])}const g=a(i,[["render",d],["__file","\u6570\u636E\u64CD\u4F5C.html.vue"]]);export{g as default};
