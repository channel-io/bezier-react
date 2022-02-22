/* External dependencies */
import React, { memo } from 'react'

/* Internal dependencies */
import icons from 'Components/Icon/generated'
import type LegacyIconProps from './LegacyIcon.types'

function LegacyIcon({
  name,
  ...rest
}: LegacyIconProps) {
  const GeneratedIcon = icons[name]

  if (!GeneratedIcon) { return null }

  return (<GeneratedIcon {...rest} />)
}

export default memo(LegacyIcon)
