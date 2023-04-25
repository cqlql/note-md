import{_ as a,Z as t,$ as e,a0 as n,a1 as p,Y as c,a2 as o,E as l}from"./framework-d33190a3.js";const i={},u=o(`<p>这里是在 WebApi 控制器中操作的增删改查，所以需要先声明一个控制器类。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiController</span></span><span class="token punctuation">]</span>
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
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>
<span class="token comment">// 增</span>
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
  <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Error</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;新增失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>post 请求示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST https://localhost:7085/api/User/Add

content-type: application/json
{
  &quot;username&quot;: &quot;joly1&quot;,
  &quot;password&quot;: &quot;123123&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="改" tabindex="-1"><a class="header-anchor" href="#改" aria-hidden="true">#</a> 改</h2><p>直接使用完整的实例实现修改</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpPost</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;Update&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name">APIResult<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  _db<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// save tracked changes to database </span>
  <span class="token class-name"><span class="token keyword">int</span></span> affected <span class="token operator">=</span> _db<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>affected <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Ok</span><span class="token punctuation">(</span><span class="token string">&quot;修改成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;修改失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改指定的属性</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpPost</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;UpdatePassword&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name">APIResult<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> <span class="token function">UpdatePassword</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  SharpPad<span class="token punctuation">.</span>Output<span class="token punctuation">.</span><span class="token function">DumpBlocking</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// get first user whose name starts with name</span>
  <span class="token class-name">User</span> updateUser <span class="token operator">=</span> _db<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span>u <span class="token operator">=&gt;</span> u<span class="token punctuation">.</span>id <span class="token operator">==</span> user<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  updateUser<span class="token punctuation">.</span>password <span class="token operator">=</span> user<span class="token punctuation">.</span>password<span class="token punctuation">;</span>

  <span class="token comment">// save tracked changes to database </span>
  <span class="token class-name"><span class="token keyword">int</span></span> affected <span class="token operator">=</span> _db<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>affected <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Ok</span><span class="token punctuation">(</span><span class="token string">&quot;修改成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;修改失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>post 请求示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
### 修改整个对象
POST https://localhost:7085/api/User/update

content-type: application/json

{
  &quot;id&quot;:&quot;1&quot;,
  &quot;username&quot;: &quot;joly1&quot;,
  &quot;password&quot;: &quot;123123&quot;
}

### 修改密码

POST https://localhost:7085/api/User/UpdatePassword
content-type: application/json

{
  &quot;id&quot;:&quot;1&quot;,
  &quot;password&quot;: &quot;xxx&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删" tabindex="-1"><a class="header-anchor" href="#删" aria-hidden="true">#</a> 删</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// DELETE: api/User/5</span>
<span class="token punctuation">[</span><span class="token function">HttpDelete</span><span class="token punctuation">(</span><span class="token string">&quot;{id}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name">APIResult<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> <span class="token function">Delete</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">long</span></span> id<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token class-name">User<span class="token punctuation">?</span></span> updateUser <span class="token operator">=</span> _db<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span>u <span class="token operator">=&gt;</span> u<span class="token punctuation">.</span>id <span class="token operator">==</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>updateUser <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;用户不存在&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  _db<span class="token punctuation">.</span>User<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>updateUser<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name"><span class="token keyword">int</span></span> affected <span class="token operator">=</span> _db<span class="token punctuation">.</span><span class="token function">SaveChanges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>affected <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Ok</span><span class="token punctuation">(</span><span class="token string">&quot;删除成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> APIResult<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;删除失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>delete 请求示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE https://localhost:7085/api/User/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,18),r={href:"https://learn.microsoft.com/zh-cn/aspnet/core/tutorials/first-web-api?view=aspnetcore-7.0&tabs=visual-studio",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const s=l("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",r,[p("教程：使用 ASP.NET Core 创建 Web API"),c(s)])])])}const b=a(i,[["render",d],["__file","CRUD 增删改查.html.vue"]]);export{b as default};
