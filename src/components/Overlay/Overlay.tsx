/* External dependencies */
import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  Ref,
  forwardRef,
} from 'react'
import ReactDOM from 'react-dom'
import { noop } from 'lodash-es'

/* Internal dependencies */
import useMergeRefs from '../../hooks/useMergeRefs'
import OverlayProps, {
  EventHandler,
  getOverlayStyleProps,
  getOverlayPositionProps,
  getOverlayTranslateProps,
} from './Overlay.types'
import OverlayPosition from './OverlayPosition'
import { Container, Wrapper, StyledOverlay } from './Overlay.styled'

export const CONTAINER_TEST_ID = 'ch-design-system-container'
export const WRAPPER_TEST_ID = 'ch-design-system-wrapper'
export const OVERLAY_TEST_ID = 'ch-design-system-overlay'

const ESCAPE_KEY = 'Escape'
const rootElement = document.getElementById('root')

function listen<K extends keyof HTMLElementEventMap>(element: any, eventName: K, handler: EventHandler<K>) {
  if (!element) return noop

  element.addEventListener(eventName, handler)
  return function cleanup() {
    element.removeEventListener(eventName, handler)
  }
}

function getOverlayPosition({ container, target }: getOverlayPositionProps) {
  const { top: targetTop, left: targetLeft } = target.getBoundingClientRect()

  const top = container ?
    targetTop - target.clientTop - container.getBoundingClientRect().top + container.scrollTop :
    targetTop - target.clientTop
  const left = container ?
    targetLeft - target.clientLeft - container.getBoundingClientRect().left + container.scrollLeft :
    targetLeft - target.clientLeft

  return { top, left }
}

function getOverlayTranslate({
  container,
  target,
  overlay,
  placement,
  marginX,
  marginY,
}: getOverlayTranslateProps) {
  const containerElement = container || rootElement as HTMLElement
  const {
    width: containerWidth,
    height: containerHeight,
    top: containerTop,
    left: containerLeft,
  } = containerElement.getBoundingClientRect()
  const { width: targetWidth, height: targetHeight, top: targetTop, left: targetLeft } = target.getBoundingClientRect()
  const { width: overlayWidth, height: overlayHeight } = overlay.getBoundingClientRect()

  let translateX = 0
  let translateY = 0

  // pre position
  switch (placement) {
    case OverlayPosition.TOP:
    case OverlayPosition.TOP_LEFT:
    case OverlayPosition.TOP_RIGHT:
      translateY -= (overlayHeight + marginY)
      translateX += marginX
      break
    case OverlayPosition.RIGHT:
    case OverlayPosition.RIGHT_TOP:
    case OverlayPosition.RIGHT_BOTTOM:
      translateX += (targetWidth + marginX)
      translateY += marginY
      break
    case OverlayPosition.BOTTOM:
    case OverlayPosition.BOTTOM_LEFT:
    case OverlayPosition.BOTTOM_RIGHT:
      translateY += (targetHeight + marginY)
      translateX += marginX
      break
    case OverlayPosition.LEFT:
    case OverlayPosition.LEFT_TOP:
    case OverlayPosition.LEFT_BOTTOM:
      translateX -= (overlayWidth + marginX)
      translateY += marginY
      break
  }
  // post position
  switch (placement) {
    case OverlayPosition.TOP:
    case OverlayPosition.BOTTOM:
      translateX -= ((overlayWidth / 2) - (targetWidth / 2))
      break
    case OverlayPosition.TOP_RIGHT:
    case OverlayPosition.BOTTOM_RIGHT:
      translateX -= (overlayWidth - targetWidth)
      break
    case OverlayPosition.RIGHT:
    case OverlayPosition.LEFT:
      translateY -= ((overlayHeight / 2) - (targetHeight / 2))
      break
    case OverlayPosition.RIGHT_BOTTOM:
    case OverlayPosition.LEFT_BOTTOM:
      translateY -= (overlayHeight - targetHeight)
      break
  }

  const isOverTop = targetTop + translateY < containerTop
  const isOverBottom = targetTop + translateY + overlayHeight > containerTop + containerHeight
  const isOverLeft = targetLeft + translateX < containerLeft
  const isOverRight = targetLeft + translateX + overlayWidth > containerLeft + containerWidth

  if (isOverTop || isOverBottom) {
    translateY = targetHeight - translateY - overlayHeight
  }
  if (isOverLeft || isOverRight) {
    translateX = targetWidth - translateX - overlayWidth
  }

  const transform = `translate(${translateX}px, ${translateY}px)`
  return { transform }
}

