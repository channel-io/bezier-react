/* External dependencies */
import React from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import LayoutSideType from '../../../constants/LayoutSideType'
import { SideArea } from '../SideArea'
import SideViewContentProps from './SideViewContent.types'

export const SIDE_VIEW_CONTENT_TEST_ID = 'ch-design-system-side-view-content'

function SidePanelContent({
  testId = SIDE_VIEW_CONTENT_TEST_ID,
  children,
  onChangeSideWidth = noop,
}: SideViewContentProps) {
  return (
    <SideArea
      data-testId={testId}
      sideType={LayoutSideType.SideView}
      onChangeSideWidth={onChangeSideWidth}
    >
      { children }
    </SideArea>
  )
}

export default SidePanelContent
