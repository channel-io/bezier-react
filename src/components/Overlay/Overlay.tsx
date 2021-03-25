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

export const rootElement =
  document.getElementById!('main') ||
  document.getElementById!('root') ||
  document.getElementById!('__next') as HTMLElement

const ESCAPE_KEY = 'Escape'

function getOverlayPosition({ containerRect, targetRect }: GetOverlayPositionProps): React.CSSProperties {
  if (containerRect && targetRect) {
    const { containerTop, containerLeft, scrollTop, scrollLeft } = containerRect
    const { targetTop, targetLeft, clientTop, clientLeft } = targetRect

    const top = targetTop - clientTop - containerTop + scrollTop
    const left = targetLeft - clientLeft - containerLeft + scrollLeft

    return { top, left }
  }
  return {}
}

function getOverlayTranslation({
  containerRect,
  targetRect,
  overlay,
  placement,
  marginX,
  marginY,
  keepInContainer,
}: GetOverlayTranslatationProps): React.CSSProperties {
  if (containerRect && targetRect) {
    const {
      containerWidth,
      containerHeight,
      containerTop,
      containerLeft,
    } = containerRect
    const { targetWidth, targetHeight, targetTop, targetLeft } = targetRect
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
    }

    const transform = `translate(${translateX}px, ${translateY}px)`
    return { transform }
  }
  return {}
}

function getOverlayStyle({
  containerRect,
  targetRect,
  overlay,
  placement,
  marginX,
  marginY,
  keepInContainer,
}: GetOverlayStyleProps): React.CSSProperties {
  if (containerRect && targetRect) {
    const overlayPositionStyle = getOverlayPosition({ containerRect, targetRect })
    const overlayTranslateStyle = getOverlayTranslation({
      containerRect,
      targetRect,
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

  const containerRect = useMemo(() => {
    if (!show) {
      return null
    }

    const containerElement = container || rootElement as HTMLElement
    const {
      width: containerWidth,
      height: containerHeight,
      top: containerTop,
      left: containerLeft,
    } = containerElement.getBoundingClientRect()

    return {
      containerWidth,
      containerHeight,
      containerTop,
      containerLeft,
      scrollTop: container ? container.scrollTop : 0,
      scrollLeft: container ? container.scrollLeft : 0,
    }
  }, [
    show,
    container,
  ])

  const targetRect = useMemo(() => {
    if (!target || !show) {
      return null
    }

    const { width: targetWidth, height: targetHeight, top: targetTop, left: targetLeft } = target.getBoundingClientRect()
    const { clientTop, clientLeft } = target

    return {
      targetWidth,
      targetHeight,
      targetTop,
      targetLeft,
      clientTop,
      clientLeft,
    }
  }, [
    show,
    target,
  ])

  useEventHandler(document, 'click', handleHideOverlay, show, true)
  useEventHandler(document, 'keyup', handleKeydown, show)
  useEventHandler(target, 'click', handleClickTarget, show)
  useEventHandler(containerRef.current, 'wheel', handleBlockMouseWheel, show)

  useEffect(() => {
    if (show) {
      const tempOverlayStyle = getOverlayStyle({
        containerRect,
        targetRect,
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
  }, [
    show,
    containerRect,
    targetRect,
    marginX,
    marginY,
    placement,
    keepInContainer,
  ])

  if (!show) return null

  return ReactDOM.createPortal(overlay, container || rootElement as HTMLElement)
}

export default forwardRef(Overlay)
