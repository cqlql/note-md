import fs from 'fs'
import path from 'path'

import { navbar } from 'vuepress-theme-hope'
import navData from './utils/nav-data-generate'

const navbarConfig = ['/']

// function handle(children, lv, newChildren) {
//   console.log('🚀 -- handle -- lv', lv)
//   if (lv > 1) return
//   children.forEach((item) => {
//     let newItem = {
//       ...item,
//     }
//     newChildren.push(newItem)
//     if (item.children && lv < 2) {
//       handle(item.children, lv + 1, (newItem.children = []))
//     }
//   })
// }

// handle(navData, 0, navbarConfig)
// console.log('🚀 -- navbarConfig', navbarConfig)

function getLink(children) {
  let firstItem = children[0]
  if (firstItem.link) {
    return firstItem.link
  } else {
    return getLink(firstItem.children)
  }
}

navData.forEach((firstItem: any) => {
  let newItem = {
    ...firstItem,
    children: undefined,
  }
  if (!firstItem.link) {
    newItem.link = getLink(firstItem.children)
  }
  navbarConfig.push(newItem)
})

fs.writeFileSync(
  path.resolve(__dirname, './components/data3.json'),
  JSON.stringify(navbarConfig),
  'utf8',
)

export default navbar(navbarConfig)
