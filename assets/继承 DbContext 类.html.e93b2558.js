import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,a,b as e}from"./app.c3a65490.js";const t={},p=e(`<h2 id="\u58F0\u660E\u4E00\u4E2A\u7EE7\u627F-dbcontext-\u7684\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u4E00\u4E2A\u7EE7\u627F-dbcontext-\u7684\u7C7B" aria-hidden="true">#</a> \u58F0\u660E\u4E00\u4E2A\u7EE7\u627F DbContext \u7684\u7C7B</h2><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u901A\u8FC7\u6B64\u7C7B\u7684\u5B9E\u4F8B\u8BBF\u95EE\u6570\u636E\u5E93\u4E86</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>EntityFrameworkCore</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>Extensions<span class="token punctuation">.</span>Configuration</span><span class="token punctuation">;</span>
<span class="token keyword">namespace</span> <span class="token namespace">AppConsole</span>
<span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserManage</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">DbContext</span></span>
  <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06 User \u6620\u5C04\u5230\u8868</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DbSet<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> User <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnConfiguring</span><span class="token punctuation">(</span><span class="token class-name">DbContextOptionsBuilder</span> optionsBuilder<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// Program.configuration \u8BF4\u660E\uFF1A\u8FD9\u662F\u6839\u636E appsettings.json \u521B\u5EFA\u7684\u5BF9\u8C61\uFF0C\u5C06\u5728\u63A7\u5236\u53F0\u7A0B\u5E8F\u8FD0\u884C\u65F6\u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u5B9E\u73B0\u4EE3\u7801\u89C1\u4E0B\u9762\u7684\u63A7\u5236\u53F0\u7A0B\u5E8F\u5165\u53E3</span>
      <span class="token comment">// MysqlDatabase \u662F\u6570\u636E\u5E93\u540D</span>
      optionsBuilder<span class="token punctuation">.</span><span class="token function">UseMySQL</span><span class="token punctuation">(</span>ConfigurationExtensions<span class="token punctuation">.</span><span class="token function">GetConnectionString</span><span class="token punctuation">(</span>Program<span class="token punctuation">.</span>configuration<span class="token operator">!</span><span class="token punctuation">,</span> <span class="token string">&quot;MysqlDatabase&quot;</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> \u7B80\u5355\u4F7F\u7528</h2><h2 id="\u6570\u636E\u64AD\u79CD" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u64AD\u79CD" aria-hidden="true">#</a> \u6570\u636E\u64AD\u79CD</h2><h2 id="fluent-api" tabindex="-1"><a class="header-anchor" href="#fluent-api" aria-hidden="true">#</a> fluent api</h2>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","\u7EE7\u627F DbContext \u7C7B.html.vue"]]);export{d as default};
