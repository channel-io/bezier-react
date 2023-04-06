/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { AlphaStack } from '~/src/components/AlphaStack'

import type ButtonGroupProps from './ButtonGroup.types'

export const ButtonGroup = forwardRef(function ButtonGroup(
  {
    children,
    justify = 'center',
    withoutSpacing = false,
    ...props
  }: ButtonGroupProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const spacing = withoutSpacing ? 0 : 6

  return (
    <AlphaStack
      direction="horizontal"
      spacing={spacing}
      justify={justify}
      ref={forwardedRef}
      role="group"
      {...props}
    >
      { children }
    </AlphaStack>
  )
})
