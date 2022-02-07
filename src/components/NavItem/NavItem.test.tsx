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
      content: 'test-content',
    }
  })

  const renderNavItem = (optionProps?: NavItemProps) =>
    render(<NavItem {...props} {...optionProps} />)

  it('Snapshot > ', () => {
    const { getByTestId } = renderNavItem()

    const rendered = getByTestId(NAV_ITEM_TEST_ID)

    expect(rendered).toMatchSnapshot()
  })
})
