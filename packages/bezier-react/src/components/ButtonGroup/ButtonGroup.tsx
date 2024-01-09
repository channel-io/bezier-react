import React, { forwardRef } from 'react'

import { Stack } from '~/src/components/Stack'

import type { ButtonGroupProps } from './ButtonGroup.types'

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(function ButtonGroup({
  children,
  justify = 'center',
  withoutSpacing = false,
  ...props
}, forwardedRef) {
  return (
    <Stack
      {...props}
      as="div"
      role="group"
      ref={forwardedRef}
      direction="horizontal"
      spacing={withoutSpacing ? 0 : 6}
      justify={justify}
    >
      { children }
    </Stack>
  )
})
