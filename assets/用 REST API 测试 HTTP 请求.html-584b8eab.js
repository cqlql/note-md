import{_ as i,Z as o,$ as s,a0 as e,a1 as a,Y as t,a2 as l,E as r}from"./framework-d33190a3.js";const d={},c=l(`<h2 id="使用上个请求返回结果作为请求参数" tabindex="-1"><a class="header-anchor" href="#使用上个请求返回结果作为请求参数" aria-hidden="true">#</a> 使用上个请求返回结果作为请求参数</h2><p>这是一个实现 token 请求的例子。创建 example.http 文件，其中<code>{{login.response.body.data.token}}</code>获取的是上一个请求的返回的结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># @name login
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,4),u={href:"https://marketplace.visualstudio.com/items?itemName=humao.rest-client",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhuanlan.zhihu.com/p/382740857",target:"_blank",rel:"noopener noreferrer"};function h(v,p){const n=r("ExternalLinkIcon");return o(),s("div",null,[c,e("p",null,[e("a",u,[a("REST 客户端 - Visual Studio Marketplace"),t(n)])]),e("p",null,[e("a",m,[a("VSCode 的 REST Client 指南，超好用的 HTTP 客户端工具 - 知乎 (zhihu.com)"),t(n)])])])}const b=i(d,[["render",h],["__file","用 REST API 测试 HTTP 请求.html.vue"]]);export{b as default};
