
/* External dependencies */
import { get, isNil } from 'lodash-es'
import React, { forwardRef, useLayoutEffect } from 'react'

/* Internal dependencies */
import { SIDE_FALLBACK_WIDTH } from '../../constants/LayoutSizes'
import useLayoutDispatch from '../../hooks/useLayoutDispatch'
import useLayoutState from '../../hooks/useLayoutState'
import { SideState } from '../Client/Client.types'
import { ActionType } from '../Client/utils/LayoutReducer'
import { SidePanelAreaWrapper } from './SidePanelArea.styled'
import { SidePanelAreaProps } from './SidePanelArea.types'

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
  const layoutDispatch = useLayoutDispatch()
  const { sideWidth, sideState } = useLayoutState()

  useLayoutEffect(() => {
    // NOTE: 이미 사이드뷰가 띄워져 있는 상태라면 아무것도 하지 않는다.
    if (sideState === SideState.SideView) { return }

    // NOTE: children이 없으면 SideState.None으로 설정한다.
    if (children) {
      // NOTE: initialWidth가 있으면 해당 값을, 없다면 가존 sideWidth 값을 그대로 가져 온다.
      // 만약 처음으로 접근한 화면이라 sideWidth값도 없다면 fallback 값으로 설정 한다.
      const width = get(children, 'props.initialWidth', sideWidth)
      layoutDispatch({
        type: ActionType.SET_SIDE_STATE,
        payload: isNil(children) ? SideState.None : SideState.SidePanel,
      })
      layoutDispatch({
        type: ActionType.SET_SIDE_WIDTH,
        payload: width || SIDE_FALLBACK_WIDTH,
      })
    }
  }, [children, layoutDispatch, sideState, sideWidth])

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
