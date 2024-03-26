import React, {
  type Ref,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import classNames from 'classnames'

import { useWindow } from '~/src/components/WindowProvider'

import { type LegacyTooltipProps } from './LegacyTooltip.types'
import { LegacyTooltipContent } from './LegacyTooltipContent'

import styles from './LegacyTooltip.module.scss'

export const TOOLTIP_TEST_ID = 'bezier-tooltip'
export const TOOLTIP_CONTENT_TEST_ID = 'bezier-tooltip-content'

/**
 * @deprecated Use `Tooltip` instead. It may be removed in the next major version.
 */
export const LegacyTooltip = memo(
  forwardRef(function LegacyTooltip(
    {
      as,
      contentTestId = TOOLTIP_CONTENT_TEST_ID,
      className,
      contentStyle,
      contentClassName,
      contentWrapperStyle,
      contentWrapperClassName,
      content = null,
      lazy = false, // optional prop 에서 추후 default behavior 를 lazy 하게 바꿀 예정
      placement = 'bottom-center',
      disabled = false,
      offset = 4,
      keepInContainer = false,
      allowHover = false,
      delayShow = 0,
      delayHide = 0,
      children,
      ...otherProps
    }: LegacyTooltipProps,
    forwardedRef: Ref<any>
  ) {
    const { window } = useWindow()

    const [show, setShow] = useState(false)
    const [didMount, setDidMount] = useState(show)

    const tooltipContainerRef = useRef<HTMLDivElement>(null)
    const timerRef = useRef<ReturnType<Window['setTimeout']>>()

    useEffect(
      function hideTooltipContentWhenDisabled() {
        if (disabled) {
          setShow(false)
        }
      },
      [disabled]
    )

    useEffect(
      function updateDidMount() {
        setDidMount((prev) => prev || show)
      },
      [show]
    )

    const handleMouseEnter = useCallback(() => {
      if (disabled) {
        return
      }

      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }

      timerRef.current = window.setTimeout(() => {
        setShow(true)
      }, delayShow)
    }, [delayShow, disabled, window])

    const handleMouseLeave = useCallback(() => {
      if (disabled) {
        return
      }

      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }

      timerRef.current = window.setTimeout(() => {
        setShow(false)
      }, delayHide)
    }, [delayHide, disabled, window])

    const TooltipComponent = useMemo(() => {
      if (!lazy || didMount) {
        return (
          <LegacyTooltipContent
            as={as}
            content={content}
            contentStyle={contentStyle}
            contentClassName={contentClassName}
            contentWrapperStyle={contentWrapperStyle}
            contentWrapperClassName={contentWrapperClassName}
            disabled={disabled}
            placement={placement}
            offset={offset}
            allowHover={allowHover}
            keepInContainer={keepInContainer}
            tooltipContainer={tooltipContainerRef.current}
            forwardedRef={forwardedRef}
            data-testid={contentTestId}
          />
        )
      }

      return null
    }, [
      lazy,
      didMount,
      as,
      content,
      contentStyle,
      contentClassName,
      contentWrapperStyle,
      contentWrapperClassName,
      disabled,
      placement,
      offset,
      allowHover,
      keepInContainer,
      forwardedRef,
      contentTestId,
    ])

    if (!children) {
      return null
    }

    return (
      <div
        ref={tooltipContainerRef}
        className={classNames(styles.LegacyTooltip, className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid={TOOLTIP_TEST_ID}
        {...otherProps}
      >
        {children}
        {show && TooltipComponent}
      </div>
    )
  })
)
