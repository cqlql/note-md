- [script setup 使用 reactive](#script-setup-使用-reactive)
- [defineProps 设置默认值](#defineprops-设置默认值)
- [defineEmits 事件](#defineemits-事件)
- [全局组件类型声明](#全局组件类型声明)
  - [方式 1 组件方式](#方式-1-组件方式)
  - [方式 2 原始方式](#方式-2-原始方式)
- [组件类型变量](#组件类型变量)
- [问题](#问题)
  - [Vue typescript 引入 svg 的问题](#vue-typescript-引入-svg-的问题)
- [watch 监听 props](#watch-监听-props)

## script setup 使用 reactive

```vue
<template>
  <div>
    {{ msg }}
  </div>
</template>
<script setup lang="ts">
const state = reactive({
  msg: 123,
})

const { msg } = toRefs(state)
</script>
```

## defineProps 设置默认值

```vue
<template></template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    msg?: string
    labels?: string[]
  }>(),
  {
    msg: 'hello',
    labels: () => ['one', 'two'],
  },
)
</script>
```

## defineEmits 事件

script setup 中调用事件

```vue
<!-- dialog.vue -->
<template>
  <div>
    <button @click="close">关闭</button>
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>()
function close() {
  emit('update:visible', false)
}
</script>
```

```vue
<!-- index.vue -->
<template>
  <dialog v-model:visible="visible"> </dialog>
</template>
<script lang="ts" setup>
const visible = ref(false)
</script>
```

## 全局组件类型声明

### 方式 1 组件方式

先创建一个 picker.vue 组件

```vue
<script lang="ts" setup>
defineProps<{
  mode: 'multiSelector'
}>()
defineEmits<{
  (e: 'change', d: { detail: any }): void
}>()
</script>
```

在全局 components.d.ts 类型文件中声明刚刚创建的组件

```ts
import type picker from './picker.vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    picker: typeof picker
  }
}
```

### 方式 2 原始方式

```ts
import { DefineComponent } from 'vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    JButton: DefineComponent<
      {
        /**
         * 按钮类型
         */
        type?: 'green' | 'info'
      },
      {},
      {},
      {},
      {},
      {},
      {},
      /**事件没办法显示注释 */
      {
        click: (e: Event) => void
        test: (e: Event) => void
      }
    >
  }
}
```

## 组件类型变量

···ts

```typescript
import type Vue, { ComponentOptions } from 'vue'
import MyComponent from '@/components/MyComponent.vue'

const MyComponentOptions: ComponentOptions<Vue> = {
  components: {
    MyComponent,
  },
  // other options
}
```

···

## 问题

### Vue typescript 引入 svg 的问题

https://zhuanlan.zhihu.com/p/182893764

## watch 监听 props

```vue
<script lang="ts" setup>
import { ref, watch } from 'vue'
watch(
  () => props.orderInfo,
  (orderInfoVal) => {
    console.log('watch props.orderInfo')
  },
)
</script>
```
