import React, { memo } from 'react'

/* eslint-disable no-restricted-imports */
import { icons } from '@channel.io/bezier-icons'

import { Icon } from '../Icon'

import type LegacyIconProps from './LegacyIcon.types'
/* eslint-enable no-restricted-imports */

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
const LegacyIcon = memo(({
  name,
  ...rest
}: LegacyIconProps) => {
  const IconSource = icons[name]

  if (!IconSource) { return null }

  return (<Icon source={IconSource} {...rest} />)
})

export default LegacyIcon
