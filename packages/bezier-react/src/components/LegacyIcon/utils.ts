import {
  type IconName,
  icons,
} from '@channel.io/bezier-icons'

/**
 * @deprecated Please import and use individual icons.
 * @example
 * import { AllIcon } from '@channel.io/bezier-icons'
 * import { Icon, type IconProps } from '@channel.io/bezier-react'
 * <Icon source={AllIcon} color="bg-black-dark" />
 * @example <caption>How to validate the bezier icon source</caption>
 * import { isBezierIcon, AllIcon } from '@channel.io/bezier-icons'
 * isBezierIcon(AllIcon) // true
 * isBezierIcon(() => <svg>...</svg>) // false
 * @example <caption>Legacy icon component is still available. but it will be removed in future versions!</caption>
 * import { LegacyIcon, type LegacyIconProps } from '@channel.io/bezier-react'
 * <LegacyIcon name="all" color="bg-black-dark" />
 */
export const isIconName = (name: any): name is IconName => Object.keys(icons).includes(name)
