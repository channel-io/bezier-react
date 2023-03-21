/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { LightTheme } from '~/src/foundation/Colors/Theme'
import { render } from '~/src/utils/testUtils'
import NavItem, {
  NAV_ITEM_LEFT_ICON_TEST_ID,
  NAV_ITEM_TEST_ID,
} from './NavItem'
import type NavItemProps from './NavItem.types'

describe('NavItem Test >', () => {
  let props: NavItemProps

  beforeEach(() => {
    props = {
      leftIcon: 'dot',
      name: 'general',
      content: 'test-content',
    }
  })

  const renderNavItem = (optionProps?: Partial<NavItemProps>) =>
    render(<NavItem {...props} {...optionProps} />)

  describe('Snapshot >', () => {
    it('Active', () => {
      const { getByTestId } = renderNavItem({ active: true })

      const rendered = getByTestId(NAV_ITEM_TEST_ID)

      expect(rendered).toMatchSnapshot()
    })

    it('Not active', () => {
      const { getByTestId } = renderNavItem({ active: false })

      const rendered = getByTestId(NAV_ITEM_TEST_ID)

      expect(rendered).toMatchSnapshot()
    })
  })

  describe('LeftIcon Color', () => {
    it('Icon color should be "bgtxt-blue-normal" when active prop is true', () => {
      const { getByTestId } = renderNavItem({ active: true })

      const rendered = getByTestId(NAV_ITEM_LEFT_ICON_TEST_ID)

      expect(rendered).toHaveStyle(`color: ${LightTheme['bgtxt-blue-normal']}`)
    })

    it('Icon color should be "txt-black-dark" when active prop is false', () => {
      const { getByTestId } = renderNavItem({ active: false })

      const rendered = getByTestId(NAV_ITEM_LEFT_ICON_TEST_ID)

      expect(rendered).toHaveStyle(`color: ${LightTheme['txt-black-dark']}`)
    })
  })
})
