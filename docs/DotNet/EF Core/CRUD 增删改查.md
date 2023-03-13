## 增

```cs
[ApiController]
[Route("api/[controller]")]
[Produces("application/json")]
public class UserController : ControllerBase
{
  private readonly ILogger<UserController> _logger;
  private readonly UserManageDbContext _db;
  public UserController(UserManageDbContext db, ILogger<UserController> logger)
  {
    _db = db;
    _logger = logger;
  }

  // 增
  [HttpPost("Add")]
  public APIResult<object> Add(User user)
  {
    // mark product as added in change tracking
    _db.Add(user);
    // save tracked changes to database
    int affected = _db.SaveChanges();

    if (affected == 1)
    {
      return APIResult.Ok();
    }
    return APIResult.Error<object>("新增失败");
  }
}
```

post 请求示例

```
POST https://localhost:7085/api/User/Add

content-type: application/json
{
  "username": "joly1",
  "password": "123123"
}
```

## 改

直接使用完整的实例实现修改

```cs
[HttpPost("Update")]
public APIResult<object> Update(User user)
{
  _db.Update(user);

  // save tracked changes to database 
  int affected = _db.SaveChanges();

  if (affected == 1)
  {
    return APIResult.Ok("修改成功");
  }
  return APIResult.Error("修改失败");
}
```

修改指定的属性

```cs
[HttpPost("UpdatePassword")]
public APIResult<object> UpdatePassword(User user)
{
  SharpPad.Output.DumpBlocking(user);
  
  // get first user whose name starts with name
  User updateUser = _db.User!.First(u => u.id == user.id);
  updateUser.password = user.password;

  // save tracked changes to database 
  int affected = _db.SaveChanges();

  if (affected == 1)
  {
    return APIResult.Ok("修改成功");
  }

  return APIResult.Error("修改失败");
}
```

post 请求示例

```

### 修改整个对象
POST https://localhost:7085/api/User/update

content-type: application/json

{
  "id":"1",
  "username": "joly1",
  "password": "123123"
}

### 修改密码

POST https://localhost:7085/api/User/UpdatePassword
content-type: application/json

{
  "id":"1",
  "password": "xxx"
}
```

## 删

```cs
// DELETE: api/User/5
[HttpDelete("{id}")]
public APIResult<object> Delete(long id)
{
  User? updateUser = _db.User!.FirstOrDefault(u => u.id == id);

  if (updateUser == null) {
    return APIResult.Error("用户不存在");
  }

  _db.User!.Remove(updateUser);

  int affected = _db.SaveChanges();

  if (affected == 1)
  {
    return APIResult.Ok("删除成功");
  }

  return APIResult.Error("删除失败");
}
```

delete 请求示例


```
DELETE https://localhost:7085/api/User/1
```

## 参考文档

[教程：使用 ASP.NET Core 创建 Web API](https://learn.microsoft.com/zh-cn/aspnet/core/tutorials/first-web-api?view=aspnetcore-7.0&tabs=visual-studio)
