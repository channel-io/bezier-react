import { getRootElement } from '~/src/utils/domUtils'

import {
  type GetReplacement,
  type GetTooltipStyle,
  LegacyTooltipPosition,
} from './LegacyTooltip.types'

export function getReplacement({
  tooltip,
  keepInContainer,
  placement,
}: GetReplacement): LegacyTooltipPosition {
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
      return LegacyTooltipPosition.BottomLeft
    }
    if (isOverRight) {
      return LegacyTooltipPosition.BottomRight
    }
    return LegacyTooltipPosition.BottomCenter
  }

  if (isOverBottom) {
    if (isOverLeft) {
      return LegacyTooltipPosition.TopLeft
    }
    if (isOverRight) {
      return LegacyTooltipPosition.TopRight
    }
    return LegacyTooltipPosition.TopCenter
  }

  if (isOverLeft) {
    if (isOverTop) {
      return LegacyTooltipPosition.RightTop
    }
    if (isOverBottom) {
      return LegacyTooltipPosition.RightBottom
    }
    return LegacyTooltipPosition.RightCenter
  }

  if (isOverRight) {
    if (isOverTop) {
      return LegacyTooltipPosition.LeftTop
    }
    if (isOverBottom) {
      return LegacyTooltipPosition.LeftBottom
    }
    return LegacyTooltipPosition.LeftCenter
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
    case LegacyTooltipPosition.TopCenter:
    case LegacyTooltipPosition.TopLeft:
    case LegacyTooltipPosition.TopRight:
      translateY = -100
      offsetBottom = offset
      break
    case LegacyTooltipPosition.RightCenter:
    case LegacyTooltipPosition.RightTop:
    case LegacyTooltipPosition.RightBottom:
      left += containerWidth
      offsetLeft = offset
      break
    case LegacyTooltipPosition.BottomCenter:
    case LegacyTooltipPosition.BottomLeft:
    case LegacyTooltipPosition.BottomRight:
      top += containerHeight
      offsetTop = offset
      break
    case LegacyTooltipPosition.LeftCenter:
    case LegacyTooltipPosition.LeftTop:
    case LegacyTooltipPosition.LeftBottom:
      translateX = -100
      offsetRight = offset
      break
  }

  switch (placement) {
    case LegacyTooltipPosition.TopCenter:
    case LegacyTooltipPosition.BottomCenter:
      translateX = -50
      left += (containerWidth / 2)
      break
    case LegacyTooltipPosition.TopRight:
    case LegacyTooltipPosition.BottomRight:
      translateX = -100
      left += containerWidth
      break
    case LegacyTooltipPosition.RightCenter:
    case LegacyTooltipPosition.LeftCenter:
      translateY = -50
      top += (containerHeight / 2)
      break
    case LegacyTooltipPosition.RightBottom:
    case LegacyTooltipPosition.LeftBottom:
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
