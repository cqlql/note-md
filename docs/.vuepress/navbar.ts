import { navbar } from 'vuepress-theme-hope'
import navData from './utils/nav-data-generate'

const navbarConfig = ['/']

export default navbar(navbarConfig.concat(navData))
