/* External dependencies */
import React, { memo } from 'react'

/* Internal dependencies */
import Icon from './Icon'
import LegacyIconProps from './Icon.types'
import icons from './generated'

export const ICON_TEST_ID = 'bezier-react-icon'

function LegacyIcon({
  name,
  testId = ICON_TEST_ID,
  ...rest
}: LegacyIconProps) {
  if (!icons[name]) { return null }

  return (
    <Icon
      data-testid={testId}
      as={icons[name]}
      {...rest}
    />
  )
}

export default memo(LegacyIcon)
