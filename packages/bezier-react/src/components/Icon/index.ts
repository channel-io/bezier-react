/* Internal dependencies */
import { IconSize } from './Icon.types'
import { isIconName } from './utils'
import type IconProps from './Icon.types'

import { LegacyIcon } from './legacy'
import type { LegacyIconProps } from './legacy'

export * from './generated'

export type {
  LegacyIconProps as IconProps,
  // TODO: Change the name to IconProps
  IconProps as GeneratedIconProps,
}

export {
  LegacyIcon as Icon,
  IconSize,
  isIconName,
}
