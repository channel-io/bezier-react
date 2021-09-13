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

/* Internal dependencies */
import ColumnType from '../../../types/ColumnType'
import useResizingHandlers from '../../../hooks/useResizingHandlers'
import useLayoutDispatch from '../../../hooks/useLayoutDispatch'
import useLayoutState from '../../../hooks/useLayoutState'
import useThrottledCallback from '../../../hooks/useThrottledCallback'
import useEventHandler from '../../../hooks/useEventHandler'
import useMergeRefs from '../../../hooks/useMergeRefs'
import LayoutActions from '../../redux/LayoutActions'
import {
  window,
  document,
} from '../../../utils/domUtils'
import NavigationProps from './NavigationArea.types'
import {
  ResizeBar,
  NavigationContainer,
  NavigationPositioner,
  NavigationPresenter,
} from './NavigationArea.styled'

const MAX_NAV_Z_INDEX = 100

// TODO: 테스트 코드 작성
const NAV_TEST_ID = 'bezier-react-nav'

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
    showNavigation,
  }: NavigationProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const dispatch = useLayoutDispatch()
  const { columnStates, orderedColumnKeys } = useLayoutState()

  const { handleResizeStart, handleResizing } = useResizingHandlers()

  const hidable = useMemo(() => (
    columnStates[currentKey]
      ? columnStates[currentKey].hidable
      : false
  ), [
    columnStates,
    currentKey,
  ])

  const disableResize = useMemo(() => (
    !showNavigation ||
    columnStates[currentKey]?.disableResize ||
    false
  ), [
    showNavigation,
    columnStates,
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
      if (!allowMouseMove) { return }
      handleResizing(event)
    })
  }, [
    disableResize,
    allowMouseMove,
    handleResizing,
  ])

  useEventHandler(resizeBarRef, 'mousedown', handleMouseDown)
  useEventHandler(document, 'mouseup', handleMouseUp)
  useEventHandler(document, 'mousemove', handleMouseMove, allowMouseMove)

  const handlePresenterMouseEnter = useThrottledCallback(() => {
    if (hidable) {
      setShowChevron(true)
    }
  }, 100, undefined, [hidable])

  const handlePresenterMouseLeave = useThrottledCallback(() => {
    setShowChevron(false)
  }, 100, undefined, [])

  const handleDecideHover = useThrottledCallback((ev: MouseEvent) => {
    const mouseX = ev.clientX
    const containerLeft = containerRef.current?.getBoundingClientRect().left || 0
    const presenterRight = presenterRef.current?.getBoundingClientRect().right || 0

    setIsHoveringOnPresenter(mouseX < presenterRight && mouseX > containerLeft)
  }, 350, undefined, [])

  useEffect(() => {
    if (showNavigation === false) {
      document.addEventListener!('mousemove', handleDecideHover, false)
    } else {
      document.removeEventListener!('mousemove', handleDecideHover, false)
    }
  }, [
    showNavigation,
    handleDecideHover,
  ])

  useLayoutEffect(() => {
    if (presenterRef.current) {
      presenterRef.current.style.width = `${columnStates[currentKey]?.initialWidth}px`

      const payload = {
        key: currentKey,
        ref: {
          target: presenterRef.current,
          minWidth: columnStates[currentKey]?.minWidth,
          maxWidth: columnStates[currentKey]?.maxWidth,
          initialWidth: columnStates[currentKey]?.initialWidth,
        },
        columnType: ColumnType.Nav,
      }

      dispatch(LayoutActions.addColumnRef(payload))
    }

    return function cleanUp() {
      const payload = {
        key: currentKey,
      }

      dispatch(LayoutActions.removeColumnRef(payload))
    }
  }, [
    dispatch,
    currentKey,
    columnStates,
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
      showNavigation={showNavigation}
    >
      <NavigationPositioner>
        <NavigationPresenter
          style={style}
          ref={mergedPresenterRef}
          className={className}
          showNavigation={showNavigation}
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
