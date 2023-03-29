/* External dependencies */
import type React from 'react'

/* Internal dependencies */
import {
  type BezierComponentProps,
  type ChildrenProps,
  type AdditionalStylableProps,
  type AdditionalTestIdProps,
} from '~/src/types/ComponentProps'

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

interface OverlayOptions {
  show?: boolean
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

export default interface OverlayProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  AdditionalStylableProps<'container'>,
  AdditionalTestIdProps<['container', 'wrapper']>,
  OverlayOptions {}
