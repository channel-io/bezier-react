/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { type AlphaCenterProps } from './AlphaCenter.types'
import * as Styled from './AlphaCenter.styled'

/**
 * `Center` is a layout component that centers its child within itself.
 *
 * @example
 *
 * ```tsx
 * <Center>
 *  Centered content
 * </Center>
 * ```
 */
export const AlphaCenter = forwardRef<HTMLDivElement, AlphaCenterProps>(function AlphaCenter({
  children,
  ...rest
}, forwardedRef) {
  return (
    <Styled.Box
      ref={forwardedRef}
      {...rest}
    >
      { children }
    </Styled.Box>
  )
})
