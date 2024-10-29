import { sidebar } from "vuepress-theme-hope";

import navbarData from "./utils/nav-generate.js";

const sidebarData = {}
navbarData.forEach((item: any) => {
  sidebarData[item.prefix] = [item]
})
export default sidebar(sidebarData)
