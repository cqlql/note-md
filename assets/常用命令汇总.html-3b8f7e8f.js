import{_ as s,Z as t,$ as i,a0 as n,a1 as e,Y as l,a2 as r,E as o}from"./framework-d33190a3.js";const c={},d=n("h2",{id:"进程、端口",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#进程、端口","aria-hidden":"true"},"#"),e(" 进程、端口")],-1),p={href:"https://www.cnblogs.com/liuzhengliang/p/4609632.html",target:"_blank",rel:"noopener noreferrer"},u=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看进程，过滤 ssserver 关键字</span>
<span class="token function">ps</span> <span class="token parameter variable">-aux</span> <span class="token operator">|</span> <span class="token function">grep</span> ssserver

<span class="token comment"># 查看端口，过滤 27017 的端口</span>
<span class="token function">netstat</span> <span class="token parameter variable">-lanp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;27017&quot;</span>

<span class="token comment"># 结束进程。1001 为 pid</span>
<span class="token function">kill</span> <span class="token number">1001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 netstat 命令需要安装 <code>net-tools</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="tar-解压缩" tabindex="-1"><a class="header-anchor" href="#tar-解压缩" aria-hidden="true">#</a> tar 解压缩</h2><p>不同的文件类型参数不同</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>xz -d node-v10.15.3.tar.xz
tar -xvf node-v10.15.3.tar
tar -xzvf node-v10.15.3.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(m,h){const a=o("ExternalLinkIcon");return t(),i("div",null,[d,n("p",null,[n("a",p,[e("Linux 查看端口、进程情况及 kill 进程"),l(a)])]),u])}const _=s(c,[["render",v],["__file","常用命令汇总.html.vue"]]);export{_ as default};
