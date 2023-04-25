import{_ as i,Z as l,$ as r,a0 as e,a1 as n,Y as s,a2 as t,E as c}from"./framework-d33190a3.js";const d={},o={class:"hint-container warning"},p=e("p",{class:"hint-container-title"},"注意",-1),u={href:"https://zhuanlan.zhihu.com/p/74906615",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="方式1-通过-vm-虚拟机软件安装" tabindex="-1"><a class="header-anchor" href="#方式1-通过-vm-虚拟机软件安装" aria-hidden="true">#</a> 方式1：通过 VM 虚拟机软件安装</h2><p>此方式模拟真实硬件设备，最为保险的方式</p><h2 id="方式2-直接安装-linux-子系统-wslg-wsl2-命令方式" tabindex="-1"><a class="header-anchor" href="#方式2-直接安装-linux-子系统-wslg-wsl2-命令方式" aria-hidden="true">#</a> 方式2：直接安装 linux 子系统 WSLG(WSL2) - 命令方式</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#设置WSL的版本为WSL2</span>
wsl --set-default-version <span class="token number">2</span>

<span class="token comment"># 更新 wsl，确保 wsl 是最新的</span>
wsl <span class="token parameter variable">--update</span>
<span class="token comment"># 安装wslg</span>
wsl <span class="token parameter variable">--install</span>

<span class="token comment"># 列出可安装的linux版本</span>
wsl <span class="token parameter variable">--list</span> <span class="token parameter variable">--online</span>

<span class="token comment"># 开始安装</span>
wsl <span class="token parameter variable">--install</span> <span class="token parameter variable">-d</span> Ubuntu-20.04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重置-图形化操作" tabindex="-1"><a class="header-anchor" href="#重置-图形化操作" aria-hidden="true">#</a> 重置 - 图形化操作</h3><p>进入 win11 <code>设置</code>，依次进入 <code>应用 -&gt; 应用和功能</code>，找到 <code>Ubuntu 应用</code>，进入<code>应用属性</code>，点击<code>重置按钮</code>进行重置</p><h3 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h3>`,7),m={href:"https://www.cnblogs.com/guojikun/p/15092696.html",target:"_blank",rel:"noopener noreferrer"};function v(_,b){const a=c("ExternalLinkIcon");return l(),r("div",null,[e("div",o,[p,e("p",null,[n("以下两种方式都需要 "),e("a",u,[n("安装 Hyper-V"),s(a)])])]),h,e("p",null,[e("a",m,[n("win11 家庭版 linux 子系统安装"),s(a)])])])}const k=i(d,[["render",v],["__file","win11 家庭版下安装 linux.html.vue"]]);export{k as default};
