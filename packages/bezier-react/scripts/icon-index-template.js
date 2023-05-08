const path = require('path')

const kebabCase = (value) => value
  .trim()
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .replace(/([a-z])([0-9])/g, '$1-$2')
  .replace(/([0-9])([A-Z])/g, '$1-$2')
  .replace(/([0-9])([a-z])/g, '$1-$2')
  .replace(/[\s_]+/g, '-')
  .toLowerCase()

function defaultIndexTemplate(filePaths) {
  const importEntries = []
  const mappedFies = []
  const exportEntries = []

  filePaths.forEach(filePath => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
    importEntries.push(`import ${exportName} from './${basename}'`)
    mappedFies.push(`  '${kebabCase(basename)}': ${exportName},`)
    exportEntries.push(`  ${exportName} as ${exportName}Icon,`)
  })

  const icons = `
const icons = {
${mappedFies.join('\n')}
}
`

  return `
/* eslint-disable */
${importEntries.join('\n')}
${icons}

/**
 * @deprecated Please import and use individual icons.
 * @example
 * import { Icon, AllIcon, type IconProps } from '@channel.io/bezier-react'
 * <Icon source={AllIcon} color="bg-black-dark" />
 * @example <caption>How to validate the bezier icon source</caption>
 * import { isBezierIcon, AllIcon } from '@channel.io/bezier-react'
 * isBezierIcon(AllIcon) // true
 * isBezierIcon(<svg>...</svg>) // false
 * @example <caption>Legacy icon component is still available. but it will be removed in future versions!</caption>
 * import { LegacyIcon, type LegacyIconProps } from '@channel.io/bezier-react'
 * <LegacyIcon name="all" color="bg-black-dark" />
 */
export type IconName = keyof typeof icons

export {
${exportEntries.join('\n')}
}

export default icons
`
}

module.exports = defaultIndexTemplate
