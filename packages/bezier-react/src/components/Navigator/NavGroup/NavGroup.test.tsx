import React from 'react'

import { DotIcon } from '@channel.io/bezier-icons'

import { LightTheme } from '~/src/foundation/Colors/Theme'

import { render } from '~/src/utils/testUtils'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'

import NavGroup, {
  NAV_GROUP_LEFT_ICON_TEST_ID,
  NAV_GROUP_TEST_ID,
} from './NavGroup'
import type NavGroupProps from './NavGroup.types'

describe('NavGroup Test >', () => {
  let props: NavGroupProps

  beforeEach(() => {
    props = {
      leftIcon: 'dot',
      name: 'general',
      content: 'test-content',
      rightContent: <Icon source={DotIcon} size={IconSize.XS} color="bgtxt-orange-normal" />,
    }
  })

  const renderNavItem = (optionProps?: Partial<NavGroupProps>) =>
    render(<NavGroup {...props} {...optionProps} />)

  describe('Snapshot >', () => {
    it('Active', () => {
      const { getByTestId } = renderNavItem({ active: true })

      const rendered = getByTestId(NAV_GROUP_TEST_ID)

      expect(rendered).toMatchSnapshot()
    })

    it('Not active', () => {
      const { getByTestId } = renderNavItem({ active: false })

      const rendered = getByTestId(NAV_GROUP_TEST_ID)

      expect(rendered).toMatchSnapshot()
    })
  })

  describe('LeftIcon Color', () => {
    it('Icon color should be "bgtxt-blue-normal" when active prop is true', () => {
      const { getByTestId } = renderNavItem({ active: true })

      const rendered = getByTestId(NAV_GROUP_LEFT_ICON_TEST_ID)

      expect(rendered).toHaveStyle(`color: ${LightTheme['bgtxt-blue-normal']}`)
    })

    it('Icon color should be "txt-black-dark" when active prop is false', () => {
      const { getByTestId } = renderNavItem({ active: false })

      const rendered = getByTestId(NAV_GROUP_LEFT_ICON_TEST_ID)

      expect(rendered).toHaveStyle(`color: ${LightTheme['txt-black-dark']}`)
    })
  })
})
