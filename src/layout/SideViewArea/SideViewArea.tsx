/* External dependencies */
import React, { forwardRef } from 'react'
import useLayoutState from '../../hooks/useLayoutState'

/* Internal dependencies */
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
  const { showSideView } = useLayoutState()

  if (!showSideView) { return null }

  return (
    <SideViewWrapper
      style={style}
      className={className}
      data-testid={testId}
      ref={forwardedRef}
      {...otherProps}
    >
      { children }
    </SideViewWrapper>
  )
}

export default forwardRef(SideViewArea)
