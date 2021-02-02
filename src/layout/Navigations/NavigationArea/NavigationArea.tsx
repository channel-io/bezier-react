/* External dependencies */
import React, {
  forwardRef,
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react'
import { noop } from 'lodash-es'
import { window, document } from 'ssr-window'

/* Internal dependencies */
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

export const NAV_TEST_ID = 'ch-design-system-nav'

function NavigationArea(
  {
    style,
    className,
    testId = NAV_TEST_ID,
    /* cloneElement Props */
    hidable = false,
    disableResize = false,
    optionIndex = 0,
    onMouseDown = noop,
    onMouseMove = noop,
    children,
    ...otherProps
  }: NavigationProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const dispatch = useLayoutDispatch()
  const { showNavigation } = useLayoutState()

  const show = useMemo(() => (hidable ? showNavigation : undefined), [hidable, showNavigation])

  const containerRef = useRef<HTMLDivElement | null>(null)
  const presenterRef = useRef<HTMLDivElement | null>(null)
  const mergedPresenterRef = useMergeRefs<HTMLDivElement>(presenterRef, forwardedRef)
  const [resizeBarRef, setResizeBarRef] = useState<HTMLDivElement | null>(null)

  const [allowMouseMove, setAllowMouseMove] = useState(false)
  const [showChevron, setShowChevron] = useState(false)
  const [isHoveringOnPresenter, setIsHoveringOnPresenter] = useState(false)

  const handleMouseDown = useCallback((event: HTMLElementEventMap['mousedown']) => {
    onMouseDown(event, optionIndex)
    setAllowMouseMove(true)
  }, [optionIndex, onMouseDown])

  const handleMouseUp = useCallback(() => {
    setAllowMouseMove(false)
  }, [])

  const handleMouseMove = useCallback((event: HTMLElementEventMap['mousemove']) => {
    if (disableResize) { return }

    window.requestAnimationFrame!(() => {
      if (!allowMouseMove) return
      onMouseMove(event)
    })
  }, [
    disableResize,
    allowMouseMove,
    onMouseMove,
  ])

  useEventHandler(resizeBarRef, 'mousedown', handleMouseDown)
  useEventHandler(document, 'mouseup', handleMouseUp)
  useEventHandler(document, 'mousemove', handleMouseMove, allowMouseMove)

  const handlePresenterMouseEnter = useThrottledCallback(() => {
    if (!hidable) { return }

    if (show) {
      setShowChevron(true)
    }
  }, 100, undefined, [show])

  const handlePresenterMouseLeave = useThrottledCallback(() => {
    setShowChevron(false)
  }, 100, undefined, [])

  const handleClickClose = useCallback(() => {
    dispatch({
      type: ActionType.SET_SHOW_NAVIGATION,
      payload: false,
    })

    setShowChevron(false)
    setIsHoveringOnPresenter(true)
  }, [dispatch])

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

  const ContentComponent = useMemo(() => (
    React.cloneElement(children, {
      showChevron,
      allowMouseMove,
      isHoveringOnPresenter,
      onClickClose: handleClickClose,
    })
  ), [allowMouseMove, children, handleClickClose, isHoveringOnPresenter, showChevron])

  return (
    <NavigationContainer
      ref={containerRef}
      data-testid={testId}
      showNavigation={show}
      {...otherProps}
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
          { ContentComponent }
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
