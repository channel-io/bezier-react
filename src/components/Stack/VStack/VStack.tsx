/* External dependencies */
import React, { forwardRef } from 'react'
import type { Ref } from 'react'

/* Internal dependencies */
import { Stack } from 'Components/Stack/Stack'
import type VStackProps from './VStack.types'

/**
 * A container for vertical flex layout.
 */
function VStack(
  props: VStackProps,
  forwardedRef: Ref<HTMLElement>,
) {
  return (<Stack ref={forwardedRef} direction="horizontal" {...props} />)
}

export default forwardRef(VStack)
