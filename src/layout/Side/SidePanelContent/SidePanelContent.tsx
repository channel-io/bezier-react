/* External dependencies */
import React from 'react'

/* Internal dependencies */
import LayoutSideType from '../../../constants/LayoutSideType'
import { SideArea } from '../SideArea'

export const SIDE_PANEL_CONTENT_TEST_ID = 'ch-design-system-side-panel-content'

function SidePanelContent({
  testId = SIDE_PANEL_CONTENT_TEST_ID,
  children,
}) {
  return (
    <SideArea
      sideType={LayoutSideType.SidePanel}
      data-testId={testId}
    >
      { children }
    </SideArea>
  )
}

export default SidePanelContent
