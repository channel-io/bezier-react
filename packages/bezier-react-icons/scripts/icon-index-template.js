const _ = require('lodash')
const path = require('path')

function defaultIndexTemplate(filePaths) {
  const importEntries = []
  const mappedFies = []
  const exportEntries = []

  filePaths.forEach(filePath => {
    const basename = path.basename(filePath, path.extname(filePath))

    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
    importEntries.push(`import ${exportName} from './${basename}'`)
    mappedFies.push(`  '${_.kebabCase(basename)}': ${exportName},`)
    exportEntries.push(`  ${exportName} as ${exportName}Icon,`)
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
