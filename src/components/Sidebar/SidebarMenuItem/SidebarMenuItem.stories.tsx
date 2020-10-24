/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { Navigation } from '../../../layout/Navigation'
import { getTitle } from '../../../utils/utils'
import SidebarMenuItem from './SidebarMenuItem'

export default {
  title: getTitle(base),
  component: SidebarMenuItem,
  argTypes: {
    onClick: { control: { action: 'onClick' } },
    active: { control: { type: 'boolean' } },
  },
}

const SIDEBAR_WIDTH = 240

const Template = ({ ...otherSidebarMenuItemProps }) => (
  <Navigation
    withScroll
    disableResize
    title="사이드바"
    minWidth={SIDEBAR_WIDTH}
  >
    <SidebarMenuItem
      optionKey="menu-item-0"
      {...otherSidebarMenuItemProps}
    />
  </Navigation>
)

export const Primary = Template.bind({})

Primary.args = {
  content: '전체 상태',
  active: false,
}
