/* External dependencies */
import React, { ReactElement } from 'react'
import { render as baseRender, RenderOptions } from '@testing-library/react'

/* Internal dependencies */
import { LightFoundation } from 'Foundation'
import BezierProvider from 'Providers/BezierProvider'
import { ChildrenProps } from 'Types/ComponentProps'

function TestProviders({ children }: ChildrenProps) {
  return (
    <BezierProvider foundation={LightFoundation}>
      { children }
    </BezierProvider>
  )
}

export function render(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) {
  return baseRender(ui, { wrapper: TestProviders, ...options })
}
