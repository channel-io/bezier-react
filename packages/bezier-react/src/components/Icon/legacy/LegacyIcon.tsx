/* External dependencies */
import React, { memo } from 'react'
import { icons } from '@channel.io/bezier-react-icons'

/* Internal dependencies */
// eslint-disable-next-line no-restricted-imports
import Icon from '../Icon'
import type LegacyIconProps from './LegacyIcon.types'

/**
 * @deprecated Please import and use individual icons.
 * @example <caption>Migration Tip: Change the IconName to Pascal Case and attach the 'Icon' suffix.</caption>
 * import { AllIcon } from '@channel.io/bezier-react'
 * // truncated...
 * return (<AllIcon color="bg-black-dark" />)
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
