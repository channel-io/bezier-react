const _ = require('lodash')
const path = require('path')

const ICON_POSTFIX = "Icon"
const POSTFIX_REGEX = new RegExp(`(${ICON_POSTFIX})`, 'g')
const POSTFIX_LENGTH = ICON_POSTFIX.length

function hasValidFileName(basename) {
  return basename.search(POSTFIX_REGEX) !== -1
}

function deleteIconPostfix(basename) {
  return basename.slice(0, basename.length - POSTFIX_LENGTH)
}

function defaultIndexTemplate(filePaths) {
  const importEntries = []
  const mappedFies = []

  filePaths.forEach(filePath => {
    const basename = path.basename(filePath, path.extname(filePath))

    if (!hasValidFileName(basename)) {
      throw new Error('The svg icon file name must have a "-icon" suffix.')
    }

    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
    importEntries.push(`import ${exportName} from './${basename}'`)
    mappedFies.push(`  '${_.kebabCase(deleteIconPostfix(basename))}': ${exportName},`)
  })

  const icons = `/* eslint-disable */

const icons = {
${mappedFies.join('\n')}
}
`

  return `
${importEntries.join('\n')}
${icons}
export type IconName = keyof typeof icons

/* eslint-enable */
export default icons
`
}

module.exports = defaultIndexTemplate
