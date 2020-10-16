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
  getOverlayTranslatationProps,
} from './Overlay.types'
import OverlayPosition from './OverlayPosition'
import { Container, Wrapper, StyledOverlay } from './Overlay.styled'

export const CONTAINER_TEST_ID = 'ch-design-system-container'
export const WRAPPER_TEST_ID = 'ch-design-system-wrapper'
export const OVERLAY_TEST_ID = 'ch-design-system-overlay'

const ESCAPE_KEY = 'Escape'
const rootElement = document.getElementById('root') as HTMLElement

function listen<K extends keyof HTMLElementEventMap>(element: any, eventName: K, handler: EventHandler<K>) {
  if (!element) return noop

  element.addEventListener(eventName, handler)
  return function cleanup() {
    element.removeEventListener(eventName, handler)
  }
}

function getOverlayPosition({ target }: getOverlayPositionProps): React.CSSProperties {
  if (target) {
    const { top: targetTop, left: targetLeft } = target.getBoundingClientRect()

    const top = targetTop - target.clientTop
    const left = targetLeft - target.clientLeft

    return { top, left }
  }
  return {}
}

function getOverlayTranslate({
  target,
  overlay,
  placement,
  marginX,
  marginY,
}: getOverlayTranslatationProps): React.CSSProperties {
  if (target) {
    const {
      width: containerWidth,
      height: containerHeight,
      top: containerTop,
      left: containerLeft,
    } = rootElement.getBoundingClientRect()
    const { width: targetWidth, height: targetHeight, top: targetTop, left: targetLeft } = target.getBoundingClientRect()
    const { width: overlayWidth, height: overlayHeight } = overlay.getBoundingClientRect()

    let translateX = 0
    let translateY = 0

    // pre position
    switch (placement) {
      case OverlayPosition.TopCenter:
      case OverlayPosition.TopLeft:
      case OverlayPosition.TopRight:
        translateY -= (overlayHeight + marginY)
        translateX += marginX
        break
      case OverlayPosition.RightCenter:
      case OverlayPosition.RightTop:
      case OverlayPosition.RightBottom:
        translateX += (targetWidth + marginX)
        translateY += marginY
        break
      case OverlayPosition.BottomCenter:
      case OverlayPosition.BottomLeft:
      case OverlayPosition.BottomRight:
        translateY += (targetHeight + marginY)
        translateX += marginX
        break
      case OverlayPosition.LeftCenter:
      case OverlayPosition.LeftTop:
      case OverlayPosition.LeftBottom:
        translateX -= (overlayWidth + marginX)
        translateY += marginY
        break
    }
    // post position
    switch (placement) {
      case OverlayPosition.TopCenter:
      case OverlayPosition.BottomCenter:
        translateX -= ((overlayWidth / 2) - (targetWidth / 2))
        break
      case OverlayPosition.TopRight:
      case OverlayPosition.BottomRight:
        translateX -= (overlayWidth - targetWidth)
        break
      case OverlayPosition.RightCenter:
      case OverlayPosition.LeftCenter:
        translateY -= ((overlayHeight / 2) - (targetHeight / 2))
        break
      case OverlayPosition.RightBottom:
      case OverlayPosition.LeftBottom:
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
  return {}
}

function getOverlayStyle({
  target,
  overlay,
  placement,
  marginX,
  marginY,
}: getOverlayStyleProps): React.CSSProperties {
  if (target) {
    const overlayPositionStyle = getOverlayPosition({ target })
    const overlayTranslateStyle = getOverlayTranslate({ target, overlay, placement, marginX, marginY })

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
    target,
    placement = OverlayPosition.LeftCenter,
    marginX = 0,
    marginY = 0,
    children,
    onHide = noop,
  }: OverlayProps,
  forwardedRef: Ref<any>,
) {
  const [overlayStyle, setOverlayStyle] = useState<React.CSSProperties>()
  const [isHidden, setIsHidden] = useState<boolean>(true)
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

  const overlay = useMemo(() => (
    <Container style={style} data-testid={containerTestId} onWheel={handleBlockMouseWheel}>
      <Wrapper data-testid={wrapperTestId}>
        <StyledOverlay
          as={as}
          className={className}
          isHidden={isHidden}
          style={overlayStyle}
          ref={mergedRef}
          data-testid={testId}
        >
          { children }
        </StyledOverlay>
      </Wrapper>
    </Container>
  ), [
    as,
    className,
    style,
    isHidden,
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
        target,
        overlay: overlayRef.current as HTMLElement,
        placement,
        marginX,
        marginY,
      })
      setOverlayStyle(tempOverlayStyle)
      setIsHidden(false)

      return () => {
        setOverlayStyle(undefined)
        setIsHidden(true)
      }
    }
    return noop
  }, [show, marginX, marginY, placement, target])

  if (!show) return null

  return ReactDOM.createPortal(overlay, rootElement as HTMLElement)
}

export default forwardRef(Overlay)
