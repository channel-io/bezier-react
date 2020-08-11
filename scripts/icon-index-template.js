const _ = require('lodash')
const path = require('path')

function defaultIndexTemplate(filePaths) {
  const importEntries = []
  const mappedFies = []

  filePaths.forEach(filePath => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
    importEntries.push(`import ${exportName} from './${basename}'`)
    mappedFies.push(`  '${_.kebabCase(basename)}': ${exportName},`)
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
