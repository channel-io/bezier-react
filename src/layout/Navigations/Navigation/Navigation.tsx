/* External dependencies */
import React, {
  forwardRef,
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react'
import { noop, throttle } from 'lodash-es'
import { window, document, extend } from 'ssr-window'

/* Internal dependencies */
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
    header, // text
    stickyFooter,
    showSidebar, // disable hiding function when undefined
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

  const handlePresenterMouseEnter = throttle(useCallback(() => {
    // if (isNil(showSidebar)) { return }
    if (showSidebar) {
      setShowChevron(true)
    }
  }, [showSidebar]), 100)

  const handlePresenterMouseLeave = throttle(useCallback(() => {
    setShowChevron(false)
  }, []), 100)

  const handleClickClose = useCallback(() => {
    setShowSidebar(false)
    setShowChevron(false)
    setHoverPresenter(true)
  }, [setShowSidebar])

  const handleDecideHover = useCallback((ev) => {
    const mouseX = ev.clientX
    const containerLeft = containerRef.current?.getBoundingClientRect().left || 0
    const presenterRight = presenterRef.current?.getBoundingClientRect().right || 0

    setHoverPresenter(mouseX < presenterRight && mouseX > containerLeft)
  }, [])

  useEffect(() => {
    const throttledMove = throttle(handleDecideHover, 100)
    if (showSidebar === false) {
      document.addEventListener!('mousemove', throttledMove, false)
    } else {
      document.removeEventListener!('mousemove', throttledMove, false)
    }
  }, [
    handleDecideHover,
    showSidebar,
  ])

  const HeaderComponent = useMemo(() => (
    <StyledTitleWrapper fixed={fixedHeader}>
      { header }
      { showChevron && !allowMouseMove && (
        <ChevronIcon
          name="chevron-left-double"
          onClick={handleClickClose}
        />
      ) }
    </StyledTitleWrapper>
  ), [
    allowMouseMove,
    header,
    fixedHeader,
    showChevron,
    handleClickClose,
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
            data-testid
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
