import React, { forwardRef } from 'react'

import { Stack } from '~/src/components/Stack'

import type { ButtonGroupProps } from './ButtonGroup.types'

/**
 * `ButtonGroup` is a component that groups buttons together.
 * @example
 * ```tsx
 * <ButtonGroup>
 *   <Button text="Close" />
 *   <Button text="Submit" />
 * </ButtonGroup>
 * ```
 */
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup(
    { children, justify = 'center', withoutSpacing = false, ...props },
    forwardedRef
  ) {
    return (
      <Stack
        {...props}
        role="group"
        ref={forwardedRef}
        direction="horizontal"
        spacing={withoutSpacing ? 0 : 6}
        justify={justify}
      >
        {children}
      </Stack>
    )
  }
)
