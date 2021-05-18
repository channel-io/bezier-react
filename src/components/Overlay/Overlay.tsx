/* External dependencies */
import React, {
  useMemo,
  useRef,
  useCallback,
  Ref,
  forwardRef,
} from 'react'
import ReactDOM from 'react-dom'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { document, rootElement } from '../../utils/domUtils'
import useEventHandler from '../../hooks/useEventHandler'
import useMergeRefs from '../../hooks/useMergeRefs'
import OverlayProps, {
  OverlayPosition,
  ContainerRectAttr,
  TargetRectAttr,
} from './Overlay.types'
import * as Styled from './Overlay.styled'

// TODO: 테스트 코드 작성
const CONTAINER_TEST_ID = 'bezier-react-container'
const WRAPPER_TEST_ID = 'bezier-react-wrapper'
const OVERLAY_TEST_ID = 'bezier-react-overlay'

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
    position = OverlayPosition.LeftCenter,
    marginX = 0,
    marginY = 0,
    keepInContainer = false,
    withTransition = false,
    enableClickOutside = false,
    children,
    onHide = noop,
  }: OverlayProps,
  forwardedRef: Ref<any>,
) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mergedRef = useMergeRefs<HTMLDivElement>(overlayRef, forwardedRef)

  const handleBlockMouseWheel = useCallback((event: HTMLElementEventMap['wheel']) => {
    event.stopPropagation()
  }, [])

  const handleHideOverlay = useCallback((event: any) => {
    if (!event.target?.closest(Styled.Overlay)) {
      onHide()

      if (!enableClickOutside) {
        event.stopPropagation()
      }
    }
  }, [
    enableClickOutside,
    onHide,
  ])

  const handleKeydown = useCallback((event: HTMLElementEventMap['keyup']) => {
    if (event.key === ESCAPE_KEY) {
      onHide()
    }
  }, [onHide])

  const containerRect: ContainerRectAttr = useMemo(() => {
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
    container,
    children,
  ])

  const targetRect: TargetRectAttr | null = useMemo(() => {
    if (!target) {
      return null
    }

    const {
      width: targetWidth,
      height: targetHeight,
      top: targetTop,
      left: targetLeft,
    } = target.getBoundingClientRect()
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
    target,
    children,
  ])

  useEventHandler(document, 'click', handleHideOverlay, show, true)
  useEventHandler(document, 'keyup', handleKeydown, show)
  useEventHandler(containerRef.current, 'wheel', handleBlockMouseWheel, show)

  const OverlayContainer = useMemo(() => {
    if (container) {
      return ({ children: _children }) => _children
    }

    return ({ children: _children }) => (
      <Styled.DefaultContainer
        ref={containerRef}
        className={containerClassName}
        style={containerStyle}
        data-testid={containerTestId}
      >
        <Styled.DefaultWrapper data-testid={wrapperTestId}>
          { _children }
        </Styled.DefaultWrapper>
      </Styled.DefaultContainer>
    )
  }, [
    containerRef,
    container,
    containerClassName,
    containerStyle,
    containerTestId,
    wrapperTestId,
  ])

  return ReactDOM.createPortal(
    <OverlayContainer>
      <Styled.Overlay
        as={as}
        ref={mergedRef}
        className={className}
        show={show}
        withTransition={withTransition}
        style={style}
        data-testid={testId}
        containerRect={containerRect}
        targetRect={targetRect}
        overlay={overlayRef.current}
        position={position}
        marginX={marginX}
        marginY={marginY}
        keepInContainer={keepInContainer}
      >
        { children }
      </Styled.Overlay>
    </OverlayContainer>,
    container || rootElement as HTMLElement,
  )
}

export default forwardRef(Overlay)
