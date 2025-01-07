import { DotIcon } from '@channel.io/bezier-icons'

import { render } from '~/src/utils/test'

import { Icon } from '~/src/components/Icon'

import {
  NAV_GROUP_LEFT_ICON_TEST_ID,
  NAV_GROUP_TEST_ID,
  NavGroup,
} from './NavGroup'
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
})
