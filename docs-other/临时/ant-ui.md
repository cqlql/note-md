format 显示

value-format 绑定值格式

```html
<a-date-picker
  v-model="form.addDatetime"
  :popup-style="{zIndex:3100}"
  :show-time="{ format: 'HH:mm' }"
  format="YYYY-MM-DD HH:mm"
  value-format="YYYY-MM-DD HH"
  placeholder="加粉时间"
/>
```
