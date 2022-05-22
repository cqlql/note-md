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

  // footer: '',

  displayFooter: true,

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  // encrypt: {
  //   config: {
  //     '/guide/encrypt.html': ['1234'],
  //   },
  // },

  // plugins: {
  //   // blog: {
  //   //   autoExcerpt: true,
  //   // },

  //   mdEnhance: {
  //     // enableAll: true,
  //     // presentation: {
  //     //   plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
  //     // },
  //   },
  // },
})
