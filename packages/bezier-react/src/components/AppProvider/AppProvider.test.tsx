import React from 'react'

import {
  cleanup,
  render,
} from '@testing-library/react'

import { AppProvider } from './AppProvider'

describe('AppProvider', () => {
  afterEach(cleanup)

  it('should render children', () => {
    const { getByText } = render(<AppProvider><div>Test</div></AppProvider>)
    expect(getByText('Test')).toBeInTheDocument()
  })

  it('should set the default theme name to light', () => {
    render(<AppProvider><div /></AppProvider>)
    expect(document.documentElement).toHaveAttribute('data-bezier-theme', 'light')
  })

  it('should set a custom theme name on the root element', () => {
    render(<AppProvider themeName="dark"><div /></AppProvider>)
    expect(document.documentElement).toHaveAttribute('data-bezier-theme', 'dark')
  })

  it('should remove data attributes from the root element on cleanup', () => {
    const { unmount } = render(<AppProvider themeName="dark"><div /></AppProvider>)
    unmount()
    expect(document.documentElement).not.toHaveAttribute('data-bezier-theme')
  })
})
