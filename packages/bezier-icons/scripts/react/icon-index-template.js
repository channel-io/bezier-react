const path = require('path')

const ICONS_OBJECT_NAME = 'icons'
const ICONS_TYPE_NAME = 'IconName'
const ICON_POSTFIX = 'Icon'

const kebabCase = (value) => value
  .trim()
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .replace(/([a-z])([0-9])/g, '$1-$2')
  .replace(/([0-9])([A-Z])/g, '$1-$2')
  .replace(/([0-9])([a-z])/g, '$1-$2')
  .replace(/[\s_]+/g, '-')
  .toLowerCase()

function generateSafeESModuleName(basename) {
  return /^\d/.test(basename) ? `Svg${basename}` : basename
}

function defaultIndexTemplate(filePaths) {
  const importLines = []
  const objectLines = []
  const types = []
  const exportLines = []

  filePaths.forEach(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const moduleName = generateSafeESModuleName(basename)
    const objectKey = kebabCase(basename)

    importLines.push(`import ${moduleName} from './${basename}'`)
    objectLines.push(`'${objectKey}': ${moduleName},`)
    types.push(`'${objectKey}'`)
    exportLines.push(`${moduleName} as ${moduleName}${ICON_POSTFIX},`)
  })

  const icons = `
    const ${ICONS_OBJECT_NAME} = {
      ${objectLines.join('\n')}
    }
  `

  return `
    /* eslint-disable */
    ${importLines.join('\n')}

    ${icons}

    export type ${ICONS_TYPE_NAME} = ${types.join(' | ')}

    export {
      ${exportLines.join('\n')}
    }

    export default ${ICONS_OBJECT_NAME}
  `
}

module.exports = defaultIndexTemplate
