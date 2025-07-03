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

import useEventHandler from '~/src/hooks/useEventHandler'
import { useIsomorphicLayoutEffect } from '~/src/hooks/useIsomorphicLayoutEffect'
import useMergeRefs from '~/src/hooks/useMergeRefs'
import { getZIndexClassName } from '~/src/types/props-helpers'

import { useModalContainerContext } from '~/src/components/Modal'
import { ThemeProvider, useThemeName } from '~/src/components/ThemeProvider'
import { useWindow } from '~/src/components/WindowProvider'

import type {
  ContainerRectAttr,
  OverlayProps,
  TargetRectAttr,
} from './Overlay.types'
import { getOverlayStyle } from './utils'

import styles from './Overlay.module.scss'

export const CONTAINER_TEST_ID = 'bezier-container'
export const OVERLAY_TEST_ID = 'bezier-overlay'
export const ESCAPE_KEY = 'Escape'

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
    const [isMeasuring, setIsMeasuring] = useState(false)

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
      const {
        width: targetWidth,
        height: targetHeight,
        top: targetTop,
        left: targetLeft,
      } = target.getBoundingClientRect()
      const { clientTop, clientLeft } = target

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
        if (
          !event.target ||
          !(event.target as HTMLElement).closest(`.${styles.Overlay}`)
        ) {
          onHide?.()

          if (!enableClickOutside) {
            event.stopPropagation()
          }
        }
      },
      [enableClickOutside, onHide]
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

    useEffect(() => {
      handleOverlayForceUpdate()
    }, [children, handleOverlayForceUpdate])

    /**
     * Simplified rendering approach to fix autoFocus while preventing layout shift
     * Case 1: show === true -> shouldRender -> shouldShow (with micro-delay for positioning)
     * Case 2: show === false -> shouldShow -> shouldRender (based on transition setting)
     */
    useEffect(() => {
      if (show) {
        if (!shouldRender) {
          setShouldRender(true)
          // Brief measurement phase to calculate position without major layout shift
          setIsMeasuring(true)
          
          // Very fast transition to visible state to maintain autoFocus functionality
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              setIsMeasuring(false)
              setShouldShow(true)
            })
          })
        }
      }

      if (!show) {
        window.requestAnimationFrame(() => setShouldShow(false))

        if (!withTransition) {
          window.requestAnimationFrame(() => {
            setShouldRender(false)
            setIsMeasuring(false)
          })
        }
      }
    }, [show, withTransition, shouldRender])

    const themeName = useThemeName()

    if (!shouldRender) {
      return null
    }

    const overlayStyle = getOverlayStyle({
      containerRect: containerRect.current,
      targetRect: targetRect.current,
      overlay: isMeasuring ? null : overlayRef.current, // Allow initial positioning during measurement
      position,
      marginX,
      marginY,
      keepInContainer,
      show: shouldShow,
    })

    const Content = (
      <ThemeProvider themeName={themeName}>
        <div
          className={classNames(
            styles.Overlay,
            getZIndexClassName(zIndex),
            (!shouldShow || isMeasuring) && styles.hidden,
            withTransition && styles.transition,
            className
          )}
          style={{
            ...style,
            ...overlayStyle,
            // During brief measurement phase, reduce opacity slightly but keep focusable
            ...(isMeasuring && {
              opacity: 0.1, // Very low opacity instead of 0 to maintain focus functionality
              transition: 'none', // Disable transitions during measurement
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
