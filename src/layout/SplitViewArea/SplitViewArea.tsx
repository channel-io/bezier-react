/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import useLayoutState from '../../hooks/useLayoutState'
import { SideState } from '../Client/Client.types'
import { SplitViewWrapper } from './SplitViewArea.styled'
import SplitViewAreaProps from './SplitViewArea.types'

export const SPLIT_VIEW_AREA_TEST_ID = 'ch-design-system-split-view-area'

function SplitViewArea(
  {
    style,
    className,
    testId = SPLIT_VIEW_AREA_TEST_ID,
    children,
    ...otherProps
  }: SplitViewAreaProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const { sideState } = useLayoutState()

  if (sideState === SideState.None) { return null }

  return (
    <SplitViewWrapper
      style={style}
      className={className}
      data-testid={testId}
      ref={forwardedRef}
      sideState={sideState}
      {...otherProps}
    >
      { children }
    </SplitViewWrapper>
  )
}

export default forwardRef(SplitViewArea)