function getOverlayStyle({
  container,
  target,
  overlay,
  placement,
  marginX,
  marginY,
}: getOverlayStyleProps) {
  if (target) {
    const overlayPositionStyle = getOverlayPosition({ container, target })
    const overlayTranslateStyle = getOverlayTranslate({ container, target, overlay, placement, marginX, marginY })

    const combinedStyle = {
      ...overlayPositionStyle,
      ...overlayTranslateStyle,
      willChange: 'left, top',
    }

    return combinedStyle
  }
  return {}
}

function Overlay(
  {
    as,
    containerTestId = CONTAINER_TEST_ID,
    wrapperTestId = WRAPPER_TEST_ID,
    testId = OVERLAY_TEST_ID,
    show = false,
    className = '',
    style,
    container,
    target,
    placement = OverlayPosition.LEFT,
    marginX = 0,
    marginY = 0,
    children,
    onHide = noop,
  }: OverlayProps,
  forwardedRef: Ref<any>,
) {
  const [overlayStyle, setOverlayStyle] = useState<React.CSSProperties>()
  const overlayRef = useRef<HTMLDivElement>(null)
  const mergedRef = useMergeRefs<HTMLDivElement>(overlayRef, forwardedRef)

  const handleBlockMouseWheel = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }, [])

  const handleHideOverlay = useCallback((event: any) => {
    if (!event.target?.closest(StyledOverlay)) {
      onHide()
    }
  }, [onHide])

  const handleClickTarget = useCallback((event: HTMLElementEventMap['click']) => {
    onHide()
    event.stopPropagation()
  }, [onHide])

  const handleKeydown = useCallback((event: HTMLElementEventMap['keyup']) => {
    if (event.key === ESCAPE_KEY) {
      onHide()
    }
  }, [onHide])

  const overlay = useMemo(() => {
    if (container) {
      return (
        <StyledOverlay
          as={as}
          className={className}
          isHidden={!overlayStyle}
          style={{ ...style, ...overlayStyle }}
          ref={mergedRef}
          data-testid={testId}
        >
          { children }
        </StyledOverlay>
      )
    }
    return (
      <Container style={style} data-testid={containerTestId} onWheel={handleBlockMouseWheel}>
        <Wrapper data-testid={wrapperTestId}>
          <StyledOverlay
            as={as}
            className={className}
            isHidden={!overlayStyle}
            style={overlayStyle}
            ref={mergedRef}
            data-testid={testId}
          >
            { children }
          </StyledOverlay>
        </Wrapper>
      </Container>
    )
  }, [
    as,
    container,
    className,
    style,
    overlayStyle,
    children,
    containerTestId,
    wrapperTestId,
    testId,
    mergedRef,
    handleBlockMouseWheel,
  ])

  useEffect(() => {
    if (show) {
      const removeDocumentClickListener = listen(document, 'click', handleHideOverlay)
      const removeDocumentKeyupListener = listen(document, 'keyup', handleKeydown)
      const removeTargetClickListener = listen(target, 'click', handleClickTarget)

      return () => {
        removeDocumentClickListener()
        removeDocumentKeyupListener()
        removeTargetClickListener()
      }
    }
    return noop
  }, [show, target, handleHideOverlay, handleKeydown, handleClickTarget])

  useEffect(() => {
    if (show) {
      const tempOverlayStyle = getOverlayStyle({
        container,
        target,
        overlay: overlayRef.current as HTMLElement,
        placement,
        marginX,
        marginY,
      })
      setOverlayStyle(tempOverlayStyle)

      return () => {
        setOverlayStyle(undefined)
      }
    }
    return noop
  }, [show, container, marginX, marginY, placement, target])

  if (!show) return null

  return ReactDOM.createPortal(overlay, container || rootElement as HTMLElement)
}

export default forwardRef(Overlay)
