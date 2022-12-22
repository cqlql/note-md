import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,a,b as e}from"./app.d5234182.js";const t={},p=e(`<p>\u4E0E set \u7684\u533A\u522B\uFF1Ainit \u53EA\u80FD\u7528\u5BF9\u8C61\u521D\u59CB\u5316\u5668\u521D\u59CB\u5316\uFF0C\u800Cset\u90FD\u53EF\u4EE5\u3002</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>
<span class="token keyword">class</span> <span class="token class-name">Person_InitExample</span>
<span class="token punctuation">{</span>
     <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">int</span></span> _yearOfBirth<span class="token punctuation">;</span>

     <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> YearOfBirth
     <span class="token punctuation">{</span>
         <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> _yearOfBirth<span class="token punctuation">;</span> <span class="token punctuation">}</span>
         init <span class="token punctuation">{</span> _yearOfBirth <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">var</span></span> john <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Person_InitExample</span>
<span class="token punctuation">{</span>
    YearOfBirth <span class="token operator">=</span> <span class="token number">1984</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

john<span class="token punctuation">.</span>YearOfBirth <span class="token operator">=</span> <span class="token number">1926</span><span class="token punctuation">;</span> <span class="token comment">//Not allowed, as its value can only be set once in the constructor</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function i(o,l){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","init \u5173\u952E\u5B57.html.vue"]]);export{d as default};
