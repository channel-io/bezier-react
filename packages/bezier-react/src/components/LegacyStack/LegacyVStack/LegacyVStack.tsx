import React, { forwardRef } from 'react'

import { LegacyStack } from '~/src/components/LegacyStack/LegacyStack'

import type LegacyVStackProps from './LegacyVStack.types'

/**
 * @deprecated Use `VStack` instead.
 *
 * A container for vertical flex layout.
 */
export const LegacyVStack = forwardRef<HTMLElement, LegacyVStackProps>(
  function VStack(props, forwardedRef) {
    return (
      <LegacyStack
        ref={forwardedRef}
        direction="vertical"
        {...props}
      />
    )
  }
)
