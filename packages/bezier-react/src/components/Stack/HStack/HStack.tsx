/* External dependencies */
import React, { forwardRef } from 'react'
import type { Ref } from 'react'

/* Internal dependencies */
import type HStackProps from './HStack.types'
import { Stack } from '~/src/components/Stack/Stack'

/**
 * A container for horizontal flex layout.
 */
export const HStack = forwardRef(function HStack(
  props: HStackProps,
  forwardedRef: Ref<HTMLElement>,
) {
  return (<Stack ref={forwardedRef} direction="horizontal" {...props} />)
})
