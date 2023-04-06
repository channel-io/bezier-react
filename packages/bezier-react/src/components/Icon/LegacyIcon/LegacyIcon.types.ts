/* Internal dependencies */
/* eslint-disable no-restricted-imports */
import type IconProps from '../Icon.types'
import { type IconName } from '../generated'
/* eslint-enable no-restricted-imports */

interface LegacyIconOptions {
  name: IconName
}

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
export default interface LegacyIconProps extends
  Omit<IconProps, 'source'>,
  LegacyIconOptions {}
