/* External dependencies */
import React, { memo } from 'react'

/* Internal dependencies */
import icons from 'Components/Icon/generated'
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
  const GeneratedIcon = icons[name]

  if (!GeneratedIcon) { return null }

  return (<GeneratedIcon {...rest} />)
})

export default LegacyIcon
