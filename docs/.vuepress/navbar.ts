import { navbar } from 'vuepress-theme-hope'
import navData from './utils/nav-data-generate'

const navbarConfig = [
  '/',
  'JS',
  'Vue',
  'TypeScript',
  '.NET',
  'MySql',
  'docker',
  {
    text: '前端',
    children: ['CSS', 'JS', 'TypeScript', 'Vue'],
  },
  {
    text: '后端',
    children: ['docker', '.NET'],
  },
  {
    text: '数据库',
    children: ['MySql', 'Redis'],
  },
]

function getLink(children, parentItem) {
  let firstItem = children[0]
  if (firstItem.link) {
    return firstItem.fullLink
  } else {
    return getLink(firstItem.children, firstItem)
  }
}

function parseNavbarConfig() {
  let map = {}
  navData.forEach((firstItem: any) => {
    let newItem = {
      ...firstItem,
      children: undefined,
    }
    if (firstItem.children.length) {
      newItem.link = getLink(firstItem.children, firstItem)
    }
    map[firstItem.text.toLowerCase()] = newItem
  })

  function handle(list) {
    list.forEach((conf, index) => {
      if (typeof conf !== 'string') {
        handle(conf.children)
      } else {
        let item = map[conf.toLowerCase()]

        if (item) {
          list[index] = item
        } else {
          console.warn(`"${conf}"没有对应的菜单`)
        }
      }
    })
  }

  handle(navbarConfig)
  // navbarConfig.forEach((conf, index) => {
  //   if (typeof conf !== 'string') {
  //     let newChildren: any[] = []
  //     conf.children.forEach((key) => {
  //       let item = map[key.toLowerCase()]
  //       if (item) {
  //         newChildren.push(item)
  //       } else {
  //         console.warn(`"${key}"没有对应的菜单`)
  //       }
  //     })

  //     conf.children = newChildren
  //   } else {
  //     let item = map[conf.toLowerCase()]

  //     if (item) {
  //       navbarConfig[index] = item
  //     }
  //   }
  // })
}

parseNavbarConfig()

export default navbar(navbarConfig)
