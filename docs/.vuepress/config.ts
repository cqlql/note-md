import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import theme from './theme'

export default defineUserConfig({
  port: 3002,
  lang: 'zh-CN',
  title: '$开发笔记$',
  description: ' ',

  base: '/',

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],
  ],
  alias: {
    '@': __dirname,
  },

  theme,
  plugins: [searchPlugin()],
})
