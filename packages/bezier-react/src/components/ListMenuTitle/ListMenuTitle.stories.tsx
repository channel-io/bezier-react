/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Meta, Story } from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '~/src/utils/storyUtils'
import ListMenuTitle from './ListMenuTitle'
import ListMenuTitleProps from './ListMenuTitle.types'
import { LegacyIcon, IconSize } from '~/src/components/Icon'

export default {
  title: getTitle(base),
} as Meta

const Template: Story<ListMenuTitleProps> = ({
  rightAction = (<div><LegacyIcon name="send-forward" size={IconSize.XS} /></div>),
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
