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

import { window } from '~/src/utils/domUtils'

import { type LegacyTooltipProps } from './LegacyTooltip.types'
import { LegacyTooltipPosition } from './LegacyTooltip.types'
import { LegacyTooltipContent } from './LegacyTooltipContent'

import { Container } from './LegacyTooltip.styled'

export const TOOLTIP_TEST_ID = 'bezier-react-tooltip'
export const TOOLTIP_CONTENT_TEST_ID = 'bezier-react-tooltip-content'

export const LegacyTooltip = memo(forwardRef(function LegacyTooltip(
  {
    as,
    testId = TOOLTIP_TEST_ID,
    contentTestId = TOOLTIP_CONTENT_TEST_ID,
    className,
    contentClassName,
    contentInterpolation,
    contentWrapperStyle,
    content = null,
    lazy = false, // optional prop 에서 추후 default behavior 를 lazy 하게 바꿀 예정
    placement = LegacyTooltipPosition.BottomCenter,
    disabled = false,
    offset = 4,
    keepInContainer = false,
    allowHover = false,
    delayShow = 0,
    delayHide = 0,
    children,
    ...otherProps
  }: LegacyTooltipProps,
  forwardedRef: Ref<any>,
) {
  const [show, setShow] = useState(false)
  const [didMount, setDidMount] = useState(show)

  const tooltipContainerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<Window['setTimeout']>>()

  useEffect(function hideTooltipContentWhenDisabled() {
    if (disabled) {
      setShow(false)
    }
  }, [disabled])

  useEffect(function updateDidMount() {
    setDidMount((prev) => prev || show)
  }, [show])

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
  }, [
    delayShow,
    disabled,
  ])

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
  }, [
    delayHide,
    disabled,
  ])

  const TooltipComponent = useMemo(() => {
    if (!lazy || didMount) {
      return (
        <LegacyTooltipContent
          as={as}
          content={content}
          contentClassName={contentClassName}
          contentInterpolation={contentInterpolation}
          contentWrapperStyle={contentWrapperStyle}
          disabled={disabled}
          placement={placement}
          offset={offset}
          allowHover={allowHover}
          keepInContainer={keepInContainer}
          tooltipContainer={tooltipContainerRef.current}
          forwardedRef={forwardedRef}
          testId={contentTestId}
        />
      )
    }

    return null
  }, [
    lazy,
    didMount,
    as,
    content,
    contentClassName,
    contentInterpolation,
    contentWrapperStyle,
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
    <Container
      ref={tooltipContainerRef}
      data-testid={testId}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...otherProps}
    >
      { children }
      { show && TooltipComponent }
    </Container>
  )
}))
