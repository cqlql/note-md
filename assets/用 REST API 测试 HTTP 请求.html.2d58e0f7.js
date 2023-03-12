import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,a as s,e,f as a,c as t,b as r,r as l}from"./app.3668b19e.js";const d={},c=r(`<h2 id="\u4F7F\u7528\u53D8\u91CF\u5B9E\u73B0-token-\u8BF7\u6C42\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53D8\u91CF\u5B9E\u73B0-token-\u8BF7\u6C42\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u4F7F\u7528\u53D8\u91CF\u5B9E\u73B0 token \u8BF7\u6C42\u7684\u4F8B\u5B50</h2><p>example.http \u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># @name login
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>`,4),u={href:"https://marketplace.visualstudio.com/items?itemName=humao.rest-client",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhuanlan.zhihu.com/p/382740857",target:"_blank",rel:"noopener noreferrer"};function h(v,p){const n=l("ExternalLinkIcon");return o(),s("div",null,[c,e("p",null,[e("a",u,[a("REST \u5BA2\u6237\u7AEF - Visual Studio Marketplace"),t(n)])]),e("p",null,[e("a",m,[a("VSCode\u7684REST Client\u6307\u5357\uFF0C\u8D85\u597D\u7528\u7684HTTP\u5BA2\u6237\u7AEF\u5DE5\u5177 - \u77E5\u4E4E (zhihu.com)"),t(n)])])])}const T=i(d,[["render",h],["__file","\u7528 REST API \u6D4B\u8BD5 HTTP \u8BF7\u6C42.html.vue"]]);export{T as default};
