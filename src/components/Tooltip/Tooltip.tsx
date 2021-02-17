/* External dependencies */
import React, { useState, useCallback, useRef } from 'react'
import { isNil } from 'lodash-es'

/* Internal dependencies */
import TooltipProps, { GetTooltipStyle, TooltipPosition } from './Tooltip.types'
import { Container, TooltipContent } from './Tooltip.styled'

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

function Tooltip({
  className,
  content = null,
  placement = TooltipPosition.Bottom,
  offset = 0,
  marginX = 0,
  marginY = 0,
  delayHide = false,
  disabled = false,
  children = null,
}: TooltipProps) {
  const [show, setShow] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const clearHideTimeout = useRef<number>()

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

  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      { children }
      <TooltipContent
        className={className}
        show={show}
        disabled={disabled}
        ref={tooltipRef}
        style={getTooltipStyle({
          container: containerRef.current,
          tooltip: tooltipRef.current,
          placement,
          offset,
          marginX,
          marginY,
        })}
        onMouseEnter={handleTooltipMouseEnter}
        onMouseLeave={handleTooltipMouseLeave}
      >
        { content }
      </TooltipContent>
    </Container>
  )
}

export default Tooltip
