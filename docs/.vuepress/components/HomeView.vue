<script lang="ts" setup>
import sidebar from './data.json'

let newList = []

function handle(children, newList) {
  children.forEach((item) => {
    // if (typeof item == 'string') return
    let newItem = {
      name: item.text,
      icon: item.icon,
      link: item.fullLink,
    }
    if (item.children) {
      handle(item.children, (newItem.children = []))
    }

    newList.push(newItem)
  })
}
handle(sidebar, newList)
</script>
<template>
  <div class="HomeView">
    <div class="item" v-for="item of newList">
      <template v-if="item.children">
        <div class="item-name">
          <i v-if="item.icon" :class="'icon iconfont icon-' + item.icon"></i>
          {{ item.name }}</div
        >
        <ul>
          <li v-for="itemSecond of item.children">
            <router-link v-if="itemSecond.link" :to="itemSecond.link">
              {{ itemSecond.name }}
            </router-link>
            <div v-else class="name">{{ itemSecond.name }}</div>
            <ul v-if="itemSecond.children">
              <li v-for="itemThird of itemSecond.children">
                <router-link :to="itemThird.link">
                  {{ itemThird.name }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </template>
      <ul v-else>
        <li>
          <router-link :to="item.link">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.HomeView {
  padding: 10px 0;

  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr;

  .item {
    // flex: 1;
    break-inside: avoid;
    background-color: #242424;
    margin-bottom: 20px;
    border-radius: 8px;
    padding: 28px 32px;
    // transition: background-color .5s;
  }
  .item-name {
    padding: 10px 0;
    font-size: 26px;

    .iconfont {
      font-size: 1em;
    }
  }
  ul {
    margin: 0;
  }
}

html[data-theme='light'] {
  .HomeView {
    .item {
      background-color: #f9f9f9;
    }
  }
}

@media (min-width: 768px) {
  .HomeView {
    columns: 2;
  }
}
@media (min-width: 1024px) {
  .HomeView {
    columns: 3;
  }
}
</style>
