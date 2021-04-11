/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { UIComponentProps, ChildrenComponentProps } from '../../types/ComponentProps'

export default interface OverlayProps extends UIComponentProps, ChildrenComponentProps, React.HTMLAttributes<HTMLDivElement> {
  show?: boolean
  containerClassName?: string
  containerStyle?: React.CSSProperties
  container?: HTMLElement | null
  target?: HTMLElement | null
  placement?: OverlayPosition
  marginX?: number
  marginY?: number
  keepInContainer?: boolean
  transition?: boolean
  targetClose?: boolean
  onHide?: () => void
}

interface ContainerRectAttr {
  containerWidth: number
  containerHeight: number
  containerTop: number
  containerLeft: number
  scrollTop: number
  scrollLeft: number
}

interface TargretRectAttr {
  targetWidth: number
  targetHeight: number
  targetTop: number
  targetLeft: number
  clientTop: number
  clientLeft: number
}

export interface GetOverlayStyleProps {
  containerRect: ContainerRectAttr | null
  targetRect: TargretRectAttr | null
  overlay: HTMLElement
  placement: OverlayPosition
  marginX: number
  marginY: number
  keepInContainer: boolean
}

export interface GetOverlayPositionProps {
  containerRect: ContainerRectAttr
  targetRect: TargretRectAttr | null
}

export interface GetOverlayTranslatationProps {
  containerRect: ContainerRectAttr
  targetRect: TargretRectAttr | null
  overlay: HTMLElement
  placement: OverlayPosition
  marginX: number
  marginY: number
  keepInContainer: boolean
}

export interface StyledOverlayProps {
  isHidden: boolean
  transition: boolean
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
}
