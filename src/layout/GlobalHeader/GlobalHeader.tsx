/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import GlobalHeaderProps from './GlobalHeader.types'
import { StyledGlobalHeader } from './GlobalHeader.styled'

function GlobalHeader(
  {
    testId,
    className,
    style,
    children,
    isWindows = false,
  }: GlobalHeaderProps,
  forwardedRef: React.Ref<any>,
) {
  return (
    <StyledGlobalHeader
      ref={forwardedRef}
      className={className}
      style={style}
      data-testid={testId}
      isWindows={isWindows}
    >
      { children }
    </StyledGlobalHeader>
  )
}

export default forwardRef(GlobalHeader)
