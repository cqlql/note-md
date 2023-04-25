import{_ as r,Z as s,$ as i,a0 as e,a1 as t,Y as a,a2 as d,E as l}from"./framework-d33190a3.js";const o={},c=d(`<h2 id="加盐" tabindex="-1"><a class="header-anchor" href="#加盐" aria-hidden="true">#</a> 加盐</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
// SHA512 版
salt = md5(pwd) // md5 结果中的 1357 作为 salt
SHA512(SHA512(pwd) + salt[1]+salt[3]+salt[5]+salt[7])

// md5版
code = md5(pwd) // md5 结果中的 125 作为 salt
md5(code + code[1]+ code[2]+code[5])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 md5 加密就行了，没必要用 SHA512 ,性能好些，定好 salt 的规则，一般情况也够用</p><h2 id="token-jwt" tabindex="-1"><a class="header-anchor" href="#token-jwt" aria-hidden="true">#</a> token - JWT</h2><p>jwt + redis 实现时间有效性</p><p>时间有效性另一种实现方式。待验证</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>var payload = new Dictionary&lt;string, dynamic&gt;
{
{&quot;iss&quot;, M.iss},//非必须。issuer 请求实体，可以是发起请求的用户的信息，也可是jwt的签发者。
{&quot;iat&quot;, jwtcreated},//非必须。issued at。 token创建时间，unix时间戳格式
{&quot;exp&quot;, jwtcreatedOver},//非必须。expire 指定token的生命周期。unix时间戳格式
{&quot;aud&quot;, M.aud},//非必须。接收该JWT的一方。
{&quot;sub&quot;, M.sub},//非必须。该JWT所面向的用户
{&quot;jti&quot;, M.jti},//非必须。JWT ID。针对当前token的唯一标识
{&quot;UserId&quot;, M.UserId},//自定义字段 用于存放当前登录人账户信息
{&quot;UserName&quot;, M.UserName},//自定义字段 用于存放当前登录人账户信息
{&quot;UserPwd&quot;, M.UserPwd},//自定义字段 用于存放当前登录人登录密码信息
{&quot;UserRole&quot;, M.UserRole},//自定义字段 用于存放当前登录人登录权限信息
};
return JWT.JsonWebToken.Encode(payload, SecretKey,
JWT.JwtHashAlgorithm.HS256);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,8),u={href:"https://www.zhihu.com/question/20299384",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.php.cn/php-weizijiaocheng-105725.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.jianshu.com/p/576dbf44b2ae",target:"_blank",rel:"noopener noreferrer"},h={href:"https://cloud.tencent.com/developer/article/1460770",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.cnblogs.com/ckfuture/p/14516741.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://zhuanlan.zhihu.com/p/66037342",target:"_blank",rel:"noopener noreferrer"};function _(w,f){const n=l("ExternalLinkIcon");return s(),i("div",null,[c,e("p",null,[e("a",u,[t("加盐密码保存的最通用方法是？"),a(n)])]),e("p",null,[e("a",v,[t("Bcrypt 加密速度慢是否是鸡肋？"),a(n)])]),e("p",null,[e("a",m,[t("什么是 JWT -- JSON WEB TOKEN"),a(n)])]),e("p",null,[e("a",h,[t("JWT、JWS、JWE 的区别"),a(n)])]),e("p",null,[e("a",p,[t("C# 实现 Token"),a(n)])]),e("p",null,[e("a",b,[t("什么是单点登录（SSO）"),a(n)])])])}const g=r(o,[["render",_],["__file","登录 JWT.html.vue"]]);export{g as default};
