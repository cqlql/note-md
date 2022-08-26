---
title: sql
---

## 创建库

```sql
CREATE DATABASE IF NOT EXISTS db_user;
```

## 查看所有库

```sql
-- 权限内的所有库
SHOW DATABASES;

-- 过滤
SHOW DATABASES like '%db_user';
```

## 删除

```sql
DROP DATABASE IF EXISTS db_user;
```

## 创建表

创建用户表

```sql
CREATE TABLE db_user.user (
  id INT NOT NULL AUTO_INCREMENT,
  username CHAR(45) NOT NULL,
  password CHAR(45) NOT NULL,
  nickname CHAR(45) NOT NULL,
  PRIMARY KEY (id)
);
```

## 插入数据

```sql
INSERT INTO user (username,password,nickname)
  VALUES ('joly','123123','张三');
```

## 删除数据

```sql
-- 根据条件删除
DELETE FROM db_user.user WHERE id=2;
```
