import type React from 'react'

import {
  type AdditionalTestIdProps,
  type AlphaAdditionalStylableProps,
  type AlphaBezierComponentProps,
  type ChildrenProps,
} from '~/src/types/props'

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

interface OverlayOwnProps {
  show?: boolean
  /**
   * Specify a container element to portal the content into.
   * When placed inside a `Modal`, default value is the container element of `Modal`.
   * @default document.body
   */
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

export interface OverlayProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  AlphaAdditionalStylableProps<'container'>,
  AdditionalTestIdProps<'container'>,
  React.HTMLAttributes<HTMLDivElement>,
  OverlayOwnProps {}
