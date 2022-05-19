```js
// 确保调用了指定数量的断言。
expect.assertions(3); // 需要调用3次
```

## 确保 mock function 被调用

`expect(mockFn).toHaveBeenCalled(number)`
别名 `.toBeCalled()`
确保函数被调用>=1 次。

`expect(mockFn).toHaveBeenCalledTimes(number)`
别名 `.toBeCalledTimes(number)`
确保函数被调用 number 次数

```js
test("drinks something lemon-flavoured", () => {
  const drink = jest.fn();
  drinkAll(drink, "lemon");
  expect(drink).toHaveBeenCalled();
});
```

## 检查 Object 属性
