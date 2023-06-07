## 不需要在服务的存储

## 需要安装的包

```sh
dotnet add package Microsoft.IdentityModel.Tokens
dotnet add package System.IdentityModel.Tokens.Jwt
```

## 生成 JWT

注意 "your_secret_key_here" 不能太短，否则报错

```cs

using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("your_secret_key_here..your_secret_key_here"));
var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

var claims = new[]
{
    new Claim("user_id", "123"),
    new Claim("username", "john_doe")
};

var token = new JwtSecurityToken(
    issuer: "your_issuer_here",
    audience: "your_audience_here",
    claims: claims,
    expires: DateTime.UtcNow.AddHours(1),
    signingCredentials: signingCredentials
);

var jwtToken = new JwtSecurityTokenHandler().WriteToken(token);

```
