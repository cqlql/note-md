import{_ as n,Z as s,$ as a,a2 as e}from"./framework-d33190a3.js";const t={},c=e(`<p>与 set 的区别：init 只能用对象初始化器初始化，而set都可以。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[c];function i(o,l){return s(),a("div",null,p)}const u=n(t,[["render",i],["__file","init 关键字.html.vue"]]);export{u as default};
