/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import NavItem, { NAV_ITEM_TEST_ID } from './NavItem'
import type NavItemProps from './NavItem.types'

describe('NavItem Test >', () => {
  let props: NavItemProps

  beforeEach(() => {
    props = {
      name: 'general',
      content: 'test-content',
    }
  })

  const renderNavItem = (optionProps?: Partial<NavItemProps>) =>
    render(<NavItem {...props} {...optionProps} />)

  it('Snapshot > active', () => {
    const { getByTestId } = renderNavItem({ active: true })

    const rendered = getByTestId(NAV_ITEM_TEST_ID)

    expect(rendered).toMatchSnapshot()
  })

  it('Snapshot > not active', () => {
    const { getByTestId } = renderNavItem({ active: false })

    const rendered = getByTestId(NAV_ITEM_TEST_ID)

    expect(rendered).toMatchSnapshot()
  })
})
