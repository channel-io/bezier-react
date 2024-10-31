'use client'

import React, { forwardRef } from 'react'

import { LegacyStackItem } from '~/src/components/LegacyStack/LegacyStackItem'

import type LegacySpacerProps from './LegacySpacer.types'

/**
 * @deprecated Use `Stack` and `justify` prop instead.
 */
export const LegacySpacer = forwardRef<HTMLElement, LegacySpacerProps>(
  function Spacer(props, forwardedRef) {
    return (
      <LegacyStackItem
        ref={forwardedRef}
        size={0}
        weight={1}
        grow
        shrink
        {...props}
      />
    )
  }
)
