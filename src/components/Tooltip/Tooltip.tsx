/* External dependencies */
import React, { useState, useCallback, useRef, useMemo, Ref, forwardRef, useEffect } from 'react'
import { isNil, isEmpty } from 'lodash-es'

/* Internal dependencies */
import useMergeRefs from '../../hooks/useMergeRefs'
import { Text } from '../Text'
import { Typography } from '../../foundation'
import TooltipProps, { GetTooltipStyle, TooltipPosition } from './Tooltip.types'
import { Container, TooltipContent } from './Tooltip.styled'

export const TOOLTIP_TEST_ID = 'ch-design-system-tooltip'

function getTooltipStyle({
  container,
  tooltip,
  placement,
  offset,
  marginX,
  marginY,
}: GetTooltipStyle) {
  if (!container || !tooltip) {
    return {}
  }

  const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect()
  const { width: tooltipWidth, height: tooltipHeight } = tooltip.getBoundingClientRect()

  let translateX = 0
  let translateY = 0

  switch (placement) {
    case TooltipPosition.Top:
      translateX += (containerWidth / 2) - (tooltipWidth / 2)
      translateY -= (tooltipHeight + offset)
      break
    case TooltipPosition.Bottom:
      translateX += (containerWidth / 2) - (tooltipWidth / 2)
      translateY += (containerHeight + offset)
      break
    case TooltipPosition.Left:
      translateX -= (tooltipWidth + offset)
      translateY += (containerHeight / 2) - (tooltipHeight / 2)
      break
    case TooltipPosition.Right:
      translateX += (containerWidth + offset)
      translateY += (containerHeight / 2) - (tooltipHeight / 2)
      break
  }

  const transform = `translate(${translateX + marginX}px, ${translateY + marginY}px)`
  return { transform }
}

function Tooltip(
  {
    as,
    testId = TOOLTIP_TEST_ID,
    className,
    content = null,
    placement = TooltipPosition.Bottom,
    offset = 0,
    marginX = 0,
    marginY = 0,
    delayHide = false,
    disabled = false,
    children = null,
  }: TooltipProps,
  forwardedRef: Ref<any>,
) {
  const [show, setShow] = useState(false)
  const [mounted, setMounted] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const clearHideTimeout = useRef<number>()
  const mergedRef = useMergeRefs<HTMLDivElement>(tooltipRef, forwardedRef)

  const handleMouseEnter = useCallback(() => {
    if (!isNil(clearHideTimeout.current)) {
      clearTimeout(clearHideTimeout.current)
      clearHideTimeout.current = undefined
    }

    setShow(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (delayHide) {
      clearHideTimeout.current = setTimeout(() => {
        setShow(false)
      }, 100)
      return
    }

    setShow(false)
  }, [delayHide])

  const handleTooltipMouseEnter = useCallback(() => {
    if (!isNil(clearHideTimeout.current)) {
      clearTimeout(clearHideTimeout.current)
      clearHideTimeout.current = undefined
    }
  }, [])

  const handleTooltipMouseLeave = useCallback(() => {
    setShow(false)
  }, [])

  const tooltipContentStyle = useMemo(() => {
    if (!mounted) {
      return undefined
    }

    return getTooltipStyle({
      container: containerRef.current,
      tooltip: tooltipRef.current,
      placement,
      offset,
      marginX,
      marginY,
    })
  }, [
    mounted,
    placement,
    offset,
    marginX,
    marginY,
  ])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!children) {
    return null
  }

  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      { children }
      <TooltipContent
        as={as}
        className={className}
        show={show}
        disabled={disabled || isEmpty(content)}
        ref={mergedRef}
        style={tooltipContentStyle}
        data-testid={testId}
        onMouseEnter={handleTooltipMouseEnter}
        onMouseLeave={handleTooltipMouseLeave}
      >
        <Text type={Typography.Size13}>
          { content }
        </Text>
      </TooltipContent>
    </Container>
  )
}

export default forwardRef(Tooltip)
