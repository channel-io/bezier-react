/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Meta, Story } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '../../utils/storyUtils'
import { Icon } from '../Icon'
import { IconSize } from '../Icon/Icon.types'
import ListMenuTitle from './ListMenuTitle'
import ListMenuTitleProps from './ListMenuTitle.types'

export default {
  title: getTitle(base),
} as Meta

const Template: Story<ListMenuTitleProps> = ({
  rightAction = (<div><Icon name="send-forward" size={IconSize.XS} /></div>),
  ...otherListItemProps
}) => (
  <div style={{ width: 240 }}>
    <ListMenuTitle
      rightAction={rightAction}
      {...otherListItemProps}
    />
  </div>

)

export const Primary = Template.bind({})

Primary.args = {
  content: 'this is title',
}
