// import { sidebar } from "vuepress-theme-hope";
import navData from './nav-data-gen'

const sidebar = {}

navData.forEach((item: any) => {
  sidebar[item.prefix] = [item]
})

export default sidebar
