import{_ as n,Z as s,$ as a,a2 as e}from"./framework-d33190a3.js";const i={},l=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新软件源头</span>
<span class="token function">apt</span> update

<span class="token comment"># 显示可升级的软件包</span>
<span class="token function">apt</span> list <span class="token parameter variable">--upgradeable</span>

<span class="token comment"># 显示已安装的软件包</span>
<span class="token function">apt</span> list <span class="token parameter variable">--installed</span>

<span class="token comment"># 升级所有已安装软件</span>
<span class="token function">apt</span> upgrade

<span class="token comment"># 安装指定软件 ( -f 修复依赖关系)</span>
<span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-f</span> mysql-server

<span class="token comment"># 删除已安装软件包</span>
<span class="token function">apt</span> remove mysql-server

<span class="token comment"># 自动清理不再使用的依赖和库文件</span>
<span class="token function">apt</span> autoremove

<span class="token comment"># 显示已安装软件包信息（版本号，安装大小，依赖关系，bug报告等等）</span>
<span class="token function">apt</span> show mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[l];function t(d,p){return s(),a("div",null,c)}const v=n(i,[["render",t],["__file","apt 包管理.html.vue"]]);export{v as default};
