## 远程仓库

```shell

# 查看
git remote -v
# 修改
git remote set-url origin [url]

```

## 查看远程分支

```shell
git branch -r
```

## 获取远程分支

新加的分支如果看不到，则需要获取

```shell
git fetch origin
```

## 签出远程分支

签出远程分支到本地

```shell
git checkout -b vue-cli5 origin/vue-cli5
```
