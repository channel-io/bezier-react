
/* External dependencies */
import { get } from 'lodash-es'
import React, { forwardRef, useLayoutEffect } from 'react'

/* Internal dependencies */
import { SIDE_FALLBACK_WIDTH } from '../../constants/LayoutSizes'
import useLayoutDispatch from '../../hooks/useLayoutDispatch'
import useLayoutState from '../../hooks/useLayoutState'
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
  const { sideWidth } = useLayoutState()

  useLayoutEffect(() => {
    // NOTE: alwaysInitWidth 라면 route 변경시마다 initialWidth로 초기화
    // 그렇지 않다면 기존의 state값을 그대로 따른다
    // 만약 처음으로 접근한 화면이라 sideWidth값이 없다면 initialWidth 값으로 설정 한다.
    const alwaysInitWidth = get(children, 'props.alwaysInitWidth', false)
    const initialWidth = get(children, 'props.initialWidth', SIDE_FALLBACK_WIDTH)

    const payload = alwaysInitWidth ? initialWidth : (sideWidth || initialWidth)
    layoutDispatch({
      type: ActionType.SET_SIDE_WIDTH,
      payload,
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, layoutDispatch])

  if (!children) { return null }

  return (
    <SidePanelAreaWrapper
      style={style}
      className={className}
      data-testid={testId}
      ref={forwardedRef}
      {...otherProps}
    >
      { children }
    </SidePanelAreaWrapper>
  )
}

export default forwardRef(SidePanelArea)
