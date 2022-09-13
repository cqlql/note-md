import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineUserConfig, viteBundler } from 'vuepress'
import searchPlugin from '@vuepress/plugin-search'
import theme from './theme'

export default defineUserConfig({
  port: 3002,
  lang: 'zh-CN',
  title: '开发笔记',
  // description: 'welcome',

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

  bundler: viteBundler({
    viteOptions: {
      plugins: [
        vueJsx({
          // options are passed on to @vue/babel-plugin-jsx
        }),
      ],
    },
  }),
})
