/* External dependencies */
import React, { memo } from 'react'

/* Internal dependencies */
/* eslint-disable no-restricted-imports */
import icons from '../generated'
import Icon from '../Icon'
/* eslint-enable no-restricted-imports */
import type LegacyIconProps from './LegacyIcon.types'

/**
 * @deprecated Please import and use individual icons.
 * @example
 * import { Icon, AllIcon, type IconProps } from '@channel.io/bezier-react'
 * <Icon as={AllIcon} color="bg-black-dark" />
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

  return (<Icon as={IconSource} {...rest} />)
})

export default LegacyIcon
