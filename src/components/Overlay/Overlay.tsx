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
  GetOverlayStyleProps,
  GetOverlayPositionProps,
  GetOverlayTranslatationProps,
} from './Overlay.types'
import OverlayPosition from './OverlayPosition'
import { Container, Wrapper, StyledOverlay } from './Overlay.styled'

export const CONTAINER_TEST_ID = 'ch-design-system-container'
export const WRAPPER_TEST_ID = 'ch-design-system-wrapper'
export const OVERLAY_TEST_ID = 'ch-design-system-overlay'

const ESCAPE_KEY = 'Escape'
const rootElement =
  document.getElementById('main') ||
  document.getElementById('root') ||
  document.getElementsByTagName('body')[0] as HTMLElement

function listen<K extends keyof HTMLElementEventMap>(element: any, eventName: K, handler: EventHandler<K>) {
  if (!element) return noop

  element.addEventListener(eventName, handler)
  return function cleanup() {
    element.removeEventListener(eventName, handler)
  }
}

function getOverlayPosition({ target }: GetOverlayPositionProps): React.CSSProperties {
  if (target) {
    const { top: targetTop, left: targetLeft } = target.getBoundingClientRect()

    const top = targetTop - target.clientTop
    const left = targetLeft - target.clientLeft

    return { top, left }
  }
  return {}
}

function getOverlayTranslation({
  target,
  overlay,
  placement,
  marginX,
  marginY,
}: GetOverlayTranslatationProps): React.CSSProperties {
  if (target) {
    const {
      width: rootWidth,
      height: rootHeight,
      top: rootTop,
      left: rootLeft,
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

    const isOverTop = targetTop + translateY < rootTop
    const isOverBottom = targetTop + translateY + overlayHeight > rootTop + rootHeight
    const isOverLeft = targetLeft + translateX < rootLeft
    const isOverRight = targetLeft + translateX + overlayWidth > rootLeft + rootWidth

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
}: GetOverlayStyleProps): React.CSSProperties {
  if (target) {
    const overlayPositionStyle = getOverlayPosition({ target })
    const overlayTranslateStyle = getOverlayTranslation({ target, overlay, placement, marginX, marginY })

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
    style = {},
    containerClassName = '',
    containerStyle = {},
    target,
    placement = OverlayPosition.LeftCenter,
    marginX = 0,
    marginY = 0,
    children,
    onHide = noop,
    ...otherProps
  }: OverlayProps,
  forwardedRef: Ref<any>,
) {
  const [overlayStyle, setOverlayStyle] = useState<React.CSSProperties>()
  const [isHidden, setIsHidden] = useState<boolean>(true)
  const overlayRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mergedRef = useMergeRefs<HTMLDivElement>(overlayRef, forwardedRef)

  const handleBlockMouseWheel = useCallback((event: HTMLElementEventMap['wheel']) => {
    event.stopPropagation()
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
    <Container
      ref={containerRef}
      className={containerClassName}
      style={containerStyle}
      data-testid={containerTestId}
    >
      <Wrapper data-testid={wrapperTestId}>
        <StyledOverlay
          as={as}
          className={className}
          isHidden={isHidden}
          style={{
            ...style,
            ...overlayStyle,
          }}
          ref={mergedRef}
          data-testid={testId}
          {...otherProps}
        >
          { children }
        </StyledOverlay>
      </Wrapper>
    </Container>
  ), [
    as,
    className,
    style,
    containerClassName,
    containerStyle,
    isHidden,
    overlayStyle,
    children,
    containerTestId,
    wrapperTestId,
    testId,
    mergedRef,
    otherProps,
  ])

  useEffect(() => {
    if (show) {
      const removeDocumentClickListener = listen(document, 'click', handleHideOverlay)
      const removeDocumentKeyupListener = listen(document, 'keyup', handleKeydown)
      const removeTargetClickListener = listen(target, 'click', handleClickTarget)
      const remoteContainerWheelListener = listen(containerRef.current, 'wheel', handleBlockMouseWheel)

      return () => {
        removeDocumentClickListener()
        removeDocumentKeyupListener()
        removeTargetClickListener()
        remoteContainerWheelListener()
      }
    }
    return noop
  }, [show, target, handleHideOverlay, handleKeydown, handleClickTarget, handleBlockMouseWheel])

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
