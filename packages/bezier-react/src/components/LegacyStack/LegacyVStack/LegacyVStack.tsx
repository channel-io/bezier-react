import React, { forwardRef } from 'react'
import type { Ref } from 'react'

import { LegacyStack } from '~/src/components/LegacyStack/LegacyStack'

import type LegacyVStackProps from './LegacyVStack.types'

/**
 * A container for vertical flex layout.
 */
export const LegacyVStack = forwardRef(function VStack(
  props: LegacyVStackProps,
  forwardedRef: Ref<HTMLElement>,
) {
  return (<LegacyStack ref={forwardedRef} direction="vertical" {...props} />)
})
