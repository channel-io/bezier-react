import {
  type GetReplacement,
  type GetTooltipStyle,
  type LegacyTooltipPosition,
} from './LegacyTooltip.types'

export function getReplacement({
  tooltip,
  keepInContainer,
  placement,
  rootElement,
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
  } = rootElement.getBoundingClientRect()

  const isOverTop = tooltipTop < rootTop
  const isOverBottom = tooltipTop + tooltipHeight > rootTop + rootHeight
  const isOverLeft = tooltipLeft < rootLeft
  const isOverRight = tooltipLeft + tooltipWidth > rootLeft + rootWidth

  if (isOverTop) {
    if (isOverLeft) {
      return 'bottom-left'
    }
    if (isOverRight) {
      return 'bottom-right'
    }
    return 'bottom-center'
  }

  if (isOverBottom) {
    if (isOverLeft) {
      return 'top-left'
    }
    if (isOverRight) {
      return 'top-right'
    }
    return 'top-center'
  }

  if (isOverLeft) {
    if (isOverTop) {
      return 'right-top'
    }
    if (isOverBottom) {
      return 'right-bottom'
    }
    return 'right-center'
  }

  if (isOverRight) {
    if (isOverTop) {
      return 'left-top'
    }
    if (isOverBottom) {
      return 'left-bottom'
    }
    return 'left-center'
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
    case 'top-center':
    case 'top-left':
    case 'top-right':
      translateY = -100
      offsetBottom = offset
      break
    case 'right-center':
    case 'right-top':
    case 'right-bottom':
      left += containerWidth
      offsetLeft = offset
      break
    case 'bottom-center':
    case 'bottom-left':
    case 'bottom-right':
      top += containerHeight
      offsetTop = offset
      break
    case 'left-center':
    case 'left-top':
    case 'left-bottom':
      translateX = -100
      offsetRight = offset
      break
  }

  switch (placement) {
    case 'top-center':
    case 'bottom-center':
      translateX = -50
      left += (containerWidth / 2)
      break
    case 'top-right':
    case 'bottom-right':
      translateX = -100
      left += containerWidth
      break
    case 'right-center':
    case 'left-center':
      translateY = -50
      top += (containerHeight / 2)
      break
    case 'right-bottom':
    case 'left-bottom':
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
