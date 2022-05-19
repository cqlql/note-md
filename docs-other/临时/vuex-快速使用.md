# vue2 支持的 vuex 快速使用

## 开始

包括 state getters mutations actions modules

@/store/index.js

```js
import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";

import user from "./module/user.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
  },
  getters,
});

export default store;
```

@/store/getters.js

```js
const getters = {
  token: (state) => state.user.token,
  avatar: (state) => state.user.userInfo.avatar,
  name: (state) => state.user.userInfo.name,
  userInfo: (state) => state.user.userInfo,
  authList: (state) => state.user.authList,
  isSuperAdmin: (state, getters) => getters.authList.isSuperAdmin,
};
export default getters;
```

@/store/modules/user.js

```js
const state = {
  token: getToken(), // 从 cookies 中初始
  userInfo: {},
};

const getters = {
  hasAuthList(state) {},
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then((data) => {
          commit("SET_TOKEN", data.token);
          setToken(data.token); // 设置到 cookies 中
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          dispatch("resetToken");
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {});
  },
};
```

## 实例中直接用

```js
export default {
  computed: {
    isSuperAdmin() {
      return this.$store.getters.isSuperAdmin;
    },
    userInfo() {
      this.$store.state.user.userInfo;
    },
    // 使用模块中的 getters
    hasAuthList() {
      this.$sotre.getters["user/HasAuthList"];
    },
  },
  methods: {
    login () {
       this.$store.dispatch('user/login', {username, passowrd })
       .then(()=>{})
       .catch(()=>{})

    }，
    async logout () {
      await this.$store.dispatch('user/logout')
    }
  }
};
```

## mapStates

```js
import { mapState } from "vuex";
export default {
  computed: mapState({
    count: (state) => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: "count",

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState(state) {
      return state.count + this.localCount;
    },
  }),
};
```

## mapGetters

```js
import { mapGetters } from 'vuex'

export default {
  // 映射到组件内的计算属性
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
    // 改名，参数时对象
    ...mapGetters({
      // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
      doneCount: 'doneTodosCount'
    })
  }
}
```

## mapMutations

```js
import { mapMutations } from "vuex";

export default {
  // ...
  methods: {
    ...mapMutations([
      "increment", // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      "incrementBy", // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    // 改名
    ...mapMutations({
      add: "increment", // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
  },
};
```

## mapActions

```js
import { mapActions } from "vuex";

export default {
  // ...
  methods: {
    ...mapActions([
      "increment", // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      "incrementBy", // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    // 改名
    ...mapActions({
      add: "increment", // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    }),
  },
};
```

```

```
