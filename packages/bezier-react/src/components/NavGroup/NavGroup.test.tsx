import { DotIcon } from '@channel.io/bezier-icons'

import { render } from '~/src/utils/test'

import { Icon } from '~/src/components/Icon'

import { NAV_GROUP_LEFT_ICON_TEST_ID, NavGroup } from './NavGroup'
import type { NavGroupProps } from './NavGroup.types'

describe('NavGroup Test >', () => {
  let props: NavGroupProps

  beforeEach(() => {
    props = {
      leftContent: DotIcon,
      name: 'general',
      content: 'test-content',
      rightContent: (
        <Icon
          source={DotIcon}
          size="xs"
          color="bgtxt-orange-normal"
        />
      ),
    }
  })

  const renderNavItem = (optionProps?: Partial<NavGroupProps>) =>
    render(
      <NavGroup
        {...props}
        {...optionProps}
      />
    )

  describe('LeftIcon Color', () => {
    it('Icon color should be "bgtxt-blue-normal" when active prop is true', () => {
      const { getByTestId } = renderNavItem({ active: true })

      const rendered = getByTestId(NAV_GROUP_LEFT_ICON_TEST_ID)

      expect(rendered).toHaveStyle('--b-icon-color: var(--bgtxt-blue-normal)')
    })

    it('Icon color should be "txt-black-dark" when active prop is false', () => {
      const { getByTestId } = renderNavItem({ active: false })

      const rendered = getByTestId(NAV_GROUP_LEFT_ICON_TEST_ID)

      expect(rendered).toHaveStyle('--b-icon-color: var(--txt-black-dark)')
    })
  })
})
