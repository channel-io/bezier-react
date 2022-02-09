/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import NavGroup, { NAV_GROUP_TEST_ID } from './NavGroup'
import type NavGroupProps from './NavGroup.types'

describe('NavItem Test >', () => {
  let props: NavGroupProps

  beforeEach(() => {
    props = {
      leftIcon: 'dot',
      name: 'general',
      content: 'test-content',
    }
  })

  const renderNavItem = (optionProps?: NavGroupProps) =>
    render(<NavGroup {...props} {...optionProps} />)

  it('Snapshot > ', () => {
    const { getByTestId } = renderNavItem()

    const rendered = getByTestId(NAV_GROUP_TEST_ID)

    expect(rendered).toMatchSnapshot()
  })
})
