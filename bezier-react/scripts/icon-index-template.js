const _ = require('lodash')
const path = require('path')

const ICON_SUFFIX = "Icon"
const SUFFIX_LENGTH = ICON_SUFFIX.length

function hasValidFileName(basename) {
  return basename.endsWith(ICON_SUFFIX)
}

function deleteIconSuffix(basename) {
  return basename.slice(0, basename.length - SUFFIX_LENGTH)
}

function defaultIndexTemplate(filePaths) {
  const importEntries = []
  const mappedFies = []
  const exportEntries = []

  filePaths.forEach(filePath => {
    const basename = path.basename(filePath, path.extname(filePath))

    if (!hasValidFileName(basename)) {
      throw new Error('The svg icon file name must have a "-icon" suffix.')
    }

    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
    importEntries.push(`import ${exportName} from './${basename}'`)
    mappedFies.push(`  '${_.kebabCase(deleteIconSuffix(basename))}': ${exportName},`)
    exportEntries.push(`  ${exportName},`)
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

export {
${exportEntries.join('\n')}
} 

/* eslint-enable */
export default icons
`
}

module.exports = defaultIndexTemplate
