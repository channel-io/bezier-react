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

  it('should set the default theme name to light and add the data-bezier-preflight attribute', () => {
    render(<AppProvider><div /></AppProvider>)
    expect(document.documentElement).toHaveAttribute('data-bezier-theme', 'light')
    expect(document.documentElement).toHaveAttribute('data-bezier-preflight', '')
  })

  it('should set a custom theme name on the root element', () => {
    render(<AppProvider themeName="dark"><div /></AppProvider>)
    expect(document.documentElement).toHaveAttribute('data-bezier-theme', 'dark')
  })

  it('should not add the data-bezier-preflight attribute to the root element when preflight is false', () => {
    render(<AppProvider preflight={false}><div /></AppProvider>)
    expect(document.documentElement).not.toHaveAttribute('data-bezier-preflight', '')
  })

  it('should remove data attributes from the root element on cleanup', () => {
    const { unmount } = render(<AppProvider themeName="dark" preflight><div /></AppProvider>)
    unmount()
    expect(document.documentElement).not.toHaveAttribute('data-bezier-theme')
    expect(document.documentElement).not.toHaveAttribute('data-bezier-preflight')
  })
})
