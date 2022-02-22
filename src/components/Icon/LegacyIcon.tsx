/* External dependencies */
import React, { memo } from 'react'

/* Internal dependencies */
import type LegacyIconProps from './Icon.types'
import icons from './generated'

function LegacyIcon({
  name,
  ...rest
}: LegacyIconProps) {
  const GeneratedIcon = icons[name]

  if (!GeneratedIcon) { return null }

  return (<GeneratedIcon {...rest} />)
}

export default memo(LegacyIcon)
