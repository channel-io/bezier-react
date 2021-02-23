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
}: GetTooltipStyle) {
  if (!container || !tooltip) {
    return {}
  }

  const {
    width: containerWidth,
    height: containerHeight,
    top: containerTop,
    left: containerLeft,
  } = container.getBoundingClientRect()
  const { width: tooltipWidth, height: tooltipHeight } = tooltip.getBoundingClientRect()
  const {
    width: documentWidth,
    height: documentHeight,
    top: documentTop,
    left: documentLeft,
  } = document.documentElement.getBoundingClientRect()

  let translateX = 0
  let translateY = 0

  switch (placement) {
    case TooltipPosition.TopCenter:
    case TooltipPosition.TopLeft:
    case TooltipPosition.TopRight:
      translateY -= (tooltipHeight + offset)
      break
    case TooltipPosition.RightCenter:
    case TooltipPosition.RightTop:
    case TooltipPosition.RightBottom:
      translateX += (containerWidth + offset)
      break
    case TooltipPosition.BottomCenter:
    case TooltipPosition.BottomLeft:
    case TooltipPosition.BottomRight:
      translateY += (containerHeight + offset)
      break
    case TooltipPosition.LeftCenter:
    case TooltipPosition.LeftTop:
    case TooltipPosition.LeftBottom:
      translateX -= (tooltipWidth + offset)
      break
  }
  // post position
  switch (placement) {
    case TooltipPosition.TopCenter:
    case TooltipPosition.BottomCenter:
      translateX -= ((tooltipWidth / 2) - (containerWidth / 2))
      break
    case TooltipPosition.TopRight:
    case TooltipPosition.BottomRight:
      translateX -= (tooltipWidth - containerWidth)
      break
    case TooltipPosition.RightCenter:
    case TooltipPosition.LeftCenter:
      translateY -= ((tooltipHeight / 2) - (containerHeight / 2))
      break
    case TooltipPosition.RightBottom:
    case TooltipPosition.LeftBottom:
      translateY -= (tooltipHeight - containerHeight)
      break
  }

  const isOverTop = containerTop + translateY < documentTop
  const isOverBottom = containerTop + translateY + tooltipHeight > documentTop + documentHeight
  const isOverLeft = containerLeft + translateX < documentLeft
  const isOverRight = containerLeft + translateX + tooltipWidth > documentLeft + documentWidth

  if (isOverTop || isOverBottom) {
    translateY = containerHeight - translateY - tooltipHeight
  }
  if (isOverLeft || isOverRight) {
    translateX = containerWidth - translateX - tooltipWidth
  }

  const transform = `translate(${translateX}px, ${translateY}px)`
  return { transform }
}

function Tooltip(
  {
    as,
    testId = TOOLTIP_TEST_ID,
    className,
    content = null,
    placement = TooltipPosition.BottomCenter,
    offset = 5,
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
    })
  }, [
    mounted,
    placement,
    offset,
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
