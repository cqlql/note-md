import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,a,b as e}from"./app.c8cb829a.js";const i={},l=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u66F4\u65B0\u8F6F\u4EF6\u6E90\u5934</span>
<span class="token function">apt</span> update

<span class="token comment"># \u663E\u793A\u53EF\u5347\u7EA7\u7684\u8F6F\u4EF6\u5305</span>
<span class="token function">apt</span> list <span class="token parameter variable">--upgradeable</span>

<span class="token comment"># \u663E\u793A\u5DF2\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305</span>
<span class="token function">apt</span> list <span class="token parameter variable">--installed</span>

<span class="token comment"># \u5347\u7EA7\u6240\u6709\u5DF2\u5B89\u88C5\u8F6F\u4EF6</span>
<span class="token function">apt</span> upgrade

<span class="token comment"># \u5B89\u88C5\u6307\u5B9A\u8F6F\u4EF6 ( -f \u4FEE\u590D\u4F9D\u8D56\u5173\u7CFB)</span>
<span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-f</span> mysql-server

<span class="token comment"># \u5220\u9664\u5DF2\u5B89\u88C5\u8F6F\u4EF6\u5305</span>
<span class="token function">apt</span> remove mysql-server

<span class="token comment"># \u81EA\u52A8\u6E05\u7406\u4E0D\u518D\u4F7F\u7528\u7684\u4F9D\u8D56\u548C\u5E93\u6587\u4EF6</span>
<span class="token function">apt</span> autoremove

<span class="token comment"># \u663E\u793A\u5DF2\u5B89\u88C5\u8F6F\u4EF6\u5305\u4FE1\u606F\uFF08\u7248\u672C\u53F7\uFF0C\u5B89\u88C5\u5927\u5C0F\uFF0C\u4F9D\u8D56\u5173\u7CFB\uFF0Cbug\u62A5\u544A\u7B49\u7B49\uFF09</span>
<span class="token function">apt</span> show mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function t(d,p){return s(),a("div",null,c)}const v=n(i,[["render",t],["__file","apt \u5305\u7BA1\u7406.html.vue"]]);export{v as default};
