/* External dependencies */
import React from 'react'
import LayoutSideType from '../../../constants/LayoutSideType'
import { SideArea } from '../SideArea'
import SideViewContentProps from './SideViewContent.types'
/* Internal dependencies */

export const SIDE_VIEW_CONTENT_TEST_ID = 'ch-design-system-side-view-content'

function SidePanelContent({
  testId = SIDE_VIEW_CONTENT_TEST_ID,
  children,
}: SideViewContentProps) {
  return (
    <SideArea
      data-testId={testId}
      sideType={LayoutSideType.SideView}
    >
      { children }
    </SideArea>
  )
}

export default SidePanelContent
