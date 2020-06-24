/* External dependencies */
import React from 'react'

/* Internal dependencies */
import GNBView from './GNB.styled'
import GNBProps from './GNB.types'

function GNB({
  testId = 'gnb',
  children,
  style,
  className,
}: GNBProps) {
  return (
    <GNBView
      style={style}
      className={className}
      data-testid={testId}
    >
      { children }
    </GNBView>
  )
}

export default GNB
