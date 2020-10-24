/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { Navigation } from '../../../layout/Navigation'
import { getTitle } from '../../../utils/utils'
import { Icon } from '../../Icon'
import { IconSize } from '../../Icon/Icon.types'
import SidebarMenuTitle from './SidebarMenuTitle'

export default {
  title: getTitle(base),
}

const SIDEBAR_WIDTH = 240

const Template = ({
  rightAction = (<div><Icon name="sent" size={IconSize.XS} /></div>),
  ...otherSidebarMenuItemProps
}) => (
  <Navigation
    withScroll
    disableResize
    title="사이드바"
    minWidth={SIDEBAR_WIDTH}
  >
    <SidebarMenuTitle
      rightAction={rightAction}
      {...otherSidebarMenuItemProps}
    />
  </Navigation>

)

export const Primary = Template.bind({})

Primary.args = {
  content: 'this is title',
}
