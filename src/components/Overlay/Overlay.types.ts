/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'

export interface ContainerRectAttr {
  containerWidth: number
  containerHeight: number
  containerTop: number
  containerLeft: number
  scrollTop: number
  scrollLeft: number
}

export interface TargetRectAttr {
  targetWidth: number
  targetHeight: number
  targetTop: number
  targetLeft: number
  clientTop: number
  clientLeft: number
}

export default interface OverlayProps extends ChildrenComponentProps, React.HTMLAttributes<HTMLDivElement> {
  containerTestId?: string
  wrapperTestId?: string
  show?: boolean
  containerClassName?: string
  containerStyle?: React.CSSProperties
  container?: HTMLElement | null
  target?: HTMLElement | null
  position?: OverlayPosition
  marginX?: number
  marginY?: number
  keepInContainer?: boolean
  withTransition?: boolean
  enableClickOutside?: boolean
  onHide?: () => void
}

export enum OverlayPosition {
  TopCenter = 'topCenter',
  TopLeft = 'topLeft',
  TopRight = 'topRight',
  RightCenter = 'rightCenter',
  RightTop = 'rightTop',
  RightBottom = 'rightBottom',
  BottomCenter = 'bottomCenter',
  BottomLeft = 'bottomLeft',
  BottomRight = 'bottomRight',
  LeftCenter = 'leftCenter',
  LeftTop = 'leftTop',
  LeftBottom = 'leftBottom',
  InnerLeftTop = 'innerLeftTop',
  InnerLeftBottom = 'innerLeftBottom',
  InnerRightTop = 'innerRightTop',
  InnerRightBottom = 'innerRightBottom',
}
