import { navbar } from 'vuepress-theme-hope'
import navDataGen from './nav-data-gen'

const navbarConfig = ['/']

export default navbar(navbarConfig.concat(navDataGen))
