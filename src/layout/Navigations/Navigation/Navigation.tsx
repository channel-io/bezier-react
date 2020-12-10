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
import { window, document, extend } from 'ssr-window'

/* Internal dependencies */
import useThrottleCallback from '../../../hooks/useThrottleCallback'
import useEventHandler from '../../../hooks/useEventHandler'
import useMergeRefs from '../../../hooks/useMergeRefs'
import NavigationProps from './Navigation.types'
import {
  ResizeBar,
  NavigationContainer,
  NavigationPositioner,
  NavigationPresenter,
  StyledTitleWrapper,
  StyledContentWrapper,
  StyledFooterWrapper,
  ChevronIcon,
} from './Navigation.styled'

export const NAV_TEST_ID = 'ch-design-system-nav'

extend(document, {
  requestAnimationFrame() {},
})

function Navigation(
  {
    style,
    className,
    testId = NAV_TEST_ID,
    header,
    stickyFooter,
    showSidebar, // disable hiding when undefined
    setShowSidebar = noop,
    /* original navigation props - comment will be deleted after replace original nav */
    disableResize = false,
    fixedHeader = false,
    scrollRef,
    scrollClassName,
    withScroll = false,
    onScroll,
    /* cloneElement Props */
    optionIndex = 0,
    onMouseDown = noop,
    onMouseUp = noop,
    onMouseMove = noop,
    children,
    ...otherProps
  }: NavigationProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const presenterRef = useRef<HTMLDivElement | null>(null)
  const mergedPresenterRef = useMergeRefs<HTMLDivElement>(presenterRef, forwardedRef)
  const [resizeBarRef, setResizeBarRef] = useState<HTMLDivElement | null>(null)

  const [allowMouseMove, setAllowMouseMove] = useState(false)
  const [showChevron, setShowChevron] = useState(false)
  const [hoverPresenter, setHoverPresenter] = useState(false)

  const handleMouseDown = useCallback((event: HTMLElementEventMap['mousedown']) => {
    onMouseDown(event, optionIndex)
    setAllowMouseMove(true)
  }, [optionIndex, onMouseDown])

  const handleMouseUp = useCallback(() => {
    setAllowMouseMove(false)
    onMouseUp()
  }, [onMouseUp])

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

  const handlePresenterMouseEnter = useThrottleCallback(() => {
    if (showSidebar) {
      setShowChevron(true)
    }
  }, 100, undefined, [showSidebar])

  const handlePresenterMouseLeave = useThrottleCallback(() => {
    setShowChevron(false)
  }, 100, undefined, [])

  const handleClickClose = useCallback(() => {
    setShowSidebar(false)
    setShowChevron(false)
    setHoverPresenter(true)
  }, [setShowSidebar])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDecideHover = useThrottleCallback((ev: MouseEvent) => {
    const mouseX = ev.clientX
    const containerLeft = containerRef.current?.getBoundingClientRect().left || 0
    const presenterRight = presenterRef.current?.getBoundingClientRect().right || 0

    setHoverPresenter(mouseX < presenterRight && mouseX > containerLeft)
  }, 100, undefined, [])

  useEffect(() => {
    if (showSidebar === false) {
      document.addEventListener!('mousemove', handleDecideHover, false)
    } else {
      document.removeEventListener!('mousemove', handleDecideHover, false)
    }
  }, [handleDecideHover, showSidebar])

  const HeaderComponent = useMemo(() => {
    if (!header) { return null }

    return (
      <StyledTitleWrapper fixed={fixedHeader}>
        { /* Background 등 처리를 위해 */ }
        { React.cloneElement(header!, { isHover: hoverPresenter }) }
        { showChevron && !allowMouseMove && (
          <ChevronIcon
            name="chevron-left-double"
            onClick={handleClickClose}
            marginRight={10}
          />
        ) }
      </StyledTitleWrapper>
    )
  }, [
    allowMouseMove,
    header,
    fixedHeader,
    showChevron,
    handleClickClose,
    hoverPresenter,
  ])

  return (
    <NavigationContainer
      ref={containerRef}
      data-testid={testId}
      showSidebar={showSidebar}
      {...otherProps}
    >
      <NavigationPositioner>
        <NavigationPresenter
          ref={mergedPresenterRef}
          className={className}
          showSidebar={showSidebar}
          isHover={hoverPresenter}
          onMouseEnter={handlePresenterMouseEnter}
          onMouseLeave={handlePresenterMouseLeave}
        >
          { (header && fixedHeader) && (
            HeaderComponent
          ) }
          <StyledContentWrapper
            ref={scrollRef}
            className={scrollClassName}
            withScroll={withScroll}
            onScroll={onScroll}
          >
            { (header && !fixedHeader) && (
              HeaderComponent
            ) }
            { children }
          </StyledContentWrapper>
          { stickyFooter && (
            <StyledFooterWrapper>
              { stickyFooter }
            </StyledFooterWrapper>
          ) }
        </NavigationPresenter>
      </NavigationPositioner>
      <ResizeBar ref={setResizeBarRef} />
    </NavigationContainer>
  )
}

export default forwardRef(Navigation)
