import React, { forwardRef } from 'react'
import type { Ref } from 'react'

import { StackItem } from '~/src/components/Stack/StackItem'

import type SpacerProps from './Spacer.types'

export const Spacer = forwardRef(function Spacer(
  props: SpacerProps,
  forwardedRef: Ref<HTMLElement>,
) {
  return (
    <StackItem
      ref={forwardedRef}
      size={0}
      weight={1}
      grow
      shrink
      {...props}
    />
  )
})
