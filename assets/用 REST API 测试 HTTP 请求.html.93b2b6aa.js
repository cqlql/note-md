import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,a as s,b as e,e as a,c as t,f as r,r as l}from"./app.55465dbd.js";const d={},c=r(`<h2 id="\u4F7F\u7528\u4E0A\u4E2A\u8BF7\u6C42\u8FD4\u56DE\u7ED3\u679C\u4F5C\u4E3A\u8BF7\u6C42\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E0A\u4E2A\u8BF7\u6C42\u8FD4\u56DE\u7ED3\u679C\u4F5C\u4E3A\u8BF7\u6C42\u53C2\u6570" aria-hidden="true">#</a> \u4F7F\u7528\u4E0A\u4E2A\u8BF7\u6C42\u8FD4\u56DE\u7ED3\u679C\u4F5C\u4E3A\u8BF7\u6C42\u53C2\u6570</h2><p>\u8FD9\u662F\u4E00\u4E2A\u5B9E\u73B0 token \u8BF7\u6C42\u7684\u4F8B\u5B50\u3002\u521B\u5EFA example.http \u6587\u4EF6\uFF0C\u5176\u4E2D<code>{{login.response.body.data.token}}</code>\u83B7\u53D6\u7684\u662F\u4E0A\u4E00\u4E2A\u8BF7\u6C42\u7684\u8FD4\u56DE\u7684\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># @name login
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>`,4),u={href:"https://marketplace.visualstudio.com/items?itemName=humao.rest-client",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhuanlan.zhihu.com/p/382740857",target:"_blank",rel:"noopener noreferrer"};function h(p,v){const n=l("ExternalLinkIcon");return i(),s("div",null,[c,e("p",null,[e("a",u,[a("REST \u5BA2\u6237\u7AEF - Visual Studio Marketplace"),t(n)])]),e("p",null,[e("a",m,[a("VSCode \u7684 REST Client \u6307\u5357\uFF0C\u8D85\u597D\u7528\u7684 HTTP \u5BA2\u6237\u7AEF\u5DE5\u5177 - \u77E5\u4E4E (zhihu.com)"),t(n)])])])}const T=o(d,[["render",h],["__file","\u7528 REST API \u6D4B\u8BD5 HTTP \u8BF7\u6C42.html.vue"]]);export{T as default};
