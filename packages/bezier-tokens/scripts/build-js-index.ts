import fs from 'fs'
import path from 'path'

interface BuildJsIndexFileOptions {
  buildPath: string
  isCjs: boolean
}

const getFileExtensionByModuleSystem = (isCjs: boolean) =>
  isCjs ? '.js' : '.mjs'

function buildJsIndexFile({ buildPath, isCjs }: BuildJsIndexFileOptions) {
  const fileExtension = getFileExtensionByModuleSystem(isCjs)
  const destination = `index${fileExtension}`
  let exportStatements = ''

  if (!fs.existsSync(buildPath)) {
    // eslint-disable-next-line no-console
    console.log(`Directory not found: ${buildPath}`)
    return
  }

  const files = fs.readdirSync(buildPath)

  files.forEach((file) => {
    if (file.endsWith(fileExtension) && file !== destination) {
      const moduleName = file.replace(fileExtension, '')
      if (!isCjs) {
        exportStatements += `import ${moduleName} from './${file}';\n`
      }
    }
  })

  if (isCjs) {
    exportStatements += 'exports.tokens = Object.freeze({\n'
  } else {
    exportStatements += '\nexport const tokens = Object.freeze({\n'
  }

  files.forEach((file) => {
    if (file.endsWith(fileExtension) && file !== destination) {
      const moduleName = file.replace(fileExtension, '')
      if (isCjs) {
        exportStatements += `  ${moduleName}: require('./${moduleName}'),\n`
      } else {
        exportStatements += `  ${moduleName},\n`
      }
    }
  })

  exportStatements += '});\n'

  fs.writeFileSync(path.join(buildPath, destination), exportStatements)
  // eslint-disable-next-line no-console
  console.log(`\n✔︎ Created ${buildPath}/${destination}`)
}

function main() {
  ;[
    {
      buildPath: 'dist/cjs',
      isCjs: true,
    },
    {
      buildPath: 'dist/esm',
      isCjs: false,
    },
  ].forEach(buildJsIndexFile)
}

main()
