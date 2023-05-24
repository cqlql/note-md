import{_ as t,Z as o,$ as i,a0 as n,a1 as a,Y as e,a2 as p,E as r}from"./framework-d33190a3.js";const l={},c=p(`<h2 id="使用上个请求返回结果作为请求参数" tabindex="-1"><a class="header-anchor" href="#使用上个请求返回结果作为请求参数" aria-hidden="true">#</a> 使用上个请求返回结果作为请求参数</h2><p>这是一个实现 token 请求的例子。创建 example.http 文件，其中<code>{{login.response.body.data.token}}</code>获取的是上一个请求的返回的结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># @name login
POST https://uc.youzhuanla.com/login HTTP/2
content-type: application/json
{
  &quot;username&quot;:&quot;chenqiaoli&quot;,
  &quot;password&quot;:&quot;lmm789&quot;,
  &quot;company_name&quot;:&quot;1&quot;
}

###
@authToken = {{login.response.body.data.token}}
https://uc.youzhuanla.com/online/get?pagenum=10&amp;page=1
authorization: Bearer {{authToken}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h2><p>在 vscode setting.json 中配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;rest-client.environmentVariables&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;$shared&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jo&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;local&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;hostname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost:7085&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{{$shared password}}&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;production&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;hostname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost:8081&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{{$shared password}}&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="切换环境" tabindex="-1"><a class="header-anchor" href="#切换环境" aria-hidden="true">#</a> 切换环境</h2><p>ctrl+shift+p 选择 rest-client:switch-environment，在配置环境变量的前提下有用</p><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,9),u={href:"https://marketplace.visualstudio.com/items?itemName=humao.rest-client",target:"_blank",rel:"noopener noreferrer"},d={href:"https://zhuanlan.zhihu.com/p/382740857",target:"_blank",rel:"noopener noreferrer"};function v(m,h){const s=r("ExternalLinkIcon");return o(),i("div",null,[c,n("p",null,[n("a",u,[a("REST 客户端 - Visual Studio Marketplace"),e(s)])]),n("p",null,[n("a",d,[a("VSCode 的 REST Client 指南，超好用的 HTTP 客户端工具 - 知乎 (zhihu.com)"),e(s)])])])}const q=t(l,[["render",v],["__file","用 REST API 测试 HTTP 请求.html.vue"]]);export{q as default};
