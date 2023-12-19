import React, { forwardRef } from 'react'
import type { Ref } from 'react'

import { LegacyStack } from '~/src/components/LegacyStack/Stack'

import type HStackProps from './HStack.types'

/**
 * A container for horizontal flex layout.
 */
export const HStack = forwardRef(function HStack(
  props: HStackProps,
  forwardedRef: Ref<HTMLElement>,
) {
  return (<LegacyStack ref={forwardedRef} direction="horizontal" {...props} />)
})
