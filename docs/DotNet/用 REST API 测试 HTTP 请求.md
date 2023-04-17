## 使用上个请求返回结果作为请求参数

这是一个实现 token 请求的例子。创建 example.http 文件，其中`{{login.response.body.data.token}}`获取的是上一个请求的返回的结果

```
# @name login
POST https://uc.youzhuanla.com/login HTTP/2
content-type: application/json
{
  "username":"chenqiaoli",
  "password":"lmm789",
  "company_name":"1"
}

###
@authToken = {{login.response.body.data.token}}
https://uc.youzhuanla.com/online/get?pagenum=10&page=1
authorization: Bearer {{authToken}}
```

## 参考文档

[REST 客户端 - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

[VSCode 的 REST Client 指南，超好用的 HTTP 客户端工具 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/382740857)
