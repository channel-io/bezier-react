'use client'

import { createElement, forwardRef } from 'react'

import { BaseStack } from '~/src/v3/BaseStack/BaseStack'

import type { VStackProps } from './VStack.types'

/**
 * `VStack` is a shorthand component equivalent to `Stack` with a vertical direction property.
 * @see BaseStack
 */
export const VStack = forwardRef<HTMLElement, VStackProps>(
  function VStack(props, forwardedRef) {
    return createElement(BaseStack, {
      ...props,
      direction: 'vertical',
      ref: forwardedRef,
    })
  }
)
