/* External dependencies */
import React, { forwardRef, useCallback, useRef } from 'react'
import { clamp, get, isNil } from 'lodash-es'
import { window } from 'ssr-window'

/* Internal dependencies */
import useLayoutDispatch from '../../hooks/useLayoutDispatch'
import useLayoutState from '../../hooks/useLayoutState'
import { CONTENT_MIN_WIDTH, SIDE_MAX_WIDTH, SIDE_MIN_WIDTH } from '../../constants/LayoutSizes'
import { HeaderArea } from '../HeaderArea'
import { ContentArea } from '../ContentArea'
import { SidePanelArea } from '../SidePanelArea'
import { SideViewArea } from '../SideViewArea'
import { ActionType as LayoutActionType } from '../Client/utils/LayoutReducer'
import { MainWrapper } from './Main.styled'
import MainProps from './Main.types'

function Main(
  {
    content,
    header,
    sidePanel,
    sideView,
    navigationRef,
    ...otherProps
  }: MainProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const dispatch = useLayoutDispatch()
  const { sideWidth, showSideView } = useLayoutState()

  const contentRef = useRef<HTMLDivElement | null>(null)
  const contentInitialWidth = useRef(0)
  const sideInitialWidth = useRef(0)
  const initialPosition = useRef(0)

  const mainHeader = get(header, 'props.mainHeader', null)
  const coverableHeader = get(header, 'props.coverableHeader', null)

  const hasSide = !isNil(sidePanel) || showSideView
  const hasHeader = !isNil(mainHeader || coverableHeader)

  const handleResizerMouseDown = useCallback((e: MouseEvent) => {
    contentInitialWidth.current = contentRef.current!.clientWidth
    initialPosition.current = e.clientX
    sideInitialWidth.current = sideWidth!
    navigationRef?.current?.handleMouseDownOutside()
  }, [navigationRef, sideWidth])

  const handleResizerMouseMove = useCallback((e: MouseEvent) => {
    window.requestAnimationFrame!(() => {
      const resizerDelta = e.clientX - initialPosition.current
      const afterContentWidth = Math.max(contentInitialWidth.current + resizerDelta, CONTENT_MIN_WIDTH)
      const navigationDelta = contentInitialWidth.current + resizerDelta - afterContentWidth
      if (navigationDelta < 0) {
        const isNavigationMinimum = navigationRef?.current?.handleMouseMoveOutside(navigationDelta)

        if (isNavigationMinimum) { return }
      }

      dispatch({
        type: LayoutActionType.SET_SIDE_WIDTH,
        payload: clamp(
          sideInitialWidth.current - resizerDelta,
          SIDE_MIN_WIDTH,
          SIDE_MAX_WIDTH,
        ),
      })
    })
  }, [dispatch, navigationRef])

  return (
    <MainWrapper
      ref={forwardedRef}
      hasHeader={hasHeader}
      hasSide={hasSide}
      sideWidth={sideWidth}
      {...otherProps}
    >
      <HeaderArea
        hasHeader={hasHeader}
        mainHeader={mainHeader}
        coverableHeader={coverableHeader}
      />
      <ContentArea
        ref={contentRef}
        onResizerMouseDown={handleResizerMouseDown}
        onResizerMouseMove={handleResizerMouseMove}
      >
        { content }
      </ContentArea>
      <SidePanelArea>
        { sidePanel }
      </SidePanelArea>
      <SideViewArea>
        { sideView }
      </SideViewArea>
    </MainWrapper>
  )
}

export default forwardRef(Main)
