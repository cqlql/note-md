import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,a as i,e as n,f as t,c as p,b as l,r as c}from"./app.e570a6be.js";const o={},d=l(`<h2 id="\u5BB9\u5668\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u5C5E\u6027" aria-hidden="true">#</a> \u5BB9\u5668\u5C5E\u6027</h2><h3 id="\u884C\u5217\u6570\u3001\u884C\u5217\u5927\u5C0F\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u884C\u5217\u6570\u3001\u884C\u5217\u5927\u5C0F\u63A7\u5236" aria-hidden="true">#</a> \u884C\u5217\u6570\u3001\u884C\u5217\u5927\u5C0F\u63A7\u5236</h3><ol><li>grid-template-columns \u5217</li><li>grid-template-rows \u884C</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* 

fr 

2\u680F\uFF0C\u6BD4\u4F8B\u5BBD\u5EA6\uFF0C\u7B2C2\u680F\u662F\u7B2C1\u680F\u76842\u500D

\u503C\u683C\u5F0F\uFF1A[\u6B63\u6574\u6570]fr
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 2fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
2\u680F\uFF0C\u6BD4\u4F8B\u5BBD\u5EA6\uFF0C\u6309\u5BB9\u5668\u767E\u5206\u6BD4\u5206
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 70% 30%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 

repeat

2\u680F\uFF0C\u5E76\u4E14\u90FD\u662F 50%
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
repeat

6\u680F\uFF0C\u6A21\u5F0F\u91CD\u590D
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 100px 20px 80px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
repeat \u3001 auto-fill

\u6309\u5BB9\u5668\u5BBD\u5EA6\u81EA\u52A8\u5217\uFF0C\u653E\u4E0D\u4E0B\u6362\u884C\u3002\u4F7F\u7528 auto-fill \u5173\u952E\u5B57\u3002
\u4E0B\u4F8B\u8868\u793A\uFF0C\u6BCF\u5217\u5BBD\u5EA6100px\uFF0C\u7136\u540E\u81EA\u52A8\u586B\u5145\uFF0C\u76F4\u5230\u5BB9\u5668\u4E0D\u80FD\u653E\u7F6E\u66F4\u591A\u7684\u5217\u3002
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
minmax

\u7B2C 3 \u680F\uFF0C\u6700\u5C0F 100px \u6700\u5927 1fr 
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr <span class="token function">minmax</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
auto \u9002\u5E94\u5269\u4E0B\u7684\u5BBD\u5EA6
 
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px auto 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u63A7\u5236\u95F4\u8DDD" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u95F4\u8DDD" aria-hidden="true">#</a> \u63A7\u5236\u95F4\u8DDD</h3><p>grid-row-gap \u3001 grid-column-gap \u3001 grid-gap</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u7B49\u4E8E */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 20px 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u7B49\u4E8E */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-row-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">grid-column-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u533A\u57DF-\u53EF\u5408\u5E76\u3001\u53EF\u6307\u5B9A\u9879\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u533A\u57DF-\u53EF\u5408\u5E76\u3001\u53EF\u6307\u5B9A\u9879\u4F4D\u7F6E" aria-hidden="true">#</a> \u533A\u57DF - \u53EF\u5408\u5E76\u3001\u53EF\u6307\u5B9A\u9879\u4F4D\u7F6E</h3><p>grid-template-areas \u5C5E\u6027</p><p>\u5982\u679C\u67D0\u4E9B\u533A\u57DF\u4E0D\u9700\u8981\u5229\u7528\uFF0C\u5219\u4F7F\u7528&quot;\u70B9&quot;\uFF08.\uFF09\u8868\u793A\u3002</p><p>\u4E0B\u4F8B\u503C <code>a a</code> \u8868\u793A\u5408\u5E76\u8FD9\u4E24\u4E2A\u5355\u5143\u683C</p><p>\u7ED3\u5408\u9879\u76EE\u5C5E\u6027 grid-area \u6307\u5B9A\u9879\u76EE\u653E\u7F6E\u4F4D\u7F6E</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
    <span class="token string">&#39;a a c&#39;</span>
    <span class="token string">&#39;d . f&#39;</span>
    <span class="token string">&#39;g . i&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u653E\u7F6E\u5728 g \u4F4D\u7F6E */</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> g<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E03\u5C40\u65B9\u5411-\u4ECE\u4E0A\u5F80\u4E0B\u8FD8\u662F\u4ECE\u5DE6\u5F80\u53F3" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C40\u65B9\u5411-\u4ECE\u4E0A\u5F80\u4E0B\u8FD8\u662F\u4ECE\u5DE6\u5F80\u53F3" aria-hidden="true">#</a> \u5E03\u5C40\u65B9\u5411 - \u4ECE\u4E0A\u5F80\u4E0B\u8FD8\u662F\u4ECE\u5DE6\u5F80\u53F3</h3><p><code>grid-auto-flow</code> \u5C5E\u6027\uFF0C\u53EF\u8BBE\u503C <code>column</code> \u6216 <code>row</code></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* 
\u503C column \uFF1A\u4ECE\u4E0A\u5F80\u4E0B\uFF0C\u7B2C1\u5217\u6EE1\u4E86\uFF0C\u518D\u6362\u7B2C2\u5217
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
\u503C row \uFF1A\u4ECE\u5DE6\u5F80\u53F3\uFF0C\u7B2C1\u884C\u6EE1\u4E86\uFF0C\u518D\u6362\u7B2C2\u884C
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
\u503C dense \uFF1A\u5C3D\u53EF\u80FD\u7D27\u5BC6\u586B\u6EE1\uFF0C\u4E0D\u51FA\u73B0\u7A7A\u683C
*/</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row dense<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5355\u5143\u683C\u5185\u5BB9\u6C34\u5E73\u5782\u76F4\u4F4D\u7F6E\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u683C\u5185\u5BB9\u6C34\u5E73\u5782\u76F4\u4F4D\u7F6E\u63A7\u5236" aria-hidden="true">#</a> \u5355\u5143\u683C\u5185\u5BB9\u6C34\u5E73\u5782\u76F4\u4F4D\u7F6E\u63A7\u5236</h3><ul><li>justify-items \u5C5E\u6027</li><li>align-items \u5C5E\u6027</li><li>place-items \u5C5E\u6027</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">justify-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6574\u4E2A-grid-\u6C34\u5E73\u5782\u76F4\u4F4D\u7F6E\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6574\u4E2A-grid-\u6C34\u5E73\u5782\u76F4\u4F4D\u7F6E\u63A7\u5236" aria-hidden="true">#</a> \u6574\u4E2A grid \u6C34\u5E73\u5782\u76F4\u4F4D\u7F6E\u63A7\u5236</h3><ul><li>justify-content \u5C5E\u6027</li><li>align-content \u5C5E\u6027</li><li>place-content \u5C5E\u6027</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> start | end | center | stretch | space-around | space-between | space-evenly<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> start | end | center | stretch | space-around | space-between | space-evenly<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u63A7\u5236\u5269\u4E0B\u7684\u884C\u6216\u5217" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5269\u4E0B\u7684\u884C\u6216\u5217" aria-hidden="true">#</a> \u63A7\u5236\u5269\u4E0B\u7684\u884C\u6216\u5217</h3><p>grid-auto-rows \u5C5E\u6027</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token comment">/* 3 \u884C 3 \u5217 */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>

  <span class="token comment">/* \u591A\u51FA\u7684\u884C\u90FD\u8BBE\u7F6E\u6210 50px \u9AD8 */</span>
  <span class="token property">grid-auto-rows</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7B80\u5199" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5199" aria-hidden="true">#</a> \u7B80\u5199</h3><ul><li>grid-template \u5C5E\u6027</li><li>grid \u5C5E\u6027</li></ul><p>grid-template \u5C5E\u6027\u662F grid-template-columns\u3001grid-template-rows \u548C grid-template-areas \u8FD9\u4E09\u4E2A\u5C5E\u6027\u7684\u5408\u5E76\u7B80\u5199\u5F62\u5F0F\u3002</p><p>grid \u5C5E\u6027\u662F grid-template-rows\u3001grid-template-columns\u3001grid-template-areas\u3001 grid-auto-rows\u3001grid-auto-columns\u3001grid-auto-flow \u8FD9\u516D\u4E2A\u5C5E\u6027\u7684\u5408\u5E76\u7B80\u5199\u5F62\u5F0F\u3002</p><p>\u4ECE\u6613\u8BFB\u6613\u5199\u7684\u89D2\u5EA6\u8003\u8651\uFF0C\u5EFA\u8BAE\u4E0D\u8981\u5408\u5E76\u5C5E\u6027</p><h2 id="\u9879\u76EE\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u5C5E\u6027" aria-hidden="true">#</a> \u9879\u76EE\u5C5E\u6027</h2><h3 id="\u533A\u57DF\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u533A\u57DF\u4F4D\u7F6E" aria-hidden="true">#</a> \u533A\u57DF\u4F4D\u7F6E</h3><p>grid-area \u5C5E\u6027\u3002\u7ED3\u5408 grid-template-areas \u4F7F\u7528</p><h3 id="\u9879\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9879\u4F4D\u7F6E" aria-hidden="true">#</a> \u9879\u4F4D\u7F6E</h3><ul><li>grid-column-start \u5C5E\u6027</li><li>grid-column-end \u5C5E\u6027</li><li>grid-row-start \u5C5E\u6027</li><li>grid-row-end \u5C5E\u6027</li></ul><p>\u53EF\u4F7F\u7528 grid-column \u3001grid-row \u5C5E\u6027\u7B80\u5199</p><h3 id="\u9879\u5185\u5BB9\u6C34\u5E73\u5782\u76F4\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9879\u5185\u5BB9\u6C34\u5E73\u5782\u76F4\u4F4D\u7F6E" aria-hidden="true">#</a> \u9879\u5185\u5BB9\u6C34\u5E73\u5782\u76F4\u4F4D\u7F6E</h3><ul><li>justify-self \u5C5E\u6027</li><li>align-self \u5C5E\u6027</li><li>place-self \u5C5E\u6027</li></ul><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,39),r={href:"https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html",target:"_blank",rel:"noopener noreferrer"};function u(v,m){const s=c("ExternalLinkIcon");return e(),i("div",null,[d,n("p",null,[n("a",r,[t("CSS Grid \u7F51\u683C\u5E03\u5C40\u6559\u7A0B - \u962E\u4E00\u5CF0\u7684\u7F51\u7EDC\u65E5\u5FD7"),p(s)])])])}const g=a(o,[["render",u],["__file","grid.html.vue"]]);export{g as default};
