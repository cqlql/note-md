import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,a as o,e,f as n,c as s,b as l,r}from"./app.f413b851.js";const c={},d={href:"https://marketplace.visualstudio.com/items?itemName=humao.rest-client",target:"_blank",rel:"noopener noreferrer"},u=l(`<h2 id="\u4F7F\u7528\u53D8\u91CF\u5B9E\u73B0-token-\u8BF7\u6C42\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53D8\u91CF\u5B9E\u73B0-token-\u8BF7\u6C42\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u4F7F\u7528\u53D8\u91CF\u5B9E\u73B0 token \u8BF7\u6C42\u7684\u4F8B\u5B50</h2><p>example.http \u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># @name login
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(v,_){const a=r("ExternalLinkIcon");return i(),o("div",null,[e("p",null,[n("\u66F4\u591A\u4FE1\u606F\u8BF7\u770B\u6587\u6863\uFF1A"),e("a",d,[n("REST \u5BA2\u6237\u7AEF - Visual Studio Marketplace"),s(a)])]),u])}const b=t(c,[["render",m],["__file","\u7528 REST API \u6D4B\u8BD5 HTTP \u8BF7\u6C42.html.vue"]]);export{b as default};
