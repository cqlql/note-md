- [script setup 使用 reactive](#script-setup-使用-reactive)
- [defineProps 设置默认值](#defineprops-设置默认值)
- [defineEmits 事件](#defineemits-事件)
- [vue 为全局组件声明类型](#vue-为全局组件声明类型)
  - [方式 1 组件方式](#方式-1-组件方式)
  - [方式 2 原始方式 -- 不推荐](#方式-2-原始方式----不推荐)
- [给 props 声明类型 -- 选项式](#给-props-声明类型----选项式)
  - [参考文档](#参考文档)
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

## vue 为全局组件声明类型

### 方式 1 组件方式

picker.vue

```vue
<!-- 如果是第三方组件，此组件只用作声明类型 -->
<script lang="ts" setup>
defineProps<{
  mode: 'multiSelector'
}>()
defineEmits<{
  (e: 'change', d: { detail: any }): void
}>()
</script>
```

components.d.ts

```ts
import type picker from './picker.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    picker: typeof picker
  }
}
```

### 方式 2 原始方式 -- 不推荐

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

## 给 props 声明类型 -- 选项式

```ts
import type { PropType } from 'vue'
export default {
  props: {
    data: Object as PropType<{ id:string, name: string }>,
  },
}
```

### 参考文档


[TypeScript 与选项式 API)](https://cn.vuejs.org/guide/typescript/options-api.html#typing-component-props)


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
