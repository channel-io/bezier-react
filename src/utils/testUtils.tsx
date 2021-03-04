/* External dependencies */
import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

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

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) {
  return render(ui, { wrapper: TestProviders, ...options })
}

export * from '@testing-library/react'

export { customRender as render }
