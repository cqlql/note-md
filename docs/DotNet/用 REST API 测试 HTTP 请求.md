


更多信息请看文档：[REST 客户端 - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)


## 使用变量实现 token 请求的例子

example.http 文件

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
