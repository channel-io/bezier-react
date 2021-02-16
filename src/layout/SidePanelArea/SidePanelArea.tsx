
/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { SidePanelAreaWrapper } from './SidePanelArea.styled'
import { SidePanelAreaProps } from './SidePanelArea.types'

export const SIDE_PANEL_AREA_TEST_ID = 'ch-design-system-side-panel-area'

function SidePanelArea(
  {
    testId = SIDE_PANEL_AREA_TEST_ID,
    children,
  }: SidePanelAreaProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  return (
    <SidePanelAreaWrapper
      data-testid={testId}
      ref={forwardedRef}
    >
      { children }
    </SidePanelAreaWrapper>
  )
}

export default forwardRef(SidePanelArea)
