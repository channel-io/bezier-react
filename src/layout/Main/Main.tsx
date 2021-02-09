/* External dependencies */
import React, {
  useContext,
  forwardRef,
  useCallback,
  useRef,
  useMemo,
  useLayoutEffect,
} from 'react'
import { clamp, isNil } from 'lodash-es'
import { window } from 'ssr-window'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import useLayoutDispatch from '../../hooks/useLayoutDispatch'
import useLayoutState from '../../hooks/useLayoutState'
import { CONTENT_MIN_WIDTH, SIDE_MAX_WIDTH, SIDE_MIN_WIDTH } from '../../constants/LayoutSizes'
import { HeaderArea } from '../HeaderArea'
import { ContentArea } from '../ContentArea'
import { SidePanelArea } from '../SidePanelArea'
import { SideViewArea } from '../SideViewArea'
import { ActionType as LayoutActionType } from '../Client/utils/LayoutReducer'
import { ResizingContext } from '../../contexts/LayoutContext'
import ColumnType from '../../types/ColumnType'
import { MainWrapper } from './Main.styled'
import MainProps from './Main.types'

function Main(
  {
    content,
    contentHeader,
    coverableHeader,
    sidePanel,
    sideView,
    ...otherProps
  }: MainProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const dispatch = useLayoutDispatch()
  const { sideWidth, showSideView } = useLayoutState()

  const currentKey = useMemo(() => uuid(), [])

  const { onMouseDown, onMouseMove } = useContext(ResizingContext)

  const contentRef = useRef<HTMLDivElement | null>(null)
  const sideInitialWidth = useRef(0)
  const initialPosition = useRef(0)

  const hasSide = !isNil(sidePanel) || showSideView
  const hasHeader = !isNil(contentHeader || coverableHeader)

  const handleResizerMouseDown = useCallback((e: MouseEvent) => {
    initialPosition.current = e.clientX
    sideInitialWidth.current = sideWidth!
    onMouseDown(e, currentKey)
  }, [onMouseDown, sideWidth, currentKey])

  const handleResizerMouseMove = useCallback((e: MouseEvent) => {
    if (
      onMouseMove(e) &&
      contentRef.current &&
      (contentRef.current?.clientWidth >= CONTENT_MIN_WIDTH)
    ) {
      const resizerDelta = e.clientX - initialPosition.current
      window.requestAnimationFrame!(() => {
        dispatch({
          type: LayoutActionType.SET_SIDE_WIDTH,
          payload: clamp(
            sideInitialWidth.current - resizerDelta,
            SIDE_MIN_WIDTH,
            SIDE_MAX_WIDTH,
          ),
        })
      })
    }
  }, [
    dispatch,
    onMouseMove,
  ])

  useLayoutEffect(() => {
    if (contentRef.current) {
      dispatch({
        type: LayoutActionType.ADD_COLUMN_REF,
        payload: {
          key: currentKey,
          ref: {
            target: contentRef.current,
            minWidth: CONTENT_MIN_WIDTH,
            // NOTE: maxWidth 는 존재하지 않음
            maxWidth: 0,
            initialWidth: 0,
          },
          columnType: ColumnType.Content,
        },
      })
    }

    return function cleanUp() {
      dispatch({
        type: LayoutActionType.REMOVE_COLUMN_REF,
        payload: {
          key: currentKey,
        },
      })
    }
  }, [
    dispatch,
    currentKey,
  ])

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
        contentHeader={contentHeader}
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
