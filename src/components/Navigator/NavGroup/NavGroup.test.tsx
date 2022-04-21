/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import { Icon, IconSize } from 'Components/Icon'
import NavGroup, { NAV_GROUP_TEST_ID } from './NavGroup'
import type NavGroupProps from './NavGroup.types'

describe('NavGroup Test >', () => {
  let props: NavGroupProps

  beforeEach(() => {
    props = {
      leftIcon: 'dot',
      name: 'general',
      content: 'test-content',
      rightContent: <Icon name="dot" size={IconSize.XS} color="bgtxt-orange-normal" />,
    }
  })

  const renderNavItem = (optionProps?: Partial<NavGroupProps>) =>
    render(<NavGroup {...props} {...optionProps} />)

  it('Snapshot > active', () => {
    const { getByTestId } = renderNavItem({ active: true })

    const rendered = getByTestId(NAV_GROUP_TEST_ID)

    expect(rendered).toMatchSnapshot()
  })

  it('Snapshot > not active', () => {
    const { getByTestId } = renderNavItem({ active: false })

    const rendered = getByTestId(NAV_GROUP_TEST_ID)

    expect(rendered).toMatchSnapshot()
  })
})
