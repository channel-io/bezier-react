'use client'

import { forwardRef } from 'react'

import { HStack } from '~/src/v3/HStack'

import type { ButtonGroupProps } from './ButtonGroup.types'

/**
 * `ButtonGroup` is a component that groups buttons together.
 * @example
 *
 * ```tsx
 * <ButtonGroup>
 *   <Button label="Close" />
 *   <Button label="Submit" />
 * </ButtonGroup>
 * ```
 */
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup(
    { children, justify = 'center', withoutSpacing = false, ...props },
    forwardedRef
  ) {
    return (
      <HStack
        {...props}
        role="group"
        ref={forwardedRef}
        spacing={withoutSpacing ? 0 : 6}
        justify={justify}
      >
        {children}
      </HStack>
    )
  }
)
