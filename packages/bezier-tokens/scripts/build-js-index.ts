import fs from 'fs/promises'
import path from 'path'

import chalk from 'chalk'

interface BuildJsIndexFileOptions {
  buildPath: string
  isCjs: boolean
}

const getFileExtensionByModuleSystem = (isCjs: boolean) =>
  isCjs ? '.js' : '.mjs'

export async function buildJsIndex({
  buildPath,
  isCjs,
}: BuildJsIndexFileOptions) {
  const fileExtension = getFileExtensionByModuleSystem(isCjs)
  const destination = path.join(buildPath, `index${fileExtension}`)

  try {
    const files = await fs.readdir(buildPath)
    let importStatements = ''
    let exportStatements = isCjs
      ? 'exports.tokens = Object.freeze({\n'
      : 'export const tokens = Object.freeze({\n'

    for (const file of files.filter((file) => file.endsWith(fileExtension))) {
      if (file === path.basename(destination)) continue

      const moduleName = file.replace(fileExtension, '')

      if (!isCjs) {
        importStatements += `import ${moduleName} from './${file}';\n`
      }

      exportStatements += isCjs
        ? `  ${moduleName}: require('./${moduleName}'),\n`
        : `  ${moduleName},\n`
    }

    exportStatements += '});\n'

    const result = isCjs
      ? exportStatements
      : `${importStatements}${exportStatements}`

    await fs.writeFile(destination, result)

    console.log(chalk.green.bold(`\n✔︎ Created ${destination}`))
  } catch (error) {
    throw error
  }
}
