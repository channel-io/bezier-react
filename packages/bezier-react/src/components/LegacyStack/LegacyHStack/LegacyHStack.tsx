import React, { forwardRef } from 'react'

import { LegacyStack } from '~/src/components/LegacyStack/LegacyStack'

import type LegacyHStackProps from './LegacyHStack.types'

/**
 * A container for horizontal flex layout.
 */
export const LegacyHStack = forwardRef<HTMLElement, LegacyHStackProps>(function HStack(
  props,
  forwardedRef,
) {
  return (<LegacyStack ref={forwardedRef} direction="horizontal" {...props} />)
})
