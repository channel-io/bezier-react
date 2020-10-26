/* Internal dependencies */
import { UIComponentProps, ChildrenComponentProps } from '../../types/ComponentProps'
import OverlayPosition from './OverlayPosition'

export default interface OverlayProps extends UIComponentProps, ChildrenComponentProps {
  show?: boolean
  target: HTMLElement | null | undefined
  placement?: OverlayPosition
  marginX?: number
  marginY?: number
  onHide?: () => void
}

export interface getOverlayStyleProps {
  target: HTMLElement | null | undefined
  overlay: HTMLElement
  placement: OverlayPosition
  marginX: number
  marginY: number
}

export interface getOverlayPositionProps {
  target: HTMLElement
}

export interface getOverlayTranslatationProps {
  target: HTMLElement
  overlay: HTMLElement
  placement: OverlayPosition
  marginX: number
  marginY: number
}

export interface StyledOverlayProps {
  isHidden: boolean
}

export type EventHandler<K extends keyof HTMLElementEventMap> = (event: HTMLElementEventMap[K]) => any
