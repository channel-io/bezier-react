'use client'

import { createElement, forwardRef } from 'react'

import { BaseStack } from '~/src/beta/BaseStack/BaseStack'

import type { HStackProps } from './HStack.types'



/**
 * `HStack` is a shorthand component equivalent to `Stack` with a horizontal direction property.
 * @see BaseStack
 */
export const HStack = forwardRef<HTMLElement, HStackProps>(
  function HStack(props, forwardedRef) {
    return createElement(BaseStack, {
      ...props,
      direction: 'horizontal',
      ref: forwardedRef,
    })
  }
)
