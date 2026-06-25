'use client'

import {
  forwardRef,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react'
import ReactDOM from 'react-dom'

import classNames from 'classnames'


import { useModalContainerContext } from '~/src/beta/Modal'
import useEventHandler from '~/src/hooks/useEventHandler'
import { useIsomorphicLayoutEffect } from '~/src/hooks/useIsomorphicLayoutEffect'
import useMergeRefs from '~/src/hooks/useMergeRefs'
import { getZIndexClassName } from '~/src/types/props-helpers'
import { assert } from '~/src/utils/assert'

import { ThemeProvider, useThemeName } from '~/src/components/ThemeProvider'
import { useWindow } from '~/src/components/WindowProvider'

import type {
  ContainerRectAttr,
  OverlayProps,
  OverlayTarget,
  TargetRectAttr,
} from './Overlay.types'
import { useOverlayAutoUpdate } from './useOverlayAutoUpdate'
import { getOverlayStyle } from './utils'

import styles from './Overlay.module.scss'


export const CONTAINER_TEST_ID = 'bezier-container'
export const OVERLAY_TEST_ID = 'bezier-overlay'
export const ESCAPE_KEY = 'Escape'

function isElementTarget(
  target: OverlayTarget | null | undefined
): target is HTMLElement {
  return (target as { nodeType?: number } | null | undefined)?.nodeType === 1
}

function isNode(value: unknown): value is Node {
  return (
    typeof (value as { nodeType?: unknown } | null | undefined)?.nodeType ===
    'number'
  )
}

function isEventTargetInsideElement(
  eventTarget: EventTarget | null,
  element: HTMLElement
) {
  return (
    isNode(eventTarget) &&
    (eventTarget === element || element.contains(eventTarget))
  )
}

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  function Overlay(
    {
      children,
      style,
      className,
      show = false,
      container: givenContainer,
      target,
      position = 'left-center',
      marginX = 0,
      marginY = 0,
      keepInContainer = false,
      withTransition = false,
      enableClickOutside = false,
      containerStyle,
      containerClassName,
      onHide,
      onTransitionEnd,
      zIndex = 'overlay',
      ...rest
    },
    forwardedRef
  ) {
    const { window, document, rootElement } = useWindow()

    const [shouldRender, setShouldRender] = useState(false)
    const [shouldShow, setShouldShow] = useState(false)

    const containerRect = useRef<ContainerRectAttr | null>(null)
    const targetRect = useRef<TargetRectAttr | null>(null)

    const [, forceUpdate] = useReducer((x) => !x, true)

    const containerRef = useRef<HTMLDivElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)
    const mergedRef = useMergeRefs<HTMLDivElement>(overlayRef, forwardedRef)

    const modalContainer = useModalContainerContext()
    const hasContainer = Boolean(givenContainer || modalContainer)
    const container = givenContainer ?? modalContainer ?? rootElement

    const handleOverlayForceUpdate = useCallback(() => {
      forceUpdate()
    }, [])

    const handleContainerRect = useCallback(() => {
      const {
        width: containerWidth,
        height: containerHeight,
        top: containerTop,
        left: containerLeft,
      } = container.getBoundingClientRect()

      containerRect.current = {
        containerWidth,
        containerHeight,
        containerTop,
        containerLeft,
        scrollTop: hasContainer ? container.scrollTop : 0,
        scrollLeft: hasContainer ? container.scrollLeft : 0,
      }
    }, [container, hasContainer])

    useIsomorphicLayoutEffect(
      function initContainerRect() {
        if (show) {
          handleContainerRect()
        }
      },
      [show, handleContainerRect]
    )

    const handleTargetRect = useCallback(() => {
      if (!target) {
        return
      }
      const targetClientRect = target.getBoundingClientRect()
      const {
        width: targetWidth,
        height: targetHeight,
        top: targetTop,
        left: targetLeft,
      } = targetClientRect
      const clientTop = target.clientTop ?? 0
      const clientLeft = target.clientLeft ?? 0

      assert(
        [targetWidth, targetHeight, targetTop, targetLeft].every(
          Number.isFinite
        ),
        'Overlay target.getBoundingClientRect() must return finite width, height, top, and left values.'
      )

      targetRect.current = {
        targetWidth,
        targetHeight,
        targetTop,
        targetLeft,
        clientTop,
        clientLeft,
      }
    }, [target])

    useIsomorphicLayoutEffect(
      function initTargetRect() {
        if (show) {
          handleTargetRect()
        }
      },
      [show, handleTargetRect]
    )

    const handleOverlayPositionUpdate = useCallback(() => {
      if (!show) {
        return
      }

      handleContainerRect()
      handleTargetRect()
      handleOverlayForceUpdate()
    }, [handleContainerRect, handleOverlayForceUpdate, handleTargetRect, show])

    const handleTransitionEnd = useCallback<
      React.TransitionEventHandler<HTMLDivElement>
    >(
      (event) => {
        onTransitionEnd?.(event)
        if (!show) {
          setShouldRender(false)
        }
      },
      [show, onTransitionEnd]
    )

    const handleBlockMouseWheel = useCallback(
      (event: HTMLElementEventMap['wheel']) => {
        event.stopPropagation()
      },
      []
    )

    const handleHideOverlay = useCallback(
      (event: MouseEvent) => {
        /**
         * NOTE: Type checking with instanceof makes it difficult to handle cases where the window object is different.
         */
        const eventTarget = event.target
        const isInsideOverlay =
          isNode(eventTarget) &&
          eventTarget.nodeType === 1 &&
          Boolean((eventTarget as Element).closest(`.${styles.Overlay}`))
        const isInsideTarget =
          isElementTarget(target) &&
          target !== document.body &&
          target !== rootElement &&
          isEventTargetInsideElement(eventTarget, target)

        if (!eventTarget || (!isInsideOverlay && !isInsideTarget)) {
          onHide?.()

          if (!enableClickOutside) {
            event.stopPropagation()
          }
        }
      },
      [document.body, enableClickOutside, onHide, rootElement, target]
    )

    const handleKeydown = useCallback(
      (event: HTMLElementEventMap['keyup']) => {
        if (event.key === ESCAPE_KEY) {
          onHide?.()
        }
      },
      [onHide]
    )

    useEventHandler(document, 'click', handleHideOverlay, show, true)
    useEventHandler(document, 'keydown', handleKeydown, show)
    useEventHandler(containerRef.current, 'wheel', handleBlockMouseWheel, show)

    useOverlayAutoUpdate({
      enabled: show,
      target,
      floatingRef: overlayRef,
      container,
      rootElement,
      window,
      onUpdate: handleOverlayPositionUpdate,
    })

    useEffect(() => {
      handleOverlayForceUpdate()
    }, [children, handleOverlayForceUpdate])

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
    }, [show, withTransition, shouldRender, shouldShow, window])

    const themeName = useThemeName()

    if (!shouldRender) {
      return null
    }

    const Content = (
      <ThemeProvider themeName={themeName}>
        <div
          className={classNames(
            styles.Overlay,
            getZIndexClassName(zIndex),
            !shouldShow && styles.hidden,
            withTransition && styles.transition,
            className
          )}
          style={{
            ...style,
            ...getOverlayStyle({
              containerRect: containerRect.current,
              targetRect: targetRect.current,
              overlay: overlayRef.current,
              position,
              marginX,
              marginY,
              keepInContainer,
              show: shouldShow,
            }),
          }}
          ref={mergedRef}
          data-testid={OVERLAY_TEST_ID}
          onTransitionEnd={handleTransitionEnd}
          {...rest}
        >
          {children}
        </div>
      </ThemeProvider>
    )

    return ReactDOM.createPortal(
      hasContainer ? (
        Content
      ) : (
        <div
          style={containerStyle}
          className={classNames(
            styles.OverlayContainer,
            !show && styles.hidden,
            containerClassName
          )}
          ref={containerRef}
          data-testid={CONTAINER_TEST_ID}
        >
          <div className={styles.OverlayWrapper}>{Content}</div>
        </div>
      ),
      container
    )
  }
)
