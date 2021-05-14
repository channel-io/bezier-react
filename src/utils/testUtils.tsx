/* External dependencies */
import React, { ReactElement } from 'react'
import { render as baseRender, RenderOptions } from '@testing-library/react'

/* Internal dependencies */
import { ChildrenComponentProps } from '../types/ComponentProps'
import {
  FoundationProvider,
  LightFoundation,
} from '../foundation'

function TestProviders({ children }: ChildrenComponentProps) {
  return (
    <FoundationProvider foundation={LightFoundation}>
      { children }
    </FoundationProvider>
  )
}

export function render(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) {
  return baseRender(ui, { wrapper: TestProviders, ...options })
}
