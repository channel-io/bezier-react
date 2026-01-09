import * as React from 'react'

import { colorTokenCssVar } from '~/src/utils/style'
import { render } from '~/src/utils/test'

import { Status } from './Status'
import type { StatusProps } from './Status.types'

describe('Status >', () => {
  const renderStatus = (props: StatusProps) => render(<Status {...props} />)

  it('should render', () => {
    const { container } = renderStatus({ type: 'online' })
    const status = container.querySelector('div')
    expect(status).toBeInTheDocument()
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <Status
        ref={ref}
        type="online"
      />
    )
    expect(ref.current).toBeInTheDocument()
  })

  it('should apply size class', () => {
    const { container } = renderStatus({ type: 'online', size: 'm' })
    const status = container.querySelector('div')
    expect(status).toHaveClass('size-m')
  })

  describe('icon rendering', () => {
    it('should render icon for online-crescent type', () => {
      const { container } = renderStatus({ type: 'online-crescent' })
      const icon = container.querySelector('svg')
      expect(icon).toBeInTheDocument()
    })

    it('should render icon for offline-crescent type', () => {
      const { container } = renderStatus({ type: 'offline-crescent' })
      const icon = container.querySelector('svg')
      expect(icon).toBeInTheDocument()
    })

    it('should render icon for lock type', () => {
      const { container } = renderStatus({ type: 'lock' })
      const icon = container.querySelector('svg')
      expect(icon).toBeInTheDocument()
    })

    it('should not render icon for online type', () => {
      const { container } = renderStatus({ type: 'online' })
      const icon = container.querySelector('svg')
      expect(icon).not.toBeInTheDocument()
    })

    it('should not render icon for offline type', () => {
      const { container } = renderStatus({ type: 'offline' })
      const icon = container.querySelector('svg')
      expect(icon).not.toBeInTheDocument()
    })
  })

  describe('backgroundColor logic', () => {
    it('should use surface-high when type has icon', () => {
      const { container } = renderStatus({ type: 'online-crescent' })
      const status = container.querySelector('div')
      const expectedColor = colorTokenCssVar('surface-high')
      expect(status).toHaveStyle(`--b-status-bg-color: ${expectedColor}`)
    })

    it('should use statusColor when type does not have icon', () => {
      const { container } = renderStatus({ type: 'online' })
      const status = container.querySelector('div')
      const expectedColor = colorTokenCssVar('text-accent-green')
      expect(status).toHaveStyle(`--b-status-bg-color: ${expectedColor}`)
    })
  })
})
