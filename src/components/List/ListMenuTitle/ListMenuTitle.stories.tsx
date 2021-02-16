/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../../utils/etcUtils'
import { Icon } from '../../Icon'
import { IconSize } from '../../Icon/Icon.types'
import ListMenuTitle from './ListMenuTitle'

export default {
  title: getTitle(base),
}

const Template = ({
  rightAction = (<div><Icon name="sent" size={IconSize.XS} /></div>),
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
