/* Internal dependencies */
import { getRootElement } from '~/src/utils/domUtils'
import {
  TooltipPosition,
  type GetTooltipStyle,
  type GetReplacement,
} from './Tooltip.types'

export function getReplacement({
  tooltip,
  keepInContainer,
  placement,
}: GetReplacement): TooltipPosition {
  if (!keepInContainer) {
    return placement
  }

  const {
    width: tooltipWidth,
    height: tooltipHeight,
    top: tooltipTop,
    left: tooltipLeft,
  } = tooltip.getBoundingClientRect()
  const {
    width: rootWidth,
    height: rootHeight,
    top: rootTop,
    left: rootLeft,
  } = getRootElement().getBoundingClientRect()

  const isOverTop = tooltipTop < rootTop
  const isOverBottom = tooltipTop + tooltipHeight > rootTop + rootHeight
  const isOverLeft = tooltipLeft < rootLeft
  const isOverRight = tooltipLeft + tooltipWidth > rootLeft + rootWidth

  if (isOverTop) {
    if (isOverLeft) {
      return TooltipPosition.BottomLeft
    }
    if (isOverRight) {
      return TooltipPosition.BottomRight
    }
    return TooltipPosition.BottomCenter
  }

  if (isOverBottom) {
    if (isOverLeft) {
      return TooltipPosition.TopLeft
    }
    if (isOverRight) {
      return TooltipPosition.TopRight
    }
    return TooltipPosition.TopCenter
  }

  if (isOverLeft) {
    if (isOverTop) {
      return TooltipPosition.RightTop
    }
    if (isOverBottom) {
      return TooltipPosition.RightBottom
    }
    return TooltipPosition.RightCenter
  }

  if (isOverRight) {
    if (isOverTop) {
      return TooltipPosition.LeftTop
    }
    if (isOverBottom) {
      return TooltipPosition.LeftBottom
    }
    return TooltipPosition.LeftCenter
  }

  return placement
}

export function getTooltipStyle({
  tooltipContainer,
  placement,
  offset,
  allowHover,
}: GetTooltipStyle) {
  const {
    top: containerTop,
    left: containerLeft,
    width: containerWidth,
    height: containerHeight,
  } = tooltipContainer.getBoundingClientRect()

  let top = containerTop
  let left = containerLeft
  let translateX = 0
  let translateY = 0

  let offsetTop = 0
  let offsetRight = 0
  let offsetBottom = 0
  let offsetLeft = 0
  let offsetStyle = {}

  switch (placement) {
    case TooltipPosition.TopCenter:
    case TooltipPosition.TopLeft:
    case TooltipPosition.TopRight:
      translateY = -100
      offsetBottom = offset
      break
    case TooltipPosition.RightCenter:
    case TooltipPosition.RightTop:
    case TooltipPosition.RightBottom:
      left += containerWidth
      offsetLeft = offset
      break
    case TooltipPosition.BottomCenter:
    case TooltipPosition.BottomLeft:
    case TooltipPosition.BottomRight:
      top += containerHeight
      offsetTop = offset
      break
    case TooltipPosition.LeftCenter:
    case TooltipPosition.LeftTop:
    case TooltipPosition.LeftBottom:
      translateX = -100
      offsetRight = offset
      break
  }

  switch (placement) {
    case TooltipPosition.TopCenter:
    case TooltipPosition.BottomCenter:
      translateX = -50
      left += (containerWidth / 2)
      break
    case TooltipPosition.TopRight:
    case TooltipPosition.BottomRight:
      translateX = -100
      left += containerWidth
      break
    case TooltipPosition.RightCenter:
    case TooltipPosition.LeftCenter:
      translateY = -50
      top += (containerHeight / 2)
      break
    case TooltipPosition.RightBottom:
    case TooltipPosition.LeftBottom:
      translateY = -100
      top += containerHeight
      break
  }

  if (allowHover) {
    offsetStyle = {
      paddingTop: offsetTop,
      paddingRight: offsetRight,
      paddingBottom: offsetBottom,
      paddingLeft: offsetLeft,
    }
  } else {
    top += (offsetTop - offsetBottom)
    left += (offsetLeft - offsetRight)
  }

  return {
    position: 'fixed',
    top,
    left,
    transform: `translate(${translateX}%, ${translateY}%)`,
    ...offsetStyle,
  }
}
