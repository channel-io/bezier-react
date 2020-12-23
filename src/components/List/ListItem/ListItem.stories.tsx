/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { NavigationArea, Navigations } from '../../../layout/Navigations'
import { getTitle } from '../../../utils/utils'
import ListItem from './ListItem'

export default {
  title: getTitle(base),
  component: ListItem,
  argTypes: {
    onClick: { control: { action: 'onClick' } },
    active: { control: { type: 'boolean' } },
  },
}

const SIDEBAR_WIDTH = 240

const Template = ({ ...otherListItemProps }) => (
  <Navigations>
    <NavigationArea
      withScroll
      disableResize
      title="사이드바"
      minWidth={SIDEBAR_WIDTH}
    >
      <ListItem
        optionKey="menu-item-0"
        {...otherListItemProps}
      />
    </NavigationArea>
  </Navigations>
)

export const Primary = Template.bind({})

Primary.args = {
  content: '전체 상태',
  active: false,
}
