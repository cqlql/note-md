import{_ as n,Z as s,$ as a,a2 as e}from"./framework-d33190a3.js";const t={},p=e(`<h2 id="类基本定义与使用" tabindex="-1"><a class="header-anchor" href="#类基本定义与使用" aria-hidden="true">#</a> 类基本定义与使用</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>
<span class="token comment">// 定义</span>
<span class="token keyword">class</span> <span class="token class-name">WeatherForecast</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> Date <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> TemperatureC <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token comment">// 只有 get</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> TemperatureF <span class="token operator">=&gt;</span> <span class="token number">32</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>TemperatureC <span class="token operator">/</span> <span class="token number">0.5556</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 设置初始值</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span>  <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">;</span>

    <span class="token comment">// 可为 null</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span><span class="token punctuation">?</span></span> Summary <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token comment">// 创建实例，并初始部分成员</span>
<span class="token class-name"><span class="token keyword">var</span></span> weather <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">WeatherForecast</span>
<span class="token punctuation">{</span>
  Date <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">,</span>
  TemperatureC <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>weather<span class="token punctuation">.</span>Date<span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>weather<span class="token punctuation">.</span>TemperatureF<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态类" tabindex="-1"><a class="header-anchor" href="#静态类" aria-hidden="true">#</a> 静态类</h2><ol><li>相当于全局对象，一直存在内存中。</li><li>仅包含静态成员。</li><li>无法实例化。</li><li>只能包含静态构造函数，并且在成员被访问后执行。</li><li>密封性，无法被继承。</li><li>不建议使用静态类，能不用就不用。</li></ol><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// 定义</span>
<span class="token keyword">namespace</span> <span class="token namespace">AppConsole</span>
<span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">StaticClass</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name"><span class="token keyword">int</span></span> num <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

    <span class="token comment">// 静态构造函数</span>
    <span class="token keyword">static</span> <span class="token function">StaticClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      num <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>
      Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;此处在成员被访问后执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 访问</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>StaticClass<span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态成员" tabindex="-1"><a class="header-anchor" href="#静态成员" aria-hidden="true">#</a> 静态成员</h2><p>我的理解：</p><ol><li>所有实例的共享成员，公共成员。</li><li>不用实例化，跟类是否实例化没有关系。</li><li>可直接通过类访问、修改。</li></ol><p>什么是被初始化？ 在类的构造函数执行时，包括静态构造函数和非静态构造函数。</p><p>那么类的构造函数什么时候被执行？ 在成员被调用时执行，包括静态成员和一般成员。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BankAccount</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 定义静态成员</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name"><span class="token keyword">decimal</span></span> InterestRete<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 直接调用</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>BankAccount<span class="token punctuation">.</span>InterestRete<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态类与普通类中静态成员区别" tabindex="-1"><a class="header-anchor" href="#静态类与普通类中静态成员区别" aria-hidden="true">#</a> 静态类与普通类中静态成员区别</h2><p>目前没发现特别的区别，但看介绍是静态类中的静态成员在程序启动就会被初始化，而普通类静态成员在使用时才会被初始化。但这个结论无从验证</p>`,13),c=[p];function l(i,o){return s(),a("div",null,c)}const r=n(t,[["render",l],["__file","class 类.html.vue"]]);export{r as default};
