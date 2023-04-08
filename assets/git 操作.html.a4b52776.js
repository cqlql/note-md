import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,a,b as t}from"./app.489a6a76.js";const e={},p=t(`<p>\u4F7F\u7528 GitPython \u5E93</p><p>\u53C2\u8003\u6587\u6863</p><p>https://gitpython.readthedocs.io/en/stable/tutorial.html</p><p>https://www.cnblogs.com/wanglan/p/10718876.html</p><p>https://www.jianshu.com/p/c1a7a32ae50b</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> git


<span class="token keyword">def</span> <span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    repo <span class="token operator">=</span> git<span class="token punctuation">.</span>Repo<span class="token punctuation">(</span><span class="token string">&#39;./.git&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> repo<span class="token punctuation">.</span>is_dirty<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        repo<span class="token punctuation">.</span>remote<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>fetch<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># try:</span>
        <span class="token comment">#   repo.remote().pull()</span>
        <span class="token comment"># except:</span>
        <span class="token comment">#     print(&#39;pull\u9519\u8BEF&#39;)</span>

        repo<span class="token punctuation">.</span>git<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&#39;-A&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># repo.index.add([&#39;*&#39;])</span>
        <span class="token comment"># repo.index.remove([&#39;*&#39;])</span>

        <span class="token comment"># repo.index.commit(f&quot;update {datetime.datetime.now()}&quot;)</span>
        repo<span class="token punctuation">.</span>index<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>

        repo<span class="token punctuation">.</span>remote<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>push<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;push \u5B8C\u6210&#39;</span><span class="token punctuation">)</span>


commit<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[p];function c(o,l){return s(),a("div",null,i)}const r=n(e,[["render",c],["__file","git \u64CD\u4F5C.html.vue"]]);export{r as default};
