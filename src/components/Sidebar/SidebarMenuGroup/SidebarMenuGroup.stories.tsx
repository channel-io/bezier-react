/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { v4 as uuid } from 'uuid'
import _ from 'lodash'

/* Internal dependencies */
import { Navigation } from '../../../layout/Navigation'
import { getTitle } from '../../../utils/utils'
import { SidebarMenuItem } from '../SidebarMenuItem'
import SidebarMenuGroup from './SidebarMenuGroup'

export default {
  title: getTitle(base),
  component: SidebarMenuGroup,
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const SIDEBAR_WIDTH = 240

const Template = ({ ...otherSidebarMenuGroupProps }) => (
  <Navigation
    withScroll
    disableResize
    title="사이드바"
    minWidth={SIDEBAR_WIDTH}
  >
    <SidebarMenuGroup
      {...otherSidebarMenuGroupProps}
    >
      { _.range(0, 4).map(n => (
        <SidebarMenuItem
          key={uuid()}
          optionKey={`menu-item-${n}`}
          content={`아이템 ${n}`}
        />
      )) }
    </SidebarMenuGroup>
  </Navigation>
)

export const Primary = Template.bind({})

Primary.args = {
  content: '전체 상태',
  leftIcon: 'sent',
  selectedOptionIndex: null,
}
