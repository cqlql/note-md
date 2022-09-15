import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,a,b as e}from"./app.68c6558f.js";const p={},l=e(`<p>\u5982\u679C\u662F docker \uFF0C\u5219\u5148\u8981\u8FDB\u5165 mysql \u5BB9\u5668\u73AF\u5883</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u521B\u5EFA mysql \u5BB9\u5668</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> some-mysql <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123123</span> <span class="token parameter variable">-d</span> mysql:latest

<span class="token comment"># \u5217\u51FA mysql \u5BB9\u5668 id</span>
<span class="token comment"># \u6B64\u547D\u4EE4\u4F1A\u5217\u51FA\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668ID</span>
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># \u8FDB\u5165\u5BB9\u5668\uFF0C\u76F8\u5F53\u4E8E\u662F\u4E00\u4E2Alinux\u7CFB\u7EDF</span>
<span class="token comment"># \u5176\u4E2D 289cc00dc5ed \u4E3A mysql \u5BB9\u5668 id</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 289cc00dc5ed <span class="token function">bash</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FDB\u5165 mysql</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
<span class="token comment"># \u63A5\u4E0B\u6765\u8F93\u5165root\u7528\u6236\u5BC6\u7801</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u7528\u6237\uFF0C\u6570\u636E\u5E93\u8868\uFF0C\u6743\u9650</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">user</span> <span class="token string">&#39;joly&#39;</span><span class="token variable">@&#39;%&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&quot;123123&quot;</span><span class="token punctuation">;</span>
<span class="token comment">-- \`identified by\` \u4E0D\u5E26\u5219\u4E0D\u7ED9\u5BC6\u7801</span>
<span class="token comment">-- \`%\` \u8868\u793A\u6240\u6709 host \u90FD\u80FD\u8BBF\u95EE\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4E3A \`localhost\` \u53EA\u80FD\u672C\u5730\u8BBF\u95EE</span>

<span class="token comment">-- \u521B\u5EFA db_user \u6570\u636E\u5E93</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> db_user<span class="token punctuation">;</span>


<span class="token comment">-- \u7ED9 joly \u5206\u914D db_user \u6570\u636E\u5E93\u7684\u6240\u6709\u6743\u9650</span>
<span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">on</span> db_user<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> <span class="token string">&#39;joly&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>


<span class="token comment">-- \u521B\u5EFA\u7528\u6237\u8868</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> db_user<span class="token punctuation">.</span><span class="token keyword">user</span> <span class="token punctuation">(</span>
  id <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  username <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  password <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  nickname <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- \u63D2\u5165\u6570\u636E</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> db_user<span class="token punctuation">.</span><span class="token keyword">user</span> <span class="token punctuation">(</span>username<span class="token punctuation">,</span>password<span class="token punctuation">,</span>nickname<span class="token punctuation">)</span>
  <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;joly&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;123123&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[l];function t(c,i){return n(),a("div",null,o)}const u=s(p,[["render",t],["__file","03_\u5FEB\u901F\u4F7F\u7528.html.vue"]]);export{u as default};
