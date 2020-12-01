/* External dependencies */
import React, {
  forwardRef,
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react'
import { isNil, noop, throttle } from 'lodash-es'
import { window, document, extend } from 'ssr-window'

/* Internal dependencies */
import useEventHandler from '../../../hooks/useEventHandler'
import useMergeRefs from '../../../hooks/useMergeRefs'
import { Icon } from '../../../components/Icon'
import { Text } from '../../../components/Text'
import Typography from '../../../styling/Typography'
import NavigationProps from './Navigation.types'
import {
  ResizeBar,
  NavigationContainer,
  NavigationPositioner,
  NavigationPresenter,
  TitleItemWrapper,
  TitleWrapper,
} from './Navigation.styled'

extend(document, {
  requestAnimationFrame() {},
})

function Navigation({
  className = '',
  title = undefined,
  showSidebar = undefined,
  setShowSidebar = noop,
  /* cloneElement Props */
  optionIndex = 0,
  onMouseDown = noop,
  onMouseUp = noop,
  onMouseMove = noop,
  children,
}: NavigationProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mergedContainerRef = useMergeRefs<HTMLDivElement>(containerRef, forwardedRef)
  const presenterRef = useRef<HTMLDivElement | null>(null)

  const [allowMouseMove, setAllowMouseMove] = useState(false)
  const [resizeBarRef, setResizeBarRef] = useState<HTMLDivElement | null>(null)
  const [showChevron, setShowChevron] = useState(false)
  const [hoverPresenter, setHoverPresenter] = useState(false)
  const [containerWidth, setContainerWidth] = useState<number | undefined>(0)

  useEffect(() => {
    setContainerWidth(containerRef.current?.clientWidth)
  }, [containerRef.current?.clientWidth])

  const handleMouseDown = useCallback((event: HTMLElementEventMap['mousedown']) => {
    onMouseDown(event, optionIndex)
    setAllowMouseMove(true)
  }, [optionIndex, onMouseDown])

  const handleMouseUp = useCallback(() => {
    setAllowMouseMove(false)
    onMouseUp()
  }, [onMouseUp])

  const handleMouseMove = useCallback((event: HTMLElementEventMap['mousemove']) => {
    window.requestAnimationFrame!(() => {
      if (!allowMouseMove) return
      onMouseMove(event)
    })
  }, [allowMouseMove, onMouseMove])

  useEventHandler(resizeBarRef, 'mousedown', handleMouseDown)
  useEventHandler(document, 'mouseup', handleMouseUp)
  useEventHandler(document, 'mousemove', handleMouseMove, allowMouseMove)

  const handlePresenterMouseEnter = useCallback(() => {
    if (isNil(showSidebar)) { return }
    if (showSidebar) {
      setShowChevron(true)
    }
  }, [
    showSidebar,
  ])

  const handlePresenterMouseLeave = useCallback(() => {
    setShowChevron(false)
  }, [
  ])

  const handleClickClose = useCallback(() => {
    setShowSidebar(false)
    containerRef.current!.style.width = '0'
    setShowChevron(false)
    setHoverPresenter(true)
  }, [
    setShowSidebar,
  ])

  const handleDecideHover = useCallback((ev) => {
    const mouseX = ev.clientX
    const containerLeft = containerRef.current?.getBoundingClientRect().right || 0
    const presenterRight = presenterRef.current?.getBoundingClientRect().right || 0

    if (mouseX < presenterRight && mouseX > containerLeft) {
      setHoverPresenter(true)
    } else {
      setHoverPresenter(false)
    }
  }, [])

  useEffect(() => {
    const throttledMove = throttle(handleDecideHover, 100)
    if (!showSidebar) {
      document.addEventListener!('mousemove', throttledMove, false)
    } else {
      document.removeEventListener!('mousemove', throttledMove, false)
    }
  }, [
    handleDecideHover,
    showSidebar,
  ])

  const TitleComponent = useMemo(() => (
    <TitleItemWrapper>
      <Text
        as="div"
        bold
        typo={Typography.Size24}
      >
        { title }
      </Text>
    </TitleItemWrapper>
  ), [
    title,
  ])

  const SwitcherComponent = useMemo(() => (
    <Icon
      name="chevron-left-double"
      onClick={handleClickClose}
    />
  ),
  [
    handleClickClose,
  ])

  return (
    <NavigationContainer
      ref={mergedContainerRef}
      className={className}
    >
      <NavigationPositioner>
        <NavigationPresenter
          ref={presenterRef}
          width={containerWidth}
          showSidebar={showSidebar}
          isHover={hoverPresenter}
          onMouseEnter={handlePresenterMouseEnter}
          onMouseLeave={handlePresenterMouseLeave}
        >
          <TitleWrapper>
            { title && TitleComponent }
            { showChevron && !allowMouseMove && SwitcherComponent }
          </TitleWrapper>
          { children }
        </NavigationPresenter>
      </NavigationPositioner>
      <ResizeBar ref={setResizeBarRef} />
    </NavigationContainer>
  )
}

export default forwardRef(Navigation)
