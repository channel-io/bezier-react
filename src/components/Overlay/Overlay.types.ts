/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { UIComponentProps, ChildrenComponentProps } from '../../types/ComponentProps'

export default interface OverlayProps extends UIComponentProps, ChildrenComponentProps, React.HTMLAttributes<HTMLDivElement> {
  show?: boolean
  containerClassName?: string
  containerStyle?: React.CSSProperties
  target?: HTMLElement | null
  placement?: OverlayPosition
  marginX?: number
  marginY?: number
  onHide?: () => void
}

export interface GetOverlayStyleProps {
  target?: HTMLElement | null
  overlay: HTMLElement
  placement: OverlayPosition
  marginX: number
  marginY: number
}

export interface GetOverlayPositionProps {
  target: HTMLElement
}

export interface GetOverlayTranslatationProps {
  target: HTMLElement
  overlay: HTMLElement
  placement: OverlayPosition
  marginX: number
  marginY: number
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

export type EventHandler<K extends keyof HTMLElementEventMap> = (event: HTMLElementEventMap[K]) => any
