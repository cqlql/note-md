import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{c as s,o as e,i as a}from"./app.ad2f3669.js";const i={},l={class:"language-bash ext-sh line-numbers-mode"},c=a(`<pre class="language-bash"><code><span class="token comment"># \u66F4\u65B0\u8F6F\u4EF6\u6E90\u5934</span>
<span class="token function">apt</span> update

<span class="token comment"># \u663E\u793A\u53EF\u5347\u7EA7\u7684\u8F6F\u4EF6\u5305</span>
<span class="token function">apt</span> list --upgradeable

<span class="token comment"># \u663E\u793A\u5DF2\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305</span>
<span class="token function">apt</span> list --installed

<span class="token comment"># \u5347\u7EA7\u6240\u6709\u5DF2\u5B89\u88C5\u8F6F\u4EF6</span>
<span class="token function">apt</span> upgrade

<span class="token comment"># \u5B89\u88C5\u6307\u5B9A\u8F6F\u4EF6 ( -f \u4FEE\u590D\u4F9D\u8D56\u5173\u7CFB)</span>
<span class="token function">apt</span> <span class="token function">install</span> -f mysql-server

<span class="token comment"># \u5220\u9664\u5DF2\u5B89\u88C5\u8F6F\u4EF6\u5305</span>
<span class="token function">apt</span> remove mysql-server

<span class="token comment"># \u81EA\u52A8\u6E05\u7406\u4E0D\u518D\u4F7F\u7528\u7684\u4F9D\u8D56\u548C\u5E93\u6587\u4EF6</span>
<span class="token function">apt</span> autoremove

<span class="token comment"># \u663E\u793A\u5DF2\u5B89\u88C5\u8F6F\u4EF6\u5305\u4FE1\u606F\uFF08\u7248\u672C\u53F7\uFF0C\u5B89\u88C5\u5927\u5C0F\uFF0C\u4F9D\u8D56\u5173\u7CFB\uFF0Cbug\u62A5\u544A\u7B49\u7B49\uFF09</span>
<span class="token function">apt</span> show mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div>`,2),t=[c];function d(o,v){return e(),s("div",l,t)}var r=n(i,[["render",d],["__file","apt \u5305\u7BA1\u7406.html.vue"]]);export{r as default};
