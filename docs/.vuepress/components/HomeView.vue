<script lang="tsx">
import sidebar from './data.json'
export default {
  setup() {
    function handle(children) {
      let vLis = []
      children.forEach((item) => {
        let newItem = {
          name: item.text,
          icon: item.icon,
          link: item.fullLink,
        }
        let vUl
        if (item.children) {
          vUl = handle(item.children, (newItem.children = []))
        }

        vLis.push(
          <li>
            <div class="name">
              {item.icon && <i class={'icon iconfont icon-' + item.icon}></i>}
              {item.fullLink ? (
                <router-link to={item.fullLink}>{item.text}</router-link>
              ) : (
                item.text
              )}
            </div>
            {vUl}
          </li>,
        )
      })

      return <ul>{vLis}</ul>
    }
    let vUl = handle(sidebar)

    return () => {
      return <div class="HomeView">{vUl}</div>
    }
  },
}
</script>

<style lang="scss">
.HomeView {
  padding: 10px 0;

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
      padding: 10px 0;
      font-size: 26px;

      .iconfont {
        font-size: 1em;
      }
    }
  }
  ul {
    margin: 0;
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
