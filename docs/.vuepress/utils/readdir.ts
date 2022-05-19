import fs from 'fs'
import path from 'path'

interface CallbackParams {
  rootPath: string
  parentPath: string
  parentDir: string
  parentDirname: string
  dirname: string
  isDirectory: boolean
}

interface CallbackResult {
  children?: []
  [key: string]: any
}

interface readdirOptions {
  rootPath: string
  ignore: string[]
  callback: (params: CallbackParams) => any
  initValue: any[]
}

export default function readdir(options: readdirOptions) {
  let { rootPath, ignore, callback, initValue } = options
  const dirList = fs.readdirSync(rootPath)

  function handle(parentPath: string, parentDir: string, dir: string, children) {
    if (ignore.includes(dir)) return
    let currentPath = path.join(parentPath, dir)
    const isDirectory = fs.statSync(currentPath).isDirectory()
    let data = {
      rootPath: rootPath,
      parentPath: parentPath,
      parentDir: parentPath.replace(rootPath, '').replace(/\\/g, '/'),
      parentDirname: parentDir,
      dirname: dir,
      isDirectory,
    }

    let result: any = callback(data)

    if (result !== undefined) {
      if (isDirectory) {
        result.children = []
        fs.readdirSync(currentPath).forEach((childDir) => {
          handle(currentPath, dir, childDir, result.children)
        })
      }

      children.push(result)
    }
  }

  dirList.forEach((dir) => {
    handle(rootPath, '', dir, initValue)
  })
  return []
}
