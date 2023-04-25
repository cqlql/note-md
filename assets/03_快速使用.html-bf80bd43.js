import{_ as s,Z as n,$ as a,a2 as e}from"./framework-d33190a3.js";const p={},o=e(`<p>进入 mysql</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
<span class="token comment"># 接下来输入root用戶密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建用户，数据库表，权限</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">user</span> <span class="token string">&#39;joly&#39;</span><span class="token variable">@&#39;%&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&quot;123123&quot;</span><span class="token punctuation">;</span>
<span class="token comment">-- \`identified by\` 不带则不给密码</span>
<span class="token comment">-- \`%\` 表示所有 host 都能访问，可以指定为 \`localhost\` 只能本地访问</span>

<span class="token comment">-- 创建 db_user 数据库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> db_user<span class="token punctuation">;</span>


<span class="token comment">-- 给 joly 分配 db_user 数据库的所有权限</span>
<span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">on</span> db_user<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> <span class="token string">&#39;joly&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>


<span class="token comment">-- 创建用户表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> db_user<span class="token punctuation">.</span><span class="token keyword">user</span> <span class="token punctuation">(</span>
  id <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  username <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  password <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  nickname <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 插入数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> db_user<span class="token punctuation">.</span><span class="token keyword">user</span> <span class="token punctuation">(</span>username<span class="token punctuation">,</span>password<span class="token punctuation">,</span>nickname<span class="token punctuation">)</span>
  <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;joly&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;123123&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[o];function l(c,i){return n(),a("div",null,t)}const d=s(p,[["render",l],["__file","03_快速使用.html.vue"]]);export{d as default};
