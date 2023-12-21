import React, { forwardRef } from 'react'
import type { Ref } from 'react'

import { LegacyStackItem } from '~/src/components/LegacyStack/StackItem'

import type SpacerProps from './Spacer.types'

export const Spacer = forwardRef(function Spacer(
  props: SpacerProps,
  forwardedRef: Ref<HTMLElement>,
) {
  return (
    <LegacyStackItem
      ref={forwardedRef}
      size={0}
      weight={1}
      grow
      shrink
      {...props}
    />
  )
})
