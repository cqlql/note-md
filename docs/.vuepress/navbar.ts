import fs from 'fs'
import path from 'path'

import { navbar } from 'vuepress-theme-hope'
import navData from './utils/nav-data-generate'

const navbarConfig = ['/']

function getLink(children, parentItem) {
  let firstItem = children[0]
  if (firstItem.link) {
    return firstItem.fullLink
  } else {
    return getLink(firstItem.children, firstItem)
  }
}

navData.forEach((firstItem: any) => {
  let newItem = {
    ...firstItem,
    children: undefined,
  }
  if (!firstItem.link) {
    newItem.link = getLink(firstItem.children, firstItem)
  }
  navbarConfig.push(newItem)
})

export default navbar(navbarConfig)
