---
title: 首页
home: true
heroText: false
tagline: false
---

## 导航

<HomeView></HomeView>

<script lang="ts" setup>
import HomeView from '@/components/HomeView.vue'
</script>

## 本文档导航配置说明

### 目录

目录下创建 `.config`

```json
{
  "title": ".NET",
  "icon": "javascript",
  "sort": 99 // 也可通过文件名排序，比如文件名 `01_开始`，`01_` 最终会去掉
}
```

### md 文件

文件的 front matter

```
---
title: 首页
icon: home
sort: 99
---
```
