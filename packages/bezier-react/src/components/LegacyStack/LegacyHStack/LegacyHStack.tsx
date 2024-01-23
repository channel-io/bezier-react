import React, { forwardRef } from 'react'
import type { Ref } from 'react'

import { LegacyStack } from '~/src/components/LegacyStack/LegacyStack'

import type LegacyHStackProps from './LegacyHStack.types'

/**
 * A container for horizontal flex layout.
 */
export const LegacyHStack = forwardRef(function HStack(
  props: LegacyHStackProps,
  forwardedRef: Ref<HTMLElement>,
) {
  return (<LegacyStack ref={forwardedRef} direction="horizontal" {...props} />)
})
