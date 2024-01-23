import React, { forwardRef } from 'react'
import type { Ref } from 'react'

import { LegacyStackItem } from '~/src/components/LegacyStack/LegacyStackItem'

import type LegacySpacerProps from './LegacySpacer.types'

export const LegacySpacer = forwardRef(function Spacer(
  props: LegacySpacerProps,
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
