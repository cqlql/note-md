import{_ as c,Z as d,$ as l,a0 as t,Y as a,a3 as r,a1 as e,a2 as h,E as n}from"./framework-d33190a3.js";const i={},_=t("h2",{id:"首先需要-efcore-mysql-环境",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#首先需要-efcore-mysql-环境","aria-hidden":"true"},"#"),e(" 首先需要 EFCore mysql 环境")],-1),E=h('<h2 id="新建模型" tabindex="-1"><a class="header-anchor" href="#新建模型" aria-hidden="true">#</a> 新建模型</h2><p><a href="/DotNet/EF%20Core/Model%20%E7%89%B9%E6%80%A7%E6%B3%A8%E8%A7%A3">如何新建模型？</a></p><p>模型按约定将映射到具体的表。</p><p>对无法映射的表字段还可以使用特性注解。</p><h2 id="继承-dbcontext-类" tabindex="-1"><a class="header-anchor" href="#继承-dbcontext-类" aria-hidden="true">#</a> 继承 DbContext 类</h2><p>相当于映射某个数据库了。如何继承？见 <a href="/DotNet/EF%20Core/DbContext%20%E9%85%8D%E7%BD%AE">DbContext 配置</a></p>',6),p={href:"https://www.cnblogs.com/dotnet261010/p/12359695.html",target:"_blank",rel:"noopener noreferrer"},f=t("p",null,"还可以在这里使用 fluent api 对模型中的注解特性进行代替或者补充。",-1),u=t("h2",{id:"路由控制器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#路由控制器","aria-hidden":"true"},"#"),e(" 路由控制器")],-1),m=t("h2",{id:"数据库操作-crud",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#数据库操作-crud","aria-hidden":"true"},"#"),e(" 数据库操作 CRUD")],-1);function x(C,b){const o=n("RouterLink"),s=n("ExternalLinkIcon");return d(),l("div",null,[_,t("p",null,[a(o,{to:"/DotNet/EF%20Core/mysql%20%E7%8E%AF%E5%A2%83.html"},{default:r(()=>[e("EFCore mysql 环境安装")]),_:1})]),E,t("p",null,[e("这里涉及到"),a(o,{to:"/DotNet/EF%20Core/%E8%BF%9E%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:r(()=>[e("连接字符串如何存放")]),_:1}),e("更好。")]),t("p",null,[e("可进行"),t("a",p,[e("数据播种"),a(s)]),e("。 数据播种不能单纯为“可以实现如果没有数据，将填充一个初始数据”，涉及到数据迁移。目前还有很多细节不清楚，等有时间了再来学习。")]),f,u,m,t("p",null,[e("对数据库的增删改查，详见"),a(o,{to:"/DotNet/EF%20Core/CRUD%20%E5%A2%9E%E5%88%A0%E6%94%B9%E6%9F%A5.html"},{default:r(()=>[e("CRUD 数据库增删改查")]),_:1})])])}const D=c(i,[["render",x],["__file","webapi_mysql_efcore.html.vue"]]);export{D as default};
