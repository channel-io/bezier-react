/* External dependencies */
import React, { useReducer, useState, useMemo, useRef, useCallback, useEffect, Ref, forwardRef } from 'react'
import ReactDOM from 'react-dom'
import { noop } from 'lodash-es'

/* Internal dependencies */
import useEventHandler from 'Hooks/useEventHandler'
import useMergeRefs from 'Hooks/useMergeRefs'
import { window, document, getRootElement } from 'Utils/domUtils'
import OverlayProps, { OverlayPosition, ContainerRectAttr, TargetRectAttr } from './Overlay.types'
import * as Styled from './Overlay.styled'

// TODO: 테스트 코드 작성
const CONTAINER_TEST_ID = 'bezier-react-container'
const WRAPPER_TEST_ID = 'bezier-react-wrapper'
export const OVERLAY_TEST_ID = 'bezier-react-overlay'

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
  // NOTE: DOM render 가 필요한지 여부를 결정하는 state
  const [shouldRender, setShouldRender] = useState(false)

  // NOTE: 화면에 실제 표현해야 하는지 여부를 결정하는 state
  const [shouldShow, setShouldShow] = useState(false)

  const [dummy, forceUpdate] = useReducer(x => !x, true)

  const overlayRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mergedRef = useMergeRefs<HTMLDivElement>(overlayRef, forwardedRef)

  const handleTransitionEnd = useCallback(() => {
    if (!show) {
      setShouldRender(false)
    }
  }, [show])

  const handleOverlayForceUpdate = useCallback(() => {
    forceUpdate()
  }, [])

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

  const containerRect: () => ContainerRectAttr = useCallback(() => {
    const containerElement = container || getRootElement() as HTMLElement

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

  const targetRect: () => TargetRectAttr | null = useCallback(() => {
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

  const Content = useMemo(() => (
    <Styled.Overlay
      as={as}
      ref={mergedRef}
      className={className}
      show={shouldShow}
      withTransition={withTransition}
      style={style}
      data-testid={testId}
      containerRect={containerRect()}
      targetRect={targetRect()}
      overlay={overlayRef.current}
      position={position}
      marginX={marginX}
      marginY={marginY}
      keepInContainer={keepInContainer}
      onTransitionEnd={handleTransitionEnd}
    >
      { children }
    </Styled.Overlay>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [
    as,
    children,
    className,
    containerRect,
    handleTransitionEnd,
    keepInContainer,
    marginX,
    marginY,
    mergedRef,
    position,
    shouldShow,
    style,
    targetRect,
    testId,
    withTransition,
    dummy,
  ])

  const overlay = useMemo(() => {
    if (container) {
      return Content
    }

    return (
      <Styled.DefaultContainer
        ref={containerRef}
        className={containerClassName}
        show={show}
        style={containerStyle}
        data-testid={containerTestId}
      >
        <Styled.DefaultWrapper data-testid={wrapperTestId}>
          { Content }
        </Styled.DefaultWrapper>
      </Styled.DefaultContainer>
    )
  }, [
    container,
    containerClassName,
    show,
    containerStyle,
    containerTestId,
    wrapperTestId,
    Content,
  ])

  useEffect(() => {
    handleOverlayForceUpdate()
  }, [
    children,
    handleOverlayForceUpdate,
  ])

  /**
   * Case 1: show === true
   * show -> shouldRender -> shouldShow
   * shouldRender 를 true 로 설정하고, 직후에 shouldShow 를 true 로 설정하여 transition 유발
   *
   * Case 2: show === false
   * show -> shouldShow -> (...) -> shouldRender
   * shouldShow 를 false 로 설정하고, shouldRender 는 transition 필요 여부에 따라 다르게 결정함
   *    Case 2-1: withTransition === true
   *    shouldShow -> onTransitionEnd -> shouldRender
   *    onTransitionEnd handler 를 이용해 transition 이 끝난 다음 shouldRender 를 false 로 설정
   *    Case 2-2: withTransition === false
   *    shouldShow && shouldRender
   *    transition 을 기다릴 필요가 없으므로 바로 shouldRender 를 false 로 설정
   */
  useEffect(() => {
    if (show) {
      if (shouldRender) {
        window.requestAnimationFrame(() => setShouldShow(true))
      } else {
        window.requestAnimationFrame(() => setShouldRender(true))
      }
    }

    if (!show) {
      window.requestAnimationFrame(() => setShouldShow(false))

      if (!withTransition) {
        window.requestAnimationFrame(() => setShouldRender(false))
      }
    }
  }, [
    show,
    withTransition,
    shouldRender,
    shouldShow,
  ])

  if (!shouldRender) { return null }

  return ReactDOM.createPortal(
    overlay,
    container || getRootElement() as HTMLElement,
  )
}

export default forwardRef(Overlay)
