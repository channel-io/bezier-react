/* External dependencies */
import React, { forwardRef } from 'react'
import type { Ref } from 'react'

/* Internal dependencies */
import { Stack } from 'Components/Stack/Stack'
import type VStackProps from './VStack.types'

/**
 * A container for vertical flex layout.
 */
export const VStack = forwardRef(function VStack(
  props: VStackProps,
  forwardedRef: Ref<HTMLElement>,
) {
  return (<Stack ref={forwardedRef} direction="vertical" {...props} />)
})
