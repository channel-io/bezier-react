/* External dependencies */
import React from 'react'

import {
  render as baseRender,
  renderHook as baseRenderHook,
} from '@testing-library/react'

/* Internal dependencies */
import { LightFoundation } from '~/src/foundation'

import BezierProvider from '~/src/providers/BezierProvider'
import { type ChildrenProps } from '~/src/types/ComponentProps'

function TestProviders({ children }: ChildrenProps) {
  return (
    <BezierProvider foundation={LightFoundation}>
      { children }
    </BezierProvider>
  )
}

export function render(
  ui: Parameters<typeof baseRender>[0],
  options?: Parameters<typeof baseRender>[1],
) {
  return baseRender(ui, {
    wrapper: TestProviders,
    ...options,
    legacyRoot: false,
  })
}

interface RenderHookOptions<Props> {
  initialProps?: Props
  wrapper?: React.JSXElementConstructor<{ children: React.ReactElement }>
}

export function renderHook<Result, Props>(
  hook: (initialProps: Props) => Result,
  options?: RenderHookOptions<Props>,
) {
  return baseRenderHook(hook, {
    wrapper: TestProviders,
    ...options,
  })
}
