/* External dependencies */
import React from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import LayoutSideType from '../../../constants/LayoutSideType'
import { SideArea } from '../SideArea'
import SidePanelContentProps from './SidePanelContent.types'

export const SIDE_PANEL_CONTENT_TEST_ID = 'ch-design-system-side-panel-content'

function SidePanelContent({
  testId = SIDE_PANEL_CONTENT_TEST_ID,
  children,
  onChangeSideWidth = noop,
}: SidePanelContentProps) {
  return (
    <SideArea
      sideType={LayoutSideType.SidePanel}
      data-testId={testId}
      onChangeSideWidth={onChangeSideWidth}
    >
      { children }
    </SideArea>
  )
}

export default SidePanelContent
