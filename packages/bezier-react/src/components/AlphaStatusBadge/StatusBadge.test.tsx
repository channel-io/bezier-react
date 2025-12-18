import * as React from 'react'

import { betaTokenCssVar } from '~/src/utils/style'
import { render } from '~/src/utils/test'

import { StatusBadge } from './StatusBadge'
import type { StatusBadgeProps } from './StatusBadge.types'

describe('StatusBadge >', () => {
  const renderStatusBadge = (props?: StatusBadgeProps) =>
    render(<StatusBadge {...props} />)

  it('should render', () => {
    const { container } = renderStatusBadge()
    const badge = container.querySelector('div')
    expect(badge).toBeInTheDocument()
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<StatusBadge ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })

  it('should receive style', () => {
    const { container } = renderStatusBadge({ style: { color: 'red' } })
    const badge = container.querySelector('div')
    expect(badge).toHaveStyle('color: red')
  })

  it('should receive class name', () => {
    const { container } = renderStatusBadge({ className: 'test-class' })
    const badge = container.querySelector('div')
    expect(badge).toHaveClass('test-class')
  })

  it('should apply size class', () => {
    const { container } = renderStatusBadge({ size: 'm' })
    const badge = container.querySelector('div')
    expect(badge).toHaveClass('size-m')
  })

  describe('iconColor logic', () => {
    it('should use text-accent-green when online is true', () => {
      const { container } = renderStatusBadge({
        online: true,
        doNotDisturb: false,
      })
      const badge = container.querySelector('div')
      const expectedColor = betaTokenCssVar('text-accent-green')
      expect(badge).toHaveStyle(`--b-status-bg-color: ${expectedColor}`)
    })

    it('should use text-accent-yellow when doNotDisturb is true and online is false', () => {
      const { container } = renderStatusBadge({
        online: false,
        doNotDisturb: true,
      })
      const badge = container.querySelector('div')
      const expectedColor = betaTokenCssVar('surface-high')
      expect(badge).toHaveStyle(`--b-status-bg-color: ${expectedColor}`)
    })

    it('should use fill-neutral-heavy when both online and doNotDisturb are false', () => {
      const { container } = renderStatusBadge({
        online: false,
        doNotDisturb: false,
      })
      const badge = container.querySelector('div')
      const expectedColor = betaTokenCssVar('fill-neutral-heavy')
      expect(badge).toHaveStyle(`--b-status-bg-color: ${expectedColor}`)
    })
  })

  describe('backgroundColor logic', () => {
    it('should use surface-high when doNotDisturb is true', () => {
      const { container } = renderStatusBadge({
        online: false,
        doNotDisturb: true,
      })
      const badge = container.querySelector('div')
      const expectedColor = betaTokenCssVar('surface-high')
      expect(badge).toHaveStyle(`--b-status-bg-color: ${expectedColor}`)
    })

    it('should use iconColor when doNotDisturb is false', () => {
      const { container } = renderStatusBadge({
        online: true,
        doNotDisturb: false,
      })
      const badge = container.querySelector('div')
      const expectedColor = betaTokenCssVar('text-accent-green')
      expect(badge).toHaveStyle(`--b-status-bg-color: ${expectedColor}`)
    })
  })

  describe('icon rendering', () => {
    it('should render icon when doNotDisturb is true', () => {
      const { container } = renderStatusBadge({ doNotDisturb: true })
      const icon = container.querySelector('svg')
      expect(icon).toBeInTheDocument()
    })

    it('should not render icon when doNotDisturb is false', () => {
      const { container } = renderStatusBadge({ doNotDisturb: false })
      const icon = container.querySelector('svg')
      expect(icon).not.toBeInTheDocument()
    })

    it('should use xxxs icon size when size is m and doNotDisturb is true', () => {
      const { container } = renderStatusBadge({ size: 'm', doNotDisturb: true })
      const icon = container.querySelector('svg')
      expect(icon).toBeInTheDocument()
    })

    it('should use xs icon size when size is l and doNotDisturb is true', () => {
      const { container } = renderStatusBadge({ size: 'l', doNotDisturb: true })
      const icon = container.querySelector('svg')
      expect(icon).toBeInTheDocument()
    })
  })
})
