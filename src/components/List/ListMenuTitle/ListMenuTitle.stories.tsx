/* External dependencies */
import React from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { Navigation } from '../../../layout/Navigation'
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
  <Navigation
    withScroll
    disableResize
    title="사이드바"
    minWidth={SIDEBAR_WIDTH}
  >
    <ListMenuTitle
      rightAction={rightAction}
      {...otherListItemProps}
    />
  </Navigation>

)

export const Primary = Template.bind({})

Primary.args = {
  content: 'this is title',
}
