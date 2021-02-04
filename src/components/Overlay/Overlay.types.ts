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
  onHide?: () => void
}

export interface GetOverlayStyleProps {
  container?: HTMLElement | null
  target?: HTMLElement | null
  overlay: HTMLElement
  placement: OverlayPosition
  marginX: number
  marginY: number
  keepInContainer: boolean
}

export interface GetOverlayPositionProps {
  container?: HTMLElement | null
  target: HTMLElement
}

export interface GetOverlayTranslatationProps {
  container?: HTMLElement | null
  target: HTMLElement
  overlay: HTMLElement
  placement: OverlayPosition
  marginX: number
  marginY: number
  keepInContainer: boolean
}

export interface StyledOverlayProps {
  isHidden: boolean
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
