/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import GNBView from './GNB.styled'
import GNBProps from './GNB.types'

function GNB(
  {
    testId,
    children,
    style,
    className,
  }: GNBProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  return (
    <GNBView
      ref={forwardedRef}
      style={style}
      className={className}
      data-testid={testId}
    >
      { children }
    </GNBView>
  )
}

export default forwardRef(GNB)
