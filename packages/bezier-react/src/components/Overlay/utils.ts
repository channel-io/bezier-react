/* Internal dependencies */
import { css } from '~/src/foundation'
import {
  OverlayPosition,
  type ContainerRectAttr,
  type TargetRectAttr,
} from './Overlay.types'

const TOP_POSITION_OFFSET = 10

interface GetOverlayPositionArgs {
  containerRect: ContainerRectAttr
  targetRect: TargetRectAttr
  show: boolean
}

export function getOverlayPosition({
  containerRect,
  targetRect,
  show,
}: GetOverlayPositionArgs) {
  const { containerTop, containerLeft, scrollTop, scrollLeft } = containerRect
  const { targetTop, targetLeft, clientTop, clientLeft } = targetRect

  const top = targetTop - clientTop - containerTop + scrollTop
  const left = targetLeft - clientLeft - containerLeft + scrollLeft

  return {
    top: show ? top : top - TOP_POSITION_OFFSET,
    left,
  }
}

interface GetOverlayTranslatationArgs {
  containerRect: ContainerRectAttr
  targetRect: TargetRectAttr | null
  overlay: HTMLElement | null
  position: OverlayPosition
  marginX: number
  marginY: number
  keepInContainer: boolean
}

export function getOverlayTranslation({
  containerRect,
  targetRect,
  overlay,
  position,
  marginX,
  marginY,
  keepInContainer,
}: GetOverlayTranslatationArgs) {
  if (containerRect && targetRect && overlay) {
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
    switch (position) {
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

    switch (position) {
      // post position
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

      // inner position
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

      const topSpace = targetTop - containerTop
      const bottomSpace = (containerTop + containerHeight) - (targetTop + targetHeight)
      const leftSpace = targetLeft - containerLeft
      const rightSpace = (containerLeft + containerWidth) - (targetLeft + targetWidth)

      if (isOverTop) {
        translateY = topSpace > bottomSpace
          ? translateY
          : targetHeight - translateY - overlayHeight
      } else if (isOverBottom) {
        translateY = bottomSpace > topSpace
          ? translateY
          : targetHeight - translateY - overlayHeight
      }
      if (isOverLeft) {
        translateX = leftSpace > rightSpace
          ? translateX
          : targetWidth - translateX - overlayWidth
      } else if (isOverRight) {
        translateX = rightSpace > leftSpace
          ? translateX
          : targetWidth - translateX - overlayWidth
      }
    }

    return {
      translateX: Math.round(translateX),
      translateY: Math.round(translateY),
    }
  }
  return {
    translateX: 0,
    translateY: 0,
  }
}

interface GetOverlayStyleArgs {
  containerRect: ContainerRectAttr
  targetRect: TargetRectAttr | null
  overlay: HTMLElement | null
  position: OverlayPosition
  marginX: number
  marginY: number
  keepInContainer: boolean
  show: boolean
}

export function getOverlayStyle({
  containerRect,
  targetRect,
  overlay,
  position,
  marginX,
  marginY,
  keepInContainer,
  show,
}: GetOverlayStyleArgs) {
  if (containerRect && targetRect) {
    const { top, left } = getOverlayPosition({ containerRect, targetRect, show })
    const { translateX, translateY } = getOverlayTranslation({
      containerRect,
      targetRect,
      overlay,
      position,
      marginX,
      marginY,
      keepInContainer,
    })

    return css`
      top: ${top}px;
      left: ${left}px;
      transform: translateX(${translateX}px) translateY(${translateY}px);
    `
  }
  return css``
}
