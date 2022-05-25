import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  hostname: 'http://docs.cqlql.top',

  author: {
    name: 'Mr.Joly',
    url: '',
  },

  iconPrefix: 'iconfont icon-',

  // logo: '/logo.svg',

  repo: 'cqlql/node-md',

  docsDir: 'docs',

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  displayFooter: true,

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
})
