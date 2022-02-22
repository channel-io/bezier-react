/* External dependencies */
import React, { useState, useCallback, useMemo, useRef, forwardRef, Ref, useEffect } from 'react'

/* Internal dependencies */
import { window } from 'Utils/domUtils'
import TooltipContent from './TooltipContent'
import TooltipProps, { TooltipPosition } from './Tooltip.types'
import { Container } from './Tooltip.styled'

export const TOOLTIP_TEST_ID = 'bezier-react-tooltip'
export const TOOLTIP_CONTENT_TEST_ID = 'bezier-react-tooltip-content'

function Tooltip(
  {
    as,
    testId = TOOLTIP_TEST_ID,
    contentTestId = TOOLTIP_CONTENT_TEST_ID,
    className,
    contentClassName,
    contentInterpolation,
    content = null,
    lazy = false, // optional prop 에서 추후 default behavior 를 lazy 하게 바꿀 예정
    placement = TooltipPosition.BottomCenter,
    disabled = false,
    offset = 4,
    keepInContainer = false,
    allowHover = false,
    delayShow = 0,
    delayHide = 0,
    children,
    ...otherProps
  }: TooltipProps,
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
        <TooltipContent
          as={as}
          content={content}
          contentClassName={contentClassName}
          contentInterpolation={contentInterpolation}
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
}

export default React.memo(forwardRef(Tooltip))
