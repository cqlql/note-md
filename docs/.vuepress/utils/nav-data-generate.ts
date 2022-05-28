import fs from 'fs'
import path from 'path'
import readdir from './readdir'
import fm from 'front-matter'

const rootPath = process.cwd()
const docsDir = 'docs'

const navbarConfig = []

interface HandlerParams {
  parentDirname: string
  parentDir: string
  dirname: string
  fullLink: string
}

function dirHandler(params: HandlerParams) {
  const { parentDirname, dirname, fullLink } = params

  let dirConfigPath = path.join(rootPath, docsDir, fullLink, '.config')

  const resultConfig = {
    text: dirname,
    icon: '',
    prefix: parentDirname ? `${dirname}/` : `/${dirname}/`,
    sort: 0,
  }

  try {
    fs.openSync(dirConfigPath, 'r')

    const { title, icon, sort } = JSON.parse(fs.readFileSync(dirConfigPath, 'utf8'))
    resultConfig.text = title || resultConfig.text
    resultConfig.icon = icon || resultConfig.icon
    resultConfig.sort = sort || resultConfig.sort
  } catch (e) {}

  return resultConfig
}

function fileHandler(params: HandlerParams) {
  const { dirname, fullLink } = params
  let filePath = path.join(rootPath, docsDir, fullLink)

  const resultConfig = {
    text: dirname.replace(/\.md$/g, ''),
    link: dirname,
    icon: '',
    fullLink: fullLink,
    sort: 0,
  }

  try {
    fs.openSync(filePath, 'r')

    let { title, icon, sort } = fm(fs.readFileSync(filePath, 'utf8')).attributes as any

    resultConfig.text = title || resultConfig.text
    resultConfig.icon = icon || resultConfig.icon
    resultConfig.sort = sort || resultConfig.sort
  } catch (e) {}

  return resultConfig
}

readdir({
  initValue: navbarConfig,
  rootPath: path.join(rootPath, docsDir),
  ignore: ['.vuepress', '.config', 'image'],
  callback: (params) => {
    let { dirname, parentDir, parentDirname, isDirectory } = params
    if (dirname === 'README.md') return

    const fullLink = parentDir + '/' + dirname

    if (isDirectory) {
      return dirHandler({
        dirname,
        parentDir,
        parentDirname,
        fullLink,
      })
    }
    return fileHandler({
      dirname,
      parentDir,
      parentDirname,
      fullLink,
    })
  },
  sort(arr) {
    arr.sort((a, b) => {
      return b.sort - a.sort
    })
  },
})

fs.writeFileSync(
  path.resolve(__dirname, '../components/data.json'),
  JSON.stringify(navbarConfig),
  'utf8',
)

export default navbarConfig
