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
      let text = setting?.text || dirname
      return {
        text: setting?.text || dirname.replace(/^\d+_/, ''),
        icon: setting?.icon,
        prefix: parentDirname ? `${dirname}/` : `/${dirname}/`,
      }
    }
    const fileNameBase = dirname.replace(/^\d+_|\.md$/g, '')
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
