
/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import useLayoutState from '../../hooks/useLayoutState'
import { SideState } from '../Client/Client.types'
import { SidePanelAreaWrapper } from './SidePanelArea.styled'
import SidePanelAreaProps from './SidePanelArea.types'

export const SIDE_PANEL_AREA_TEST_ID = 'ch-design-system-side-panel-area'

function SidePanelArea(
  {
    style,
    className,
    testId = SIDE_PANEL_AREA_TEST_ID,
    children,
    ...otherProps
  }: SidePanelAreaProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const { sideState } = useLayoutState()

  if (sideState === SideState.None) { return null }

  return (
    <SidePanelAreaWrapper
      style={style}
      className={className}
      data-testid={testId}
      ref={forwardedRef}
      sideState={sideState}
      {...otherProps}
    >
      { children }
    </SidePanelAreaWrapper>
  )
}

export default forwardRef(SidePanelArea)
