// eslint-disable-next-line no-restricted-imports
import { kebabCase } from '../src/utils/stringUtils'

const path = require('path')

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

  const icons = `/* eslint-disable */

const icons = {
${mappedFies.join('\n')}
}
`

  return `
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

/* eslint-enable */
export default icons
`
}

module.exports = defaultIndexTemplate
