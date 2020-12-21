/* External dependencies */
import React, { forwardRef, useCallback, useRef } from 'react'
import { clamp } from 'lodash-es'

/* Internal dependencies */
import { useLayoutDispatch, useLayoutState } from '../Client'
import { HeaderArea } from '../HeaderArea'
import { ContentArea } from '../ContentArea'
import { SidePanelArea } from '../SidePanelArea'
import { SplitViewArea } from '../SplitViewArea'
import { ActionType as LayoutActionType } from '../Client/utils/LayoutReducer'
import { MainWrapper } from './Main.styled'
import MainProps from './Main.types'

function Main(
  {
    content,
    contentHeader,
    searchHeader,
    sidePanel,
    splitView,
    ...otherProps
  }: MainProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const dispatch = useLayoutDispatch()
  const {
    contentMinWidth,
    sideWidth,
    sideMinWidth,
    sideMaxWidth,
    navigationRef,
  } = useLayoutState()

  const contentRef = useRef<HTMLDivElement | null>(null)
  const contentInitialWidth = useRef(0)
  const sideInitialWidth = useRef(0)
  const initialPosition = useRef(0)

  const handleResizerMouseDown = useCallback((e: MouseEvent) => {
    contentInitialWidth.current = contentRef.current!.clientWidth
    initialPosition.current = e.clientX
    sideInitialWidth.current = sideWidth
    navigationRef?.current?.handleMouseDownOutside()
  }, [navigationRef, sideWidth])

  const handleResizerMouseMove = useCallback((e: MouseEvent) => {
    window.requestAnimationFrame!(() => {
      // NOTE: Resizer는 Content에 있지만 Side WIDTH를 조정합니다.
      const resizerDelta = e.clientX - initialPosition.current
      const afterContentWidth = Math.max(contentInitialWidth.current + resizerDelta, contentMinWidth)
      const navigationDelta = contentInitialWidth.current + resizerDelta - afterContentWidth

      if (navigationDelta < 0) {
        const isNavigationMinimum = navigationRef?.current?.handleMouseMoveOutside(navigationDelta)

        if (isNavigationMinimum) { return }
      }

      dispatch({
        type: LayoutActionType.SET_SIDE_WIDTH,
        payload: clamp(
          sideInitialWidth.current - resizerDelta,
          sideMinWidth,
          sideMaxWidth,
        ),
      })
    })
  }, [
    contentMinWidth,
    dispatch,
    navigationRef,
    sideMaxWidth,
    sideMinWidth,
  ])

  return (
    <MainWrapper
      ref={forwardedRef}
      contentMinWidth={contentMinWidth}
      sideWidth={sideWidth}
      {...otherProps}
    >
      <HeaderArea
        contentHeader={contentHeader}
        searchHeader={searchHeader}
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
      <SplitViewArea>
        { splitView }
      </SplitViewArea>
    </MainWrapper>
  )
}

export default forwardRef(Main)
