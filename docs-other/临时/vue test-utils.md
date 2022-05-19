```js
const wrap = mount(ValueSetLockVue);
await wrap.setData({ value: 1 });
await wrap.setProps({ value: 1 });

const wrap = mount({
  template: "<p>{{ msg }}</p>",
  props: ["msg"],
});

const compWrap = wrap.getComponent({ name: "ValueSetLock" });
compWrap.vm.handleClick();

const incrementEvent = compWrap.emitted("update:value");
expect(incrementEvent).toHaveLength(1);
expect(incrementEvent[0]).toEqual([2]);
```
