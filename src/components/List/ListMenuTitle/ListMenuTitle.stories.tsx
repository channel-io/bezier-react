/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { NavigationArea, Navigations } from '../../../layout/Navigations'
import { getTitle } from '../../../utils/utils'
import { Icon } from '../../Icon'
import { IconSize } from '../../Icon/Icon.types'
import ListMenuTitle from './ListMenuTitle'

export default {
  title: getTitle(base),
}

const SIDEBAR_WIDTH = 240

const Template = ({
  rightAction = (<div><Icon name="sent" size={IconSize.XS} /></div>),
  ...otherListItemProps
}) => (
  <Navigations>
    <NavigationArea
      withScroll
      disableResize
      title="사이드바"
      minWidth={SIDEBAR_WIDTH}
    >
      <ListMenuTitle
        rightAction={rightAction}
        {...otherListItemProps}
      />
    </NavigationArea>
  </Navigations>

)

export const Primary = Template.bind({})

Primary.args = {
  content: 'this is title',
}
