/* External dependencies */
import React, { forwardRef, useCallback, useMemo, useRef, useState } from 'react'
import { noop, clamp } from 'lodash-es'

/* Internal dependencies */
import useEventHandler from 'Hooks/useEventHandler'
import { document } from 'Utils/domUtils'
import { LayoutActions } from 'Layout/redux'
import useLayoutState from 'Layout/hooks/useLayoutState'
import useResizingHandlers from 'Layout/hooks/useResizingHandlers'
import { CONTENT_MIN_WIDTH, SIDE_MAX_WIDTH, SIDE_MIN_WIDTH } from 'Layout/LayoutSizes'
import useLayoutDispatch from 'Layout/hooks/useLayoutDispatch'
import { Resizer, ScrollWrapper, SideAreaWrapper } from './SideArea.styled'
import SideAreaProps from './SideArea.types'

// TODO: 테스트 코드 작성
const SIDE_AREA_TEST_ID = 'bezier-react-side-area'

function SideArea(
  {
    testId = SIDE_AREA_TEST_ID,
    children,
    sideType,
    onChangeSideWidth = noop,
    ...otherProps
  }: SideAreaProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const dispatch = useLayoutDispatch()
  const { sideWidth, orderedColumnKeys, columnRefs } = useLayoutState()
  const [isDragging, setIsDragging] = useState(false)

  const sideInitialWidth = useRef(0)
  const initialPosition = useRef(0)
  const [resizeBarRef, setResizeBarRef] = useState<HTMLDivElement | null>(null)

  const { handleResizeStart, handleResizing } = useResizingHandlers()

  // NOTE: Content는 언제나 마지막 순서이다
  const contentKey = useMemo(() => (orderedColumnKeys[orderedColumnKeys.length - 1]), [orderedColumnKeys])
  const contentRef = useMemo(() => (
    columnRefs[contentKey]?.target
  ), [
    columnRefs,
    contentKey,
  ])

  const handleResizerMouseMove = useCallback((e: HTMLElementEventMap['mousemove']) => {
    if (
      handleResizing(e) &&
      contentRef &&
      (contentRef?.clientWidth >= CONTENT_MIN_WIDTH)
    ) {
      const resultSideWidth = clamp(
        sideInitialWidth.current - (e.clientX - initialPosition.current),
        SIDE_MIN_WIDTH,
        SIDE_MAX_WIDTH,
      )

      if (sideWidth !== resultSideWidth) {
        window.requestAnimationFrame!(() => {
          onChangeSideWidth(resultSideWidth)
          dispatch(LayoutActions.setSideWidth(resultSideWidth))
        })
      }
    }
  }, [
    contentRef,
    dispatch,
    handleResizing,
    sideWidth,
    onChangeSideWidth,
  ])

  const handleResizerMouseDown = useCallback((event: HTMLElementEventMap['mousedown']) => {
    setIsDragging(true)
    initialPosition.current = event.clientX
    sideInitialWidth.current = sideWidth!
    handleResizeStart(event, contentKey)
  }, [
    sideWidth,
    handleResizeStart,
    contentKey,
  ])

  const handleResizerMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEventHandler(resizeBarRef, 'mousedown', handleResizerMouseDown)
  useEventHandler(document, 'mousemove', handleResizerMouseMove, isDragging)
  useEventHandler(document, 'mouseup', handleResizerMouseUp)

  return (
    <SideAreaWrapper
      data-testid={testId}
      ref={forwardedRef}
      sideType={sideType}
      {...otherProps}
    >
      <ScrollWrapper>
        { children }
      </ScrollWrapper>
      <Resizer
        ref={setResizeBarRef}
      />
    </SideAreaWrapper>
  )
}

export default forwardRef(SideArea)
