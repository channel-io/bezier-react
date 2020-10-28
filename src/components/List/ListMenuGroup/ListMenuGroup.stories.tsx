/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { v4 as uuid } from 'uuid'
import { range } from 'lodash-es'

/* Internal dependencies */
import { Navigation } from '../../../layout/Navigation'
import { getTitle } from '../../../utils/utils'
import { ListItem } from '../ListItem'
import ListMenuGroup from './ListMenuGroup'

export default {
  title: getTitle(base),
  component: ListMenuGroup,
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const SIDEBAR_WIDTH = 240

const Template = ({ ...otherListMenuGroupProps }) => (
  <Navigation
    withScroll
    disableResize
    title="사이드바"
    minWidth={SIDEBAR_WIDTH}
  >
    <ListMenuGroup
      {...otherListMenuGroupProps}
    >
      { range(0, 4).map(n => (
        <ListItem
          key={uuid()}
          optionKey={`menu-item-${n}`}
          content={`아이템 ${n}`}
        />
      )) }
    </ListMenuGroup>
  </Navigation>
)

export const Primary = Template.bind({})

Primary.args = {
  content: '전체 상태',
  leftIcon: 'sent',
  selectedOptionIndex: null,
}
