import{_ as c,Z as t,$ as r,a0 as e,a1 as a,Y as s,a2 as l,E as i}from"./framework-d33190a3.js";const o={},d=l(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>使用命令安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># latest 将安装最新版，还可以安装其他的 tag</span>
<span class="token function">docker</span> pull mysql:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=e("strong",null,"查找其他 tag",-1),m={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},u=l(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>进入 mysql 容器环境</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 创建 mysql 容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> some-mysql <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123123</span> <span class="token parameter variable">-d</span> mysql:latest

<span class="token comment"># 列出 mysql 容器 id</span>
<span class="token comment"># 此命令会列出正在运行的容器ID</span>
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># 进入容器，相当于是一个linux系统</span>
<span class="token comment"># 其中 289cc00dc5ed 为 mysql 容器 id</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 289cc00dc5ed <span class="token function">bash</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,4),v={href:"https://hub.docker.com/_/mysql",target:"_blank",rel:"noopener noreferrer"};function h(b,k){const n=i("ExternalLinkIcon");return t(),r("div",null,[d,e("p",null,[p,a("：去 "),e("a",m,[a("线上仓库"),s(n)]),a(" 搜索 mysql，查看可用 tag。注意 OFFICIAL 标签表示这是官方镜像。")]),u,e("p",null,[e("a",v,[a("mysql - Official Image"),s(n)])])])}const f=c(o,[["render",h],["__file","02_docker 环境.html.vue"]]);export{f as default};
