<script lang="tsx">
import { h } from 'vue'
import sidebar from './data.json'
import HomeViewFix from './HomeViewFix'
export default {
  setup() {
    return () => {
      return h(HomeViewFix, {
        sidebar,
      })
    }
  },
}
</script>

<style lang="scss">
.HomeView {
  padding: 10px 0;
  font-size: 15px;
  & > ul {
    list-style-type: none;
    padding: 0;
  }
  & > ul > li {
    break-inside: avoid;
    background-color: #242424;
    margin-bottom: 20px;
    border-radius: 8px;
    padding: 28px 32px;
    & > .name {
      // padding: 10px 0;
      padding-bottom: 10px;

      .t {
        font-size: 24px;
      }

      .iconfont {
        font-size: 24px;
      }
    }
  }
  ul {
    margin: 0;
  }

  .t {
    font-size: 18px;
  }
}

html[data-theme='light'] {
  .HomeView {
    & > ul > li {
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
