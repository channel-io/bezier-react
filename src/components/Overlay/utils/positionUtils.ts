/* Internal dependencies */
import {
  GetOverlayStyleProps,
  GetOverlayPositionProps,
  GetOverlayTranslatationProps,
  OverlayPosition,
} from '../Overlay.types'

export function getOverlayPosition({ containerRect, targetRect }: GetOverlayPositionProps): React.CSSProperties {
  if (containerRect && targetRect) {
    const { containerTop, containerLeft, scrollTop, scrollLeft } = containerRect
    const { targetTop, targetLeft, clientTop, clientLeft } = targetRect

    const top = targetTop - clientTop - containerTop + scrollTop
    const left = targetLeft - clientLeft - containerLeft + scrollLeft

    return { top, left }
  }
  return {}
}

export function getOverlayTranslation({
  containerRect,
  targetRect,
  overlay,
  placement,
  marginX,
  marginY,
  keepInContainer,
}: GetOverlayTranslatationProps): React.CSSProperties {
  if (containerRect && targetRect) {
    const {
      containerWidth,
      containerHeight,
      containerTop,
      containerLeft,
    } = containerRect
    const { targetWidth, targetHeight, targetTop, targetLeft } = targetRect
    const { width: overlayWidth, height: overlayHeight } = overlay.getBoundingClientRect()

    let translateX = 0
    let translateY = 0

    // pre position
    switch (placement) {
      case OverlayPosition.TopCenter:
      case OverlayPosition.TopLeft:
      case OverlayPosition.TopRight:
        translateY -= (overlayHeight + marginY)
        translateX += marginX
        break
      case OverlayPosition.RightCenter:
      case OverlayPosition.RightTop:
      case OverlayPosition.RightBottom:
        translateX += (targetWidth + marginX)
        translateY += marginY
        break
      case OverlayPosition.BottomCenter:
      case OverlayPosition.BottomLeft:
      case OverlayPosition.BottomRight:
        translateY += (targetHeight + marginY)
        translateX += marginX
        break
      case OverlayPosition.LeftCenter:
      case OverlayPosition.LeftTop:
      case OverlayPosition.LeftBottom:
        translateX -= (overlayWidth + marginX)
        translateY += marginY
        break
    }
    // post position
    switch (placement) {
      case OverlayPosition.TopCenter:
      case OverlayPosition.BottomCenter:
        translateX -= ((overlayWidth / 2) - (targetWidth / 2))
        break
      case OverlayPosition.TopRight:
      case OverlayPosition.BottomRight:
        translateX -= (overlayWidth - targetWidth)
        break
      case OverlayPosition.RightCenter:
      case OverlayPosition.LeftCenter:
        translateY -= ((overlayHeight / 2) - (targetHeight / 2))
        break
      case OverlayPosition.RightBottom:
      case OverlayPosition.LeftBottom:
        translateY -= (overlayHeight - targetHeight)
        break
    }

    // inner position
    switch (placement) {
      case OverlayPosition.InnerLeftTop:
        translateX = marginX
        translateY = marginY
        break
      case OverlayPosition.InnerLeftBottom:
        translateX = marginX
        translateY = targetHeight - overlayHeight + marginY
        break
      case OverlayPosition.InnerRightTop:
        translateX = targetWidth - overlayWidth + marginX
        translateY = marginY
        break
      case OverlayPosition.InnerRightBottom:
        translateX = targetWidth - overlayWidth + marginX
        translateY = targetHeight - overlayHeight + marginY
        break
    }

    if (keepInContainer) {
      const isOverTop = targetTop + translateY < containerTop
      const isOverBottom = targetTop + translateY + overlayHeight > containerTop + containerHeight
      const isOverLeft = targetLeft + translateX < containerLeft
      const isOverRight = targetLeft + translateX + overlayWidth > containerLeft + containerWidth

      if (isOverTop || isOverBottom) {
        translateY = targetHeight - translateY - overlayHeight
      }
      if (isOverLeft || isOverRight) {
        translateX = targetWidth - translateX - overlayWidth
      }
    }

    const transform = `translate(${translateX}px, ${translateY}px)`
    return { transform }
  }
  return {}
}

export function getOverlayStyle({
  containerRect,
  targetRect,
  overlay,
  placement,
  marginX,
  marginY,
  keepInContainer,
}: GetOverlayStyleProps): React.CSSProperties {
  if (containerRect && targetRect) {
    const overlayPositionStyle = getOverlayPosition({ containerRect, targetRect })
    const overlayTranslateStyle = getOverlayTranslation({
      containerRect,
      targetRect,
      overlay,
      placement,
      marginX,
      marginY,
      keepInContainer,
    })

    const combinedStyle = {
      ...overlayPositionStyle,
      ...overlayTranslateStyle,
      willChange: 'left, top',
    }

    return combinedStyle
  }
  return {}
}
