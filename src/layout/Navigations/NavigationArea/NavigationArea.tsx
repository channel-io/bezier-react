/* External dependencies */
import React, {
  forwardRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react'
import { window, document } from 'ssr-window'

/* Internal dependencies */
import ColumnType from '../../../types/ColumnType'
import useResizingHandlers from '../../../hooks/useResizingHandlers'
import useLayoutDispatch from '../../../hooks/useLayoutDispatch'
import useLayoutState from '../../../hooks/useLayoutState'
import useThrottledCallback from '../../../hooks/useThrottledCallback'
import useEventHandler from '../../../hooks/useEventHandler'
import useMergeRefs from '../../../hooks/useMergeRefs'
import { ActionType } from '../../Client/utils/LayoutReducer'
import NavigationProps from './NavigationArea.types'
import {
  ResizeBar,
  NavigationContainer,
  NavigationPositioner,
  NavigationPresenter,
} from './NavigationArea.styled'

const MAX_NAV_Z_INDEX = 100

export const NAV_TEST_ID = 'ch-design-system-nav'

function NavigationArea(
  {
    style,
    className,
    testId = NAV_TEST_ID,
    currentKey = '',
    allowMouseMove,
    setAllowMouseMove,
    setShowChevron,
    isHoveringOnPresenter,
    setIsHoveringOnPresenter,
    children,
  }: NavigationProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const dispatch = useLayoutDispatch()
  const { showNavigation, columnOptions, orderedColumnKeys } = useLayoutState()

  const { handleResizeStart, handleResizing } = useResizingHandlers()

  const hidable = useMemo(() => columnOptions[currentKey]?.hidable || false, [columnOptions, currentKey])
  const show = useMemo(() => (!hidable || showNavigation), [hidable, showNavigation])
  const disableResize = useMemo(() => (
    !show ||
    columnOptions[currentKey]?.disableResize ||
    false
  ), [
    show,
    columnOptions,
    currentKey,
  ])

  const containerRef = useRef<HTMLDivElement | null>(null)
  const presenterRef = useRef<HTMLDivElement | null>(null)
  const mergedPresenterRef = useMergeRefs<HTMLDivElement>(presenterRef, forwardedRef)
  const [resizeBarRef, setResizeBarRef] = useState<HTMLDivElement | null>(null)

  const handleMouseDown = useCallback((event: HTMLElementEventMap['mousedown']) => {
    handleResizeStart(event, currentKey)
    setAllowMouseMove(true)
  }, [
    currentKey,
    handleResizeStart,
    setAllowMouseMove,
  ])

  const handleMouseUp = useCallback(() => {
    setAllowMouseMove(false)
  }, [setAllowMouseMove])

  const handleMouseMove = useCallback((event: HTMLElementEventMap['mousemove']) => {
    if (disableResize) { return }

    window.requestAnimationFrame!(() => {
      if (!allowMouseMove) return
      handleResizing(event)
    })
  }, [disableResize, allowMouseMove, handleResizing])

  useEventHandler(resizeBarRef, 'mousedown', handleMouseDown)
  useEventHandler(document, 'mouseup', handleMouseUp)
  useEventHandler(document, 'mousemove', handleMouseMove, allowMouseMove)

  const handlePresenterMouseEnter = useThrottledCallback(() => {
    if (hidable) {
      setShowChevron(true)
    }
  }, 100, undefined, [show, hidable])

  const handlePresenterMouseLeave = useThrottledCallback(() => {
    setShowChevron(false)
  }, 100, undefined, [])

  const handleDecideHover = useThrottledCallback((ev: MouseEvent) => {
    const mouseX = ev.clientX
    const containerLeft = containerRef.current?.getBoundingClientRect().left || 0
    const presenterRight = presenterRef.current?.getBoundingClientRect().right || 0

    setIsHoveringOnPresenter(mouseX < presenterRight && mouseX > containerLeft)
  }, 100, undefined, [])

  useEffect(() => {
    if (show === false) {
      document.addEventListener!('mousemove', handleDecideHover, false)
    } else {
      document.removeEventListener!('mousemove', handleDecideHover, false)
    }
  }, [handleDecideHover, show])

  useLayoutEffect(() => {
    if (presenterRef.current) {
      presenterRef.current.style.width = `${columnOptions[currentKey]?.initialWidth}px`

      dispatch({
        type: ActionType.ADD_COLUMN_REF,
        payload: {
          key: currentKey,
          ref: {
            target: presenterRef.current,
            minWidth: columnOptions[currentKey]?.minWidth,
            maxWidth: columnOptions[currentKey]?.maxWidth,
            initialWidth: columnOptions[currentKey]?.initialWidth,
          },
          columnType: ColumnType.Nav,
        },
      })
    }

    return function cleanUp() {
      dispatch({
        type: ActionType.REMOVE_COLUMN_REF,
        payload: {
          key: currentKey,
        },
      })
    }
  }, [
    dispatch,
    currentKey,
    columnOptions,
  ])

  useLayoutEffect(() => {
    if (presenterRef.current) {
      presenterRef.current.style.zIndex = (MAX_NAV_Z_INDEX - orderedColumnKeys.indexOf(currentKey)).toString()
    }
  }, [
    currentKey,
    orderedColumnKeys,
  ])

  return (
    <NavigationContainer
      ref={containerRef}
      data-testid={testId}
      showNavigation={show}
    >
      <NavigationPositioner>
        <NavigationPresenter
          style={style}
          ref={mergedPresenterRef}
          className={className}
          showNavigation={show}
          isHover={isHoveringOnPresenter}
          onMouseEnter={handlePresenterMouseEnter}
          onMouseLeave={handlePresenterMouseLeave}
        >
          { children }
        </NavigationPresenter>
      </NavigationPositioner>
      <ResizeBar
        ref={setResizeBarRef}
        disable={disableResize}
      />
    </NavigationContainer>
  )
}

export default forwardRef(NavigationArea)
