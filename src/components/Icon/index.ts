/* Internal dependencies */
import LegacyIcon from './LegacyIcon'
import { IconSize } from './Icon.types'
import { isIconName } from './utils'
import type IconProps from './Icon.types'

export * from './generated'

export type { IconProps }

export {
  LegacyIcon as Icon,
  IconSize,
  isIconName,
}
