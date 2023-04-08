import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,a as n,b as e,e as a,c as r,f as o,r as s}from"./app.963105e9.js";const c={},d=o('<h2 id="\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#\u7406\u89E3" aria-hidden="true">#</a> \u7406\u89E3</h2><p>ORM \u662F Object Relation Mapping \u7B80\u79F0\uFF0C\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04\uFF0C\u5C06\u6570\u636E\u5E93\u6620\u5C04\u4E3A\u5B9E\u4F53\u7C7B\uFF0C\u50CF\u5BF9\u8C61\u4E00\u6837\u64CD\u4F5C\u6570\u636E\u5E93</p><p>dataset \u4F1A\u5C06\u6570\u636E\u52A0\u8F7D\u5230\u5185\u5B58</p><p>DataAdapter \u64CD\u4F5C\u5185\u5B58\u4E2D\u7684\u6570\u636E\uFF0C\u9700\u8981\u5728\u5185\u5B58\u4E2D\u7F13\u5B58\u6570\u636E\u65F6\u4F7F\u7528</p><p>ado.net \u66F4\u5E95\u5C42\uFF0CEF core \u662F ado.net \u9AD8\u7EA7\u5C01\u88C5\uFF0C \u50CF\u5BF9\u8C61\u4E00\u6837\u64CD\u4F5C\u6570\u636E\u5E93\uFF0C\u800C\u65E0\u9700\u81EA\u5DF1\u7F16\u5199 sql \u8BED\u53E5</p><h2 id="sql\u8BED\u53E5\u8981\u7B80\u5355" tabindex="-1"><a class="header-anchor" href="#sql\u8BED\u53E5\u8981\u7B80\u5355" aria-hidden="true">#</a> sql\u8BED\u53E5\u8981\u7B80\u5355</h2><p>\u4E0D\u8981\u5305\u542B\u4E1A\u52A1\u903B\u8F91</p><ul><li>\u4FBF\u8FC1\u79FB</li><li>\u4FBF\u4FEE\u6539</li><li>\u4FBF\u7406\u89E3</li><li>\u5B81\u591A\u67E5\u6B21\u5E93\uFF0C\u4E5F\u6700\u597D\u4E0D\u505A\u5173\u8054\u67E5\u3002</li></ul><h2 id="\u4E8B\u52A1\u7684\u56DB\u4E2A\u7279\u6027-acid-\u3010\u9762\u8BD5\u5E38\u8003\u9879\u3011" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1\u7684\u56DB\u4E2A\u7279\u6027-acid-\u3010\u9762\u8BD5\u5E38\u8003\u9879\u3011" aria-hidden="true">#</a> \u4E8B\u52A1\u7684\u56DB\u4E2A\u7279\u6027(ACID)\u3010\u9762\u8BD5\u5E38\u8003\u9879\u3011</h2><ol><li>\u539F\u5B50\u6027\uFF08Atomicity\uFF09\uFF1A\u6307\u4E8B\u52A1\u662F\u4E00\u4E2A\u4E0D\u53EF\u5206\u5272\u7684\u6700\u5C0F\u5DE5\u4F5C\u5355\u4F4D\uFF0C\u4E8B\u52A1\u4E2D\u7684\u64CD\u4F5C\u53EA\u6709\u90FD\u53D1\u751F\u548C\u90FD\u4E0D\u53D1\u751F\u4E24\u79CD\u60C5\u51B5</li><li>\u4E00\u81F4\u6027\uFF08Consistency\uFF09\uFF1A\u4E8B\u52A1\u5FC5\u987B\u4F7F\u6570\u636E\u5E93\u4ECE\u4E00\u4E2A\u4E00\u81F4\u72B6\u6001\u53D8\u6362\u5230\u53E6\u5916\u4E00\u4E2A\u4E00\u81F4\u72B6\u6001\uFF0C\u4E3E\u4E00\u4E2A\u6817\u5B50\uFF0C\u674E\u4E8C\u7ED9\u738B\u4E94\u8F6C\u8D2650\u5143\uFF0C\u5176\u4E8B\u52A1\u5C31\u662F\u8BA9\u674E\u4E8C\u8D26\u6237\u4E0A\u51CF\u53BB50\u5143\uFF0C\u738B\u4E94\u8D26\u6237\u4E0A\u52A0\u4E0A50\u5143\uFF1B\u4E00\u81F4\u6027\u662F\u6307\u5176\u4ED6\u4E8B\u52A1\u770B\u5230\u7684\u60C5\u51B5\u662F\u8981\u4E48\u674E\u4E8C\u8FD8\u6CA1\u6709\u7ED9\u738B\u4E94\u8F6C\u8D26\u7684\u72B6\u6001\uFF0C\u8981\u4E48\u738B\u4E94\u5DF2\u7ECF\u6210\u529F\u63A5\u6536\u5230\u674E\u4E8C\u768450\u5143\u8F6C\u8D26\u3002\u800C\u5BF9\u4E8E\u674E\u4E8C\u5C11\u4E8650\u5143\uFF0C\u738B\u4E94\u8FD8\u6CA1\u52A0\u4E0A50\u5143\u8FD9\u4E2A\u4E2D\u95F4\u72B6\u6001\u662F\u4E0D\u53EF\u89C1\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5176\u4ED6\u4E8B\u52A1\u770B\u5230\u7684\u6570\u636E\u5173\u7CFB\u662F\u6B63\u786E\u7684\uFF0C\u4E0D\u5B58\u5728\u77DB\u76FE\u3002</li><li>\u9694\u79BB\u6027\uFF08Isolation\uFF09\uFF1A\u4E00\u4E2A\u4E8B\u52A1\u7684\u6267\u884C\u4E0D\u80FD\u88AB\u5176\u4ED6\u4E8B\u52A1\u5E72\u6270\uFF0C\u5373\u4E00\u4E2A\u4E8B\u52A1\u5185\u90E8\u7684\u64CD\u4F5C\u53CA\u4F7F\u7528\u7684\u6570\u636E\u5BF9\u5E76\u53D1\u7684\u5176\u4ED6\u4E8B\u52A1\u662F\u9694\u79BB\u7684\uFF0C\u5E76\u53D1\u6267\u884C\u7684\u5404\u4E2A\u4E8B\u52A1\u4E4B\u95F4\u4E0D\u80FD\u4E92\u76F8\u5E72\u6270\u3002\u6700\u4FDD\u9669\u7684\u65B9\u5F0F\u5C31\u662F\u4E32\u884C\u6267\u884C\uFF0C\u4F46\u4F1A\u963B\u585E\u5176\u4ED6\u4E8B\u52A1\u6267\u884C\uFF0C\u6548\u7387\u4F4E\uFF0C\u6240\u4EE5sql\u6807\u51C6\u505A\u51FA\u4E86\u59A5\u534F\uFF0C\u63D0\u51FA\u4E864\u4E2A\u9694\u79BB\u7EA7\u522B\uFF0C\u53EA\u6709\u6700\u9AD8\u7EA7\u522B\u624D\u662F\u4E32\u884C\u6267\u884C\u3002</li><li>\u6301\u4E45\u6027\uFF08Durability\uFF09\uFF1A\u4E00\u4E2A\u4E8B\u52A1\u4E00\u65E6\u63D0\u4EA4\u6210\u529F\uFF0C\u5B83\u5BF9\u6570\u636E\u5E93\u4E2D\u6570\u636E\u7684\u6539\u53D8\u5C06\u662F\u6C38\u4E45\u6027\u7684\uFF0C\u63A5\u4E0B\u6765\u7684\u5176\u4ED6\u64CD\u4F5C\u6216\u6545\u969C\u4E0D\u5E94\u5BF9\u5176\u6709\u4EFB\u4F55\u5F71\u54CD\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E8B\u52A1\u7684\u7ED3\u675F\u5FC5\u987B\u4FDD\u8BC1\u6570\u636E\u5DF2\u7ECF\u4FDD\u5B58\u5230\u6570\u636E\u5E93\u4E2D\u3002</li></ol>',10),h={href:"https://blog.csdn.net/qq_56880706/article/details/122653735",target:"_blank",rel:"noopener noreferrer"};function p(_,f){const t=s("ExternalLinkIcon");return l(),n("div",null,[d,e("p",null,[a("\u53C2\u8003\u6587\u6863 "),e("a",h,[a("MySQL\u4E8B\u52A1(transaction)"),r(t)])])])}const q=i(c,[["render",p],["__file","mysql \u4E34\u65F6.html.vue"]]);export{q as default};
