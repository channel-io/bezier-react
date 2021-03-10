/* External dependencies */
import React, { forwardRef, useCallback, useMemo, useRef, useState } from 'react'
import { noop, clamp } from 'lodash-es'
import { document } from 'ssr-window'

/* Internal dependencies */
import useEventHandler from '../../../hooks/useEventHandler'
import useLayoutState from '../../../hooks/useLayoutState'
import useResizingHandlers from '../../../hooks/useResizingHandlers'
import { ActionType as LayoutActionType } from '../../Client/utils/LayoutReducer'
import { CONTENT_MIN_WIDTH, SIDE_MAX_WIDTH, SIDE_MIN_WIDTH } from '../../../constants/LayoutSizes'
import useLayoutDispatch from '../../../hooks/useLayoutDispatch'
import { Resizer, ScrollWrapper, SideAreaWrapper } from './SideArea.styled'
import SideAreaProps from './SideArea.types'

export const SIDE_AREA_TEST_ID = 'ch-design-system-side-area'

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
  const { sideWidth, showSideView, orderedColumnKeys, columnRefs } = useLayoutState()
  const [isDragging, setIsDragging] = useState(false)

  const sideInitialWidth = useRef(0)
  const initialPosition = useRef(0)
  const [resizeBarRef, setResizeBarRef] = useState<HTMLDivElement | null>(null)

  const { handleResizeStart, handleResizing } = useResizingHandlers()

  // NOTE: Content는 언제나 마지막 순서이다
  const contentKey = useMemo(() => (orderedColumnKeys[orderedColumnKeys.length - 1]), [orderedColumnKeys])
  const contentRef = useMemo(() => (columnRefs[contentKey]?.target), [columnRefs, contentKey])

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
          dispatch({
            type: LayoutActionType.SET_SIDE_WIDTH,
            payload: resultSideWidth,
          })
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
  }, [sideWidth, handleResizeStart, contentKey])

  const handleResizerMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEventHandler(resizeBarRef, 'mousedown', handleResizerMouseDown)
  useEventHandler(document, 'mousemove', handleResizerMouseMove, isDragging)
  useEventHandler(document, 'mouseup', handleResizerMouseUp)

  return (
    <SideAreaWrapper
      data-testId={testId}
      ref={forwardedRef}
      sideType={sideType}
      showSideView={showSideView}
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
