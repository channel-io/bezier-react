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
import { rootElement } from '../../utils/domUtils'
import useEventHandler from '../../hooks/useEventHandler'
import useMergeRefs from '../../hooks/useMergeRefs'
import { getOverlayStyle } from './utils/positionUtils'
import OverlayProps, { OverlayPosition } from './Overlay.types'
import { Container, Wrapper, StyledOverlay } from './Overlay.styled'

export const CONTAINER_TEST_ID = 'ch-design-system-container'
export const WRAPPER_TEST_ID = 'ch-design-system-wrapper'
export const OVERLAY_TEST_ID = 'ch-design-system-overlay'

const ESCAPE_KEY = 'Escape'

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
    transition = false,
    targetClose = true,
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

      if (targetClose) {
        event.stopPropagation()
      }
    }
  }, [
    targetClose,
    onHide,
  ])

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
          transition={transition}
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
            transition={transition}
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
    transition,
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    show,
    container,
    children,
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    show,
    target,
    children,
  ])

  useEventHandler(document, 'click', handleHideOverlay, show, true)
  useEventHandler(document, 'keyup', handleKeydown, show)
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
