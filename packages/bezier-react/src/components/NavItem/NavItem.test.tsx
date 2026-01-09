import * as React from 'react'

import { SettingsIcon } from '@channel.io/bezier-icons'

import { render } from '~/src/utils/test'

import { NavItem } from './NavItem'
import type { NavItemProps } from './NavItem.types'

describe('NavItem >', () => {
  const renderNavItem = (props: Partial<NavItemProps> = {}) =>
    render(
      <NavItem
        name="test"
        content="Test Item"
        href="#test"
        {...props}
      />
    )

  it('should render', () => {
    const { getByTestId } = renderNavItem()
    const navItem = getByTestId('bezier-nav-item')
    expect(navItem).toBeInTheDocument()
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLAnchorElement>()
    render(
      <NavItem
        ref={ref}
        name="test"
        content="Test Item"
        href="#test"
      />
    )
    expect(ref.current).toBeInTheDocument()
  })

  it('should render icon when leftContent is provided', () => {
    const { getByTestId } = renderNavItem({ leftContent: SettingsIcon })
    const icon = getByTestId('bezier-nav-item-left-icon')
    expect(icon).toBeInTheDocument()
  })

  it('should not render icon when leftContent is not provided', () => {
    const { queryByTestId } = renderNavItem()
    const icon = queryByTestId('bezier-nav-item-left-icon')
    expect(icon).not.toBeInTheDocument()
  })

  it('should call onClick handler', () => {
    const onClick = jest.fn()
    const { getByTestId } = renderNavItem({ onClick })
    const navItem = getByTestId('bezier-nav-item')
    navItem.click()
    expect(onClick).toHaveBeenCalled()
  })

  it('should apply active class when active is true', () => {
    const { getByTestId } = renderNavItem({ active: true })
    const navItem = getByTestId('bezier-nav-item')
    expect(navItem).toHaveClass('active')
  })
})
