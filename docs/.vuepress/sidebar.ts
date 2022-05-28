// import { sidebar } from "vuepress-theme-hope";
import navData from './utils/nav-data-generate'

const sidebar = {}

navData.forEach((item: any) => {
  sidebar[item.prefix] = [item]
})

export default sidebar
