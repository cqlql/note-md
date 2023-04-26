/**
 * 注意：本来这里用 script lang="tsx" 直接写 HomeView 中的，
 * 升级后发现不支持，目前找不到好的解决办法，分出一个文件解决
 */

import { defineComponent } from 'vue'

export default defineComponent({
  props: ['sidebar'],
  setup(props) {
    function handle(children) {
      let vLis: any[] = []
      children.forEach((item) => {
        let vUl
        if (item.children) {
          vUl = handle(item.children)
        }

        vLis.push(
          <li>
            <div class="name">
              {item.icon && <i class={'icon iconfont icon-' + item.icon}></i>}
              {item.fullLink ? (
                <router-link to={item.fullLink.replace(/\.md$/, '.html')}>{item.text}</router-link>
              ) : (
                <span class="t">{item.text}</span>
              )}
            </div>
            {vUl}
          </li>,
        )
      })

      return <ul>{vLis}</ul>
    }
    let vUl = handle(props.sidebar)

    return () => {
      return <div class="HomeView">{vUl}</div>
    }
  },
})
