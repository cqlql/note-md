import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as c,a as i,b as n,c as p,F as l,f as a,e as s}from"./app.18530927.js";const r={},u=a('<ul><li><a href="#%E5%B8%B8%E7%94%A8">\u5E38\u7528</a><ul><li><a href="#chainwebpack-%E4%BD%BF%E7%94%A8">chainWebpack \u4F7F\u7528</a></li><li><a href="#%E6%8B%86%E5%88%86%E5%8C%85">\u62C6\u5206\u5305</a></li><li><a href="#%E5%8E%8B%E7%BC%A9">\u538B\u7F29</a><ul><li><a href="#%E6%8E%A7%E5%88%B6-html-webpack-plugin-%E5%8E%8B%E7%BC%A9">\u63A7\u5236 html-webpack-plugin \u538B\u7F29</a></li><li><a href="#webpage-%E5%8E%8B%E7%BC%A9">webpage \u538B\u7F29</a></li><li><a href="#vue-cli-%E9%BB%98%E8%AE%A4%E7%9A%84%E5%8E%8B%E7%BC%A9%E9%85%8D%E7%BD%AE">vue-cli \u9ED8\u8BA4\u7684\u538B\u7F29\u914D\u7F6E</a></li></ul></li><li><a href="#vuebabel-%E6%9C%89%E9%BB%98%E8%AE%A4%E7%9A%84-polyfills">@vue/babel \u6709\u9ED8\u8BA4\u7684 Polyfills</a></li><li><a href="#chain-webpack-%E4%BD%BF%E7%94%A8">chain webpack \u4F7F\u7528</a></li><li><a href="#%E7%9B%B4%E6%8E%A5%E4%BF%AE%E6%94%B9-webpack">\u76F4\u63A5\u4FEE\u6539 webpack</a></li><li><a href="#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">\u73AF\u5883\u53D8\u91CF</a></li><li><a href="#html-webpack-plugin">html-webpack-plugin</a></li><li><a href="#js-css-%E5%8C%85%E5%90%AB%E8%BF%9B-html">js css \u5305\u542B\u8FDB html</a></li><li><a href="#%E6%8F%90%E5%8F%96-css">\u63D0\u53D6 css</a></li><li><a href="#%E5%8E%BB%E6%8E%89-console-debugger">\u53BB\u6389 console debugger</a></li><li><a href="#%E5%8E%BB%E6%8E%89-eslintts-%E6%A3%80%E6%9F%A5">\u53BB\u6389 eslint\u3001ts \u68C0\u67E5</a></li></ul></li></ul><h1 id="\u5E38\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528" aria-hidden="true">#</a> \u5E38\u7528</h1><h2 id="chainwebpack-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#chainwebpack-\u4F7F\u7528" aria-hidden="true">#</a> chainWebpack \u4F7F\u7528</h2>',3),d={href:"https://github.com/neutrinojs/webpack-chain/tree/v4",target:"_blank",rel:"noopener noreferrer"},k=s("\u8BBF\u95EE chainWebpack \u6587\u6863"),v=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5220\u9664\u63D2\u4EF6</span>
config<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;eslint&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u62C6\u5206\u5305" tabindex="-1"><a class="header-anchor" href="#\u62C6\u5206\u5305" aria-hidden="true">#</a> \u62C6\u5206\u5305</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9ED8\u8BA4\u914D\u7F6E</span>
webpackConfig<span class="token punctuation">.</span>optimization<span class="token punctuation">.</span><span class="token function">splitChunks</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">vendors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">chunk-vendors</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;initial&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">common</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">chunk-common</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;initial&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">reuseExistingChunk</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u53BB\u6389\u9ED8\u8BA4</span>
webpackConfig<span class="token punctuation">.</span>optimization<span class="token punctuation">.</span><span class="token function">splitChunks</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u538B\u7F29" aria-hidden="true">#</a> \u538B\u7F29</h2>`,4),m={id:"\u63A7\u5236-html-webpack-plugin-\u538B\u7F29",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#\u63A7\u5236-html-webpack-plugin-\u538B\u7F29","aria-hidden":"true"},"#",-1),h=s(" \u63A7\u5236 "),g={href:"https://www.npmjs.com/package/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},f=s("html-webpack-plugin"),y=s(" \u538B\u7F29"),_=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">chainWebpack</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> arg <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      arg<span class="token punctuation">.</span>minify <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5220\u9664\u6CE8\u91CA</span>
        <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5220\u9664\u7A7A\u683C\u548C\u6362\u884C</span>
        <span class="token literal-property property">removeAttributeQuotes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5220\u9664\u5C5E\u6027\u503C\u7684\u5F15\u53F7</span>
        <span class="token comment">// \u5185\u5D4C css js \u538B\u7F29, \u7ED3\u5408 HtmlWebpackInlineSourcePlugin \u53EF\u80FD\u4F1A\u538B\u7F292\u6B21\uFF0C\u975E\u5FC5\u8981\u8FD8\u662F\u4E0D\u8981\u8BBE\u4E86</span>
        <span class="token comment">// minifyCSS: true,</span>
        <span class="token comment">// minifyJS: true</span>

        <span class="token comment">// more options:</span>
        <span class="token comment">// https://github.com/kangax/html-minifier#options-quick-reference</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> args
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpage-\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#webpage-\u538B\u7F29" aria-hidden="true">#</a> webpage \u538B\u7F29</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">chainWebpack</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7981\u7528</span>
    config<span class="token punctuation">.</span>optimization<span class="token punctuation">.</span><span class="token function">minimize</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-cli-\u9ED8\u8BA4\u7684\u538B\u7F29\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#vue-cli-\u9ED8\u8BA4\u7684\u538B\u7F29\u914D\u7F6E" aria-hidden="true">#</a> vue-cli \u9ED8\u8BA4\u7684\u538B\u7F29\u914D\u7F6E</h3><p>\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\uFF1A@vue/cli-service/lib/config/terserOptions.js</p><p>\u5176\u4E2D switches \u8BBE\u4E3A\u4E86 false\uFF0C\u4E5F\u5C31\u662F switch \u4E0D\u4F1A\u5220\u6389\u4E0D\u4F1A\u6267\u884C\u7684\u9879\uFF0C\u6240\u4EE5\u9ED8\u8BA4\u60C5\u51B5\u4E0D\u8981\u7528 switch \u5904\u7406 p<wbr>rocess.env\u3002\u5B98\u65B9\u7684\u8BF4\u6CD5\u662F\u63D0\u5347\u538B\u7F29\u901F\u5EA6</p>`,6),E=s("\u538B\u7F29\u9009\u9879\u7684\u5177\u4F53\u89E3\u91CA\u67E5\u770B "),x={href:"https://github.com/terser/terser",target:"_blank",rel:"noopener noreferrer"},j=s("terser \u5B98\u65B9\u6587\u6863"),w=a(`<p><strong>\u53EF\u901A\u8FC7\u4E00\u4E0B\u914D\u7F6E\u5F00\u542F switches</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">chainWebpack</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>optimization<span class="token punctuation">.</span><span class="token function">minimizer</span><span class="token punctuation">(</span><span class="token string">&#39;terser&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5F00\u542F switch \u538B\u7F29\u68C0\u6D4B\uFF0C \u5C06\u5220\u9664\u4E0D\u4F1A\u6267\u884C\u9879</span>
      args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>terserOptions<span class="token punctuation">.</span>compress<span class="token punctuation">.</span>switches <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token keyword">return</span> args
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-babel-\u6709\u9ED8\u8BA4\u7684-polyfills" tabindex="-1"><a class="header-anchor" href="#vue-babel-\u6709\u9ED8\u8BA4\u7684-polyfills" aria-hidden="true">#</a> @vue/babel \u6709\u9ED8\u8BA4\u7684 Polyfills</h2><p>\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84 @vue/babel-preset-app/index.js\u3002\u53EF\u4EE5\u770B\u5230\u5982\u4E0B Polyfills \u5C06\u56FA\u5B9A\u5BFC\u5165\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> defaultPolyfills <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// promise polyfill alone doesn&#39;t work in IE,</span>
  <span class="token comment">// needs this as well. see: #1642</span>
  <span class="token string">&#39;es.array.iterator&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// this is required for webpack code splitting, vuex etc.</span>
  <span class="token string">&#39;es.promise&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// this is needed for object rest spread support in templates</span>
  <span class="token comment">// as vue-template-es2015-compiler 1.8+ compiles it to Object.assign() calls.</span>
  <span class="token string">&#39;es.object.assign&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// #2012 es.promise replaces native Promise in FF and causes missing finally</span>
  <span class="token string">&#39;es.promise.finally&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u53EF\u901A\u8FC7\u4EE5\u4E0B\u914D\u7F6E\u53BB\u6389</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// babel.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;@vue/cli-plugin-babel/preset&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">polyfills</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u53BB\u6389\u9ED8\u8BA4 polyfills</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chain-webpack-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#chain-webpack-\u4F7F\u7528" aria-hidden="true">#</a> chain webpack \u4F7F\u7528</h2>`,8),B={href:"https://github.com/neutrinojs/webpack-chain/tree/v5",target:"_blank",rel:"noopener noreferrer"},A=s("chainWebpack \u6587\u6863"),F=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8BBE\u7F6E output</span>
config<span class="token punctuation">.</span>output<span class="token punctuation">.</span><span class="token function">pathinfo</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>

<span class="token comment">// \u5220\u9664 entry key</span>
config<span class="token punctuation">.</span>entryPoints<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u65B0\u589Ewebpack\u63D2\u4EF6</span>
<span class="token comment">// https://github.com/neutrinojs/webpack-chain/tree/v5#config-plugins-adding</span>
config<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>WebpackPlugin<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u76F4\u63A5\u4FEE\u6539-webpack" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u4FEE\u6539-webpack" aria-hidden="true">#</a> \u76F4\u63A5\u4FEE\u6539 webpack</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">pathinfo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF</h2>`,4),C={href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",target:"_blank",rel:"noopener noreferrer"},W=s("\u5B98\u65B9\u6587\u6863: \u73AF\u5883\u53D8\u91CF"),z=a(`<p>vue-cli \u63D0\u4F9B\u66F4\u65B9\u4FBF\u7684\u65B9\u5F0F\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF</p><p>\u901A\u8FC7\u9879\u76EE\u6839\u76EE\u5F55\u6DFB\u52A0\u4E0B\u5217\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>.env                <span class="token comment"># \u5728\u6240\u6709\u7684\u73AF\u5883\u4E2D\u88AB\u8F7D\u5165</span>
.env.local          <span class="token comment"># \u5728\u6240\u6709\u7684\u73AF\u5883\u4E2D\u88AB\u8F7D\u5165\uFF0C\u4F46\u4F1A\u88AB git \u5FFD\u7565</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>         <span class="token comment"># \u53EA\u5728\u6307\u5B9A\u7684\u6A21\u5F0F\u4E2D\u88AB\u8F7D\u5165</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>.local   <span class="token comment"># \u53EA\u5728\u6307\u5B9A\u7684\u6A21\u5F0F\u4E2D\u88AB\u8F7D\u5165\uFF0C\u4F46\u4F1A\u88AB git \u5FFD\u7565</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#html-webpack-plugin" aria-hidden="true">#</a> html-webpack-plugin</h2><h2 id="js-css-\u5305\u542B\u8FDB-html" tabindex="-1"><a class="header-anchor" href="#js-css-\u5305\u542B\u8FDB-html" aria-hidden="true">#</a> js css \u5305\u542B\u8FDB html</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> HTMLInlinePlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./build/html-inline-chunk-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">chainWebpack</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> arg <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      arg<span class="token punctuation">.</span>inlineSource <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js|\\.css</span><span class="token regex-delimiter">/</span></span>
      arg<span class="token punctuation">.</span>scriptLoading <span class="token operator">=</span> <span class="token string">&#39;blocking&#39;</span>
      <span class="token keyword">return</span> args
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    config<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">&#39;html-inline&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>HTMLInlinePlugin<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63D0\u53D6-css" tabindex="-1"><a class="header-anchor" href="#\u63D0\u53D6-css" aria-hidden="true">#</a> \u63D0\u53D6 css</h2>`,7),P={href:"https://cli.vuejs.org/zh/config/#css-extract",target:"_blank",rel:"noopener noreferrer"},D=s("\u5B98\u65B9\u6587\u6863 - css-extract"),I=a(`<p>vue.config.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Default: \u751F\u4EA7\u73AF\u5883\u4E0B\u662F true\uFF0C\u5F00\u53D1\u73AF\u5883\u4E0B\u662F false</span>
    <span class="token literal-property property">extract</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53BB\u6389-console-debugger" tabindex="-1"><a class="header-anchor" href="#\u53BB\u6389-console-debugger" aria-hidden="true">#</a> \u53BB\u6389 console debugger</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53BB\u6389 console debugger</span>
      <span class="token keyword">let</span> <span class="token punctuation">{</span> options <span class="token punctuation">}</span> <span class="token operator">=</span> config<span class="token punctuation">.</span>optimization<span class="token punctuation">.</span>minimizer<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>minimizer
      options<span class="token punctuation">.</span>compress <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>options<span class="token punctuation">.</span>compress<span class="token punctuation">,</span>
        <span class="token literal-property property">drop_debugger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06\u5220\u9664\u6240\u6709 console.*</span>
        <span class="token literal-property property">pure_funcs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;console.log&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u53EA\u5220\u9664  console.log</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53BB\u6389-eslint\u3001ts-\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u53BB\u6389-eslint\u3001ts-\u68C0\u67E5" aria-hidden="true">#</a> \u53BB\u6389 eslint\u3001ts \u68C0\u67E5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span><span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;fork-ts-checker&#39;</span><span class="token punctuation">)</span>
    config<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;eslint&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function N(S,L){const e=o("ExternalLinkIcon");return c(),i(l,null,[u,n("p",null,[n("a",d,[k,p(e)])]),v,n("h3",m,[b,h,n("a",g,[f,p(e)]),y]),_,n("p",null,[E,n("a",x,[j,p(e)])]),w,n("p",null,[n("a",B,[A,p(e)])]),F,n("p",null,[n("a",C,[W,p(e)])]),z,n("p",null,[n("a",P,[D,p(e)])]),I],64)}var q=t(r,[["render",N],["__file","\u5E38\u7528.html.vue"]]);export{q as default};
