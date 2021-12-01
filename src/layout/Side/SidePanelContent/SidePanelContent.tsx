/* External dependencies */
import React, { forwardRef, Ref } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import LayoutSideType from '../../types/LayoutSideType'
import { SideArea } from '../SideArea'
import SidePanelContentProps from './SidePanelContent.types'

// TODO: 테스트 코드 작성
const SIDE_PANEL_CONTENT_TEST_ID = 'bezier-react-side-panel-content'

function SidePanelContent(
  {
    testId = SIDE_PANEL_CONTENT_TEST_ID,
    children,
    onChangeSideWidth = noop,
  }: SidePanelContentProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  return (
    <SideArea
      ref={forwardedRef}
      sideType={LayoutSideType.SidePanel}
      data-testid={testId}
      onChangeSideWidth={onChangeSideWidth}
    >
      { children }
    </SideArea>
  )
}

export default forwardRef(SidePanelContent)
