/* External dependencies */
import React, { forwardRef } from 'react'
import type { Ref } from 'react'

/* Internal dependencies */
import type VStackProps from './VStack.types'
import { Stack } from '~/src/components/Stack/Stack'

/**
 * A container for vertical flex layout.
 */
export const VStack = forwardRef(function VStack(
  props: VStackProps,
  forwardedRef: Ref<HTMLElement>,
) {
  return (<Stack ref={forwardedRef} direction="vertical" {...props} />)
})
