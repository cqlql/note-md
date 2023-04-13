```ts
Sortable.create(el, {
  group: {
    name: 'FieldChoiceItem',
    put: false,
    pull: 'clone',
  },
  revertOnSpill: true, // Enable plugin

  // animation: 150,
  sort: false,
  draggable: '.btn',

  // ghostClass: 'sortable-ghost', // 给拖动元素增加 class
  setData: function (dataTransfer) {
    // to avoid Firefox bug
    // Detail see : https://github.com/RubaXa/Sortable/issues/1012
    dataTransfer.setData('Text', '')
  },

  /**
   * 点击拖动元素时触发
   */
  choose(e) {},
  /**
   * 松开拖动元素触发
   */
  onUnchoose(e) {},

  /**
   * 拖动结束触发
   * 可进行数据交换
   */
  onEnd: (evt) => {
    // 交换数据
    // const targetRow = that.list.splice(evt.oldIndex, 1)[0]
    // that.list.splice(evt.newIndex, 0, targetRow)
  },
  /**
   * 拖动时改变前触发
   */
  onMove(e) {
    // 排除不拖动的元素
    // if (e.related.classList.contains('no-drag')) return false
  },
  /**
   * 拖动结束，容器列表发生新增触发。
   * 此时数据是否以及改变？
   */
  onAdd() {},
  /**
   * 拖动结束
   * 并且已经更新数据后触发
   */
  onUpdate: function (/**Event*/ evt) {
    // same properties as onEnd
  },
  /**
   * 列表元素发生改变后触发
   * 比如新增删除交换
   */
  onSort: function (/**Event*/ evt) {
    // same properties as onEnd
  },
  /**
   * 拖动开始，并且创建一个克隆元素时触发
   */
  onClone(toolItem, ...arrs) {
    console.log('🚀 -- onClone -- toolItem:', toolItem)
    // return Object.assign({}, toolItem);

    // return document.createElement('div');
  },
})
```
