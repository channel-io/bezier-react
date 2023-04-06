/* External dependencies */
import React, { forwardRef } from 'react'
import type { Ref } from 'react'

/* Internal dependencies */
import { Stack } from '~/src/components/Stack/Stack'

import type HStackProps from './HStack.types'

/**
 * A container for horizontal flex layout.
 */
export const HStack = forwardRef(function HStack(
  props: HStackProps,
  forwardedRef: Ref<HTMLElement>,
) {
  return (<Stack ref={forwardedRef} direction="horizontal" {...props} />)
})
