import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import vueJsx from '@vitejs/plugin-vue-jsx';
import theme from "./theme.js";

export default defineUserConfig({
  base: '/',

  port: 3008,
  lang: 'zh-CN',
  title: '开发笔记',
  // description: 'welcome',

  theme,

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
  bundler: viteBundler({
    viteOptions: {
      plugins: [
        vueJsx(),
      ],
    },
  }),
})
