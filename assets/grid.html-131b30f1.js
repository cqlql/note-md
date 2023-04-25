import{_ as a,Z as e,$ as i,a0 as n,a1 as t,Y as p,a2 as l,E as c}from"./framework-d33190a3.js";const o={},d=l(`<h2 id="容器属性" tabindex="-1"><a class="header-anchor" href="#容器属性" aria-hidden="true">#</a> 容器属性</h2><h3 id="行列数、行列大小控制" tabindex="-1"><a class="header-anchor" href="#行列数、行列大小控制" aria-hidden="true">#</a> 行列数、行列大小控制</h3><ol><li>grid-template-columns 列</li><li>grid-template-rows 行</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 

fr 

2栏，比例宽度，第2栏是第1栏的2倍

值格式：[正整数]fr
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 2fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
2栏，比例宽度，按容器百分比分
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 70% 30%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 

repeat

2栏，并且都是 50%
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
repeat

6栏，模式重复
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 100px 20px 80px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
repeat 、 auto-fill

按容器宽度自动列，放不下换行。使用 auto-fill 关键字。
下例表示，每列宽度100px，然后自动填充，直到容器不能放置更多的列。
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
minmax

第 3 栏，最小 100px 最大 1fr 
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr <span class="token function">minmax</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
auto 适应剩下的宽度
 
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px auto 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控制间距" tabindex="-1"><a class="header-anchor" href="#控制间距" aria-hidden="true">#</a> 控制间距</h3><p>grid-row-gap 、 grid-column-gap 、 grid-gap</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 等于 */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 20px 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 等于 */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-row-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">grid-column-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="区域-可合并、可指定项位置" tabindex="-1"><a class="header-anchor" href="#区域-可合并、可指定项位置" aria-hidden="true">#</a> 区域 - 可合并、可指定项位置</h3><p>grid-template-areas 属性</p><p>如果某些区域不需要利用，则使用&quot;点&quot;（.）表示。</p><p>下例值 <code>a a</code> 表示合并这两个单元格</p><p>结合项目属性 grid-area 指定项目放置位置</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
    <span class="token string">&#39;a a c&#39;</span>
    <span class="token string">&#39;d . f&#39;</span>
    <span class="token string">&#39;g . i&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 放置在 g 位置 */</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> g<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="布局方向-从上往下还是从左往右" tabindex="-1"><a class="header-anchor" href="#布局方向-从上往下还是从左往右" aria-hidden="true">#</a> 布局方向 - 从上往下还是从左往右</h3><p><code>grid-auto-flow</code> 属性，可设值 <code>column</code> 或 <code>row</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
值 column ：从上往下，第1列满了，再换第2列
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
值 row ：从左往右，第1行满了，再换第2行
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
值 dense ：尽可能紧密填满，不出现空格
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row dense<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单元格内容水平垂直位置控制" tabindex="-1"><a class="header-anchor" href="#单元格内容水平垂直位置控制" aria-hidden="true">#</a> 单元格内容水平垂直位置控制</h3><ul><li>justify-items 属性</li><li>align-items 属性</li><li>place-items 属性</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">justify-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整个-grid-水平垂直位置控制" tabindex="-1"><a class="header-anchor" href="#整个-grid-水平垂直位置控制" aria-hidden="true">#</a> 整个 grid 水平垂直位置控制</h3><ul><li>justify-content 属性</li><li>align-content 属性</li><li>place-content 属性</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> start | end | center | stretch | space-around | space-between | space-evenly<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> start | end | center | stretch | space-around | space-between | space-evenly<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控制剩下的行或列" tabindex="-1"><a class="header-anchor" href="#控制剩下的行或列" aria-hidden="true">#</a> 控制剩下的行或列</h3><p>grid-auto-rows 属性</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token comment">/* 3 行 3 列 */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>

  <span class="token comment">/* 多出的行都设置成 50px 高 */</span>
  <span class="token property">grid-auto-rows</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简写" tabindex="-1"><a class="header-anchor" href="#简写" aria-hidden="true">#</a> 简写</h3><ul><li>grid-template 属性</li><li>grid 属性</li></ul><p>grid-template 属性是 grid-template-columns、grid-template-rows 和 grid-template-areas 这三个属性的合并简写形式。</p><p>grid 属性是 grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow 这六个属性的合并简写形式。</p><p>从易读易写的角度考虑，建议不要合并属性</p><h2 id="项目属性" tabindex="-1"><a class="header-anchor" href="#项目属性" aria-hidden="true">#</a> 项目属性</h2><h3 id="区域位置" tabindex="-1"><a class="header-anchor" href="#区域位置" aria-hidden="true">#</a> 区域位置</h3><p>grid-area 属性。结合 grid-template-areas 使用</p><h3 id="项位置" tabindex="-1"><a class="header-anchor" href="#项位置" aria-hidden="true">#</a> 项位置</h3><ul><li>grid-column-start 属性</li><li>grid-column-end 属性</li><li>grid-row-start 属性</li><li>grid-row-end 属性</li></ul><p>可使用 grid-column 、grid-row 属性简写</p><h3 id="项内容水平垂直位置" tabindex="-1"><a class="header-anchor" href="#项内容水平垂直位置" aria-hidden="true">#</a> 项内容水平垂直位置</h3><ul><li>justify-self 属性</li><li>align-self 属性</li><li>place-self 属性</li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,39),r={href:"https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html",target:"_blank",rel:"noopener noreferrer"};function u(v,m){const s=c("ExternalLinkIcon");return e(),i("div",null,[d,n("p",null,[n("a",r,[t("CSS Grid 网格布局教程 - 阮一峰的网络日志"),p(s)])])])}const b=a(o,[["render",u],["__file","grid.html.vue"]]);export{b as default};
