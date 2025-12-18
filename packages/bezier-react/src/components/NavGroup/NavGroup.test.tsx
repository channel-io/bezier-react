import * as React from 'react'

import { SettingsIcon } from '@channel.io/bezier-icons'

import { render } from '~/src/utils/test'

import { NavItem } from '~/src/components/NavItem'

import { NavGroup } from './NavGroup'
import type { NavGroupProps } from './NavGroup.types'

describe('NavGroup >', () => {
  const renderNavGroup = (props: Partial<NavGroupProps> = {}) =>
    render(
      <NavGroup
        name="test"
        content="Test Group"
        leftContent={SettingsIcon}
        {...props}
      />
    )

  it('should render', () => {
    const { getByTestId } = renderNavGroup()
    const navGroup = getByTestId('bezier-nav-group')
    expect(navGroup).toBeInTheDocument()
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(
      <NavGroup
        ref={ref}
        name="test"
        content="Test Group"
        leftContent={SettingsIcon}
      />
    )
    expect(ref.current).toBeInTheDocument()
  })

  it('should render children when open is true', () => {
    const { getByRole } = renderNavGroup({
      open: true,
      children: (
        <NavItem
          name="item1"
          content="Item 1"
          href="#item1"
        />
      ),
    })
    const menu = getByRole('menu')
    expect(menu).toBeInTheDocument()
  })

  it('should not render children when open is false', () => {
    const { queryByRole } = renderNavGroup({
      open: false,
      children: (
        <NavItem
          name="item1"
          content="Item 1"
          href="#item1"
        />
      ),
    })
    const menu = queryByRole('menu')
    expect(menu).not.toBeInTheDocument()
  })

  it('should call onClick handler', () => {
    const onClick = jest.fn()
    const { getByTestId } = renderNavGroup({ onClick })
    const navGroup = getByTestId('bezier-nav-group')
    navGroup.click()
    expect(onClick).toHaveBeenCalled()
  })

  it('should apply active class when active is true', () => {
    const { getByTestId } = renderNavGroup({ active: true })
    const navGroup = getByTestId('bezier-nav-group')
    expect(navGroup).toHaveClass('active')
  })
})
