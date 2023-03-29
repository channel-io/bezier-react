/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import {
  type Meta,
  type Story,
} from '@storybook/react'

/* Internal dependencies */
import { getTitle } from '~/src/utils/storyUtils'
import {
  LegacyIcon,
  IconSize,
} from '~/src/components/Icon'
import ListMenuTitle from './ListMenuTitle'
import type ListMenuTitleProps from './ListMenuTitle.types'

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
