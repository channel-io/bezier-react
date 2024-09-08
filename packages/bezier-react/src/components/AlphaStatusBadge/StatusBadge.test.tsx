import React from 'react'

import { render } from '~/src/utils/test'

import { StatusBadge } from './StatusBadge'
import { type StatusBadgeProps } from './StatusBadge.types'

describe('StatusBadge', () => {
  let props: StatusBadgeProps

  beforeEach(() => {
    props = {}
  })

  afterAll(() => {
    jest.resetAllMocks()
  })

  const renderComponent = (otherProps?: StatusBadgeProps) =>
    render(
      <StatusBadge
        {...props}
        {...otherProps}
      />
    )

  it('should match snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('medium status badge', () => {
    const { container } = renderComponent({ size: 'm' })
    expect(container).toMatchSnapshot()
  })
  it('large status badge', () => {
    const { container } = renderComponent({ size: 'l' })
    expect(container).toMatchSnapshot()
  })

  it('online status', () => {
    const { container } = renderComponent({ online: true })
    expect(container).toMatchSnapshot()
  })
  it('offline status', () => {
    const { container } = renderComponent({ online: false })
    expect(container).toMatchSnapshot()
  })

  it('do not disturb (online) status', () => {
    const { container } = renderComponent({ doNotDisturb: true, online: true })
    expect(container).toMatchSnapshot()
  })
  it('do not disturb (offline) status', () => {
    const { container } = renderComponent({ doNotDisturb: true, online: false })
    expect(container).toMatchSnapshot()
  })
})
