import * as React from 'react'

import {
  render as baseRender,
  renderHook as baseRenderHook,
} from '@testing-library/react'

import { type ChildrenProps } from '~/src/types/props'

import { AppProvider } from '~/src/components/AppProvider'

function TestProvider({ children }: ChildrenProps) {
  return <AppProvider>{children}</AppProvider>
}

export function render(
  ui: Parameters<typeof baseRender>[0],
  options?: Parameters<typeof baseRender>[1]
) {
  return baseRender(ui, {
    wrapper: TestProvider,
    ...options,
    legacyRoot: false,
  })
}

interface RenderHookOptions<Props> {
  initialProps?: Props
  wrapper?: React.JSXElementConstructor<{ children: React.ReactNode }>
}

export function renderHook<Result, Props>(
  hook: (initialProps: Props) => Result,
  options?: RenderHookOptions<Props>
) {
  return baseRenderHook(hook, {
    wrapper: TestProvider,
    ...options,
  })
}
