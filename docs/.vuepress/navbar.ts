import fs from 'fs'
import path from 'path'
import { navbar } from 'vuepress-theme-hope'
import readdir from './utils/readdir'

const dirSettingMap = {
  'c sharp': {
    text: 'c#',
  },
  dotnet: {
    text: '.NET',
  },
  vue: {
    icon: 'vue',
  },
  nodejs: {
    icon: 'nodeJS',
  },
  mysql: {
    icon: 'mysql',
  },
}

const navbarConfig = ['/']

readdir({
  rootPath: path.resolve(__dirname, '../'),
  ignore: ['.vuepress', 'image'],
  callback: (params) => {
    let { dirname, parentDir, parentDirname, isDirectory } = params
    if (dirname === 'README.md') return
    if (isDirectory) {
      let setting = dirSettingMap[dirname]
      return {
        text: setting?.text || dirname,
        icon: setting?.icon,
        prefix: parentDirname ? `${dirname}/` : `/${dirname}/`,
      }
    }
    const fileNameBase = dirname.replace(/\.md$/, '')
    return {
      text: fileNameBase,
      link: dirname,
      fullLink: parentDir + '/' + dirname,
      // fullLink: fileNameBase
    }
  },
  initValue: navbarConfig,
})

fs.writeFileSync(
  path.resolve(__dirname, './components/data.json'),
  JSON.stringify(navbarConfig),
  'utf8',
)

export default navbar(navbarConfig)
