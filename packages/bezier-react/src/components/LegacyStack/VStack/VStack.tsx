import React, { forwardRef } from 'react'
import type { Ref } from 'react'

import { LegacyStack } from '~/src/components/LegacyStack/Stack'

import type VStackProps from './VStack.types'

/**
 * A container for vertical flex layout.
 */
export const VStack = forwardRef(function VStack(
  props: VStackProps,
  forwardedRef: Ref<HTMLElement>,
) {
  return (<LegacyStack ref={forwardedRef} direction="vertical" {...props} />)
})
