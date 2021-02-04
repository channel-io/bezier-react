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
import { document } from 'ssr-window'

/* Internal dependencies */
import useEventHandler from '../../hooks/useEventHandler'
import useMergeRefs from '../../hooks/useMergeRefs'
import OverlayProps, {
  GetOverlayStyleProps,
  GetOverlayPositionProps,
  GetOverlayTranslatationProps,
  OverlayPosition,
} from './Overlay.types'
import { Container, Wrapper, StyledOverlay } from './Overlay.styled'

export const CONTAINER_TEST_ID = 'ch-design-system-container'
export const WRAPPER_TEST_ID = 'ch-design-system-wrapper'
export const OVERLAY_TEST_ID = 'ch-design-system-overlay'

const ESCAPE_KEY = 'Escape'
const rootElement =
  document.getElementById!('main') ||
  document.getElementById!('root') ||
  document.getElementById!('__next') as HTMLElement

function getOverlayPosition({ container, target }: GetOverlayPositionProps): React.CSSProperties {
  if (target) {
    const { top: targetTop, left: targetLeft } = target.getBoundingClientRect()

    const top = container ?
      targetTop - target.clientTop - container.getBoundingClientRect().top + container.scrollTop :
      targetTop - target.clientTop
    const left = container ?
      targetLeft - target.clientLeft - container.getBoundingClientRect().left + container.scrollLeft :
      targetLeft - target.clientLeft

    return { top, left }
  }
  return {}
}

function getOverlayTranslation({
  container,
  target,
  overlay,
  placement,
  marginX,
  marginY,
  keepInContainer,
}: GetOverlayTranslatationProps): React.CSSProperties {
  if (target) {
    const containerElement = container || rootElement as HTMLElement
    const {
      width: rootWidth,
      height: rootHeight,
      top: rootTop,
      left: rootLeft,
    } = containerElement.getBoundingClientRect()
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

    if (keepInContainer) {
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
    }

    const transform = `translate(${translateX}px, ${translateY}px)`
    return { transform }
  }
  return {}
}

function getOverlayStyle({
  container,
  target,
  overlay,
  placement,
  marginX,
  marginY,
  keepInContainer,
}: GetOverlayStyleProps): React.CSSProperties {
  if (target) {
    const overlayPositionStyle = getOverlayPosition({ container, target })
    const overlayTranslateStyle = getOverlayTranslation({
      container,
      target,
      overlay,
      placement,
      marginX,
      marginY,
      keepInContainer,
    })

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
    containerClassName = '',
    containerStyle,
    container,
    target,
    placement = OverlayPosition.LeftCenter,
    marginX = 0,
    marginY = 0,
    keepInContainer = false,
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

  const overlay = useMemo(() => {
    if (container) {
      return (
        <StyledOverlay
          as={as}
          className={className}
          isHidden={isHidden}
          style={{
            ...(style || {}),
            ...(overlayStyle || {}),
          }}
          ref={mergedRef}
          data-testid={testId}
          {...otherProps}
        >
          { children }
        </StyledOverlay>
      )
    }
    return (
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
              ...(style || {}),
              ...(overlayStyle || {}),
            }}
            ref={mergedRef}
            data-testid={testId}
            {...otherProps}
          >
            { children }
          </StyledOverlay>
        </Wrapper>
      </Container>
    )
  }, [
    as,
    className,
    style,
    containerClassName,
    containerStyle,
    container,
    isHidden,
    overlayStyle,
    children,
    containerTestId,
    wrapperTestId,
    testId,
    mergedRef,
    otherProps,
  ])

  useEventHandler(document, 'click', handleHideOverlay, show)
  useEventHandler(document, 'keyup', handleKeydown, show)
  useEventHandler(target, 'click', handleClickTarget, show)
  useEventHandler(containerRef.current, 'wheel', handleBlockMouseWheel, show)

  useEffect(() => {
    if (show) {
      const tempOverlayStyle = getOverlayStyle({
        container,
        target,
        overlay: overlayRef.current as HTMLElement,
        placement,
        marginX,
        marginY,
        keepInContainer,
      })
      setOverlayStyle(tempOverlayStyle)
      setIsHidden(false)

      return () => {
        setOverlayStyle(undefined)
        setIsHidden(true)
      }
    }
    return noop
  }, [show, container, marginX, marginY, placement, target, keepInContainer])

  if (!show) return null

  return ReactDOM.createPortal(overlay, container || rootElement as HTMLElement)
}

export default forwardRef(Overlay)
