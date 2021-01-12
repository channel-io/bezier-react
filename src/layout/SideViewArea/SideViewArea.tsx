/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import useLayoutState from '../../hooks/useLayoutState'
import { SideState } from '../Client/Client.types'
import { SideViewWrapper } from './SideViewArea.styled'
import SideViewAreaProps from './SideViewArea.types'

export const SPLIT_VIEW_AREA_TEST_ID = 'ch-design-system-split-view-area'

function SideViewArea(
  {
    style,
    className,
    testId = SPLIT_VIEW_AREA_TEST_ID,
    children,
    ...otherProps
  }: SideViewAreaProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const { sideState } = useLayoutState()

  if (sideState === SideState.None) { return null }

  return (
    <SideViewWrapper
      style={style}
      className={className}
      data-testid={testId}
      ref={forwardedRef}
      sideState={sideState}
      {...otherProps}
    >
      { children }
    </SideViewWrapper>
  )
}

export default forwardRef(SideViewArea)
