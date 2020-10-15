/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'
import OverlayPosition from './OverlayPosition'

export default interface OverlayProps extends UIComponentProps {
  show?: boolean
  className?: string
  style?: React.CSSProperties
  target: HTMLElement | null
  placement?: OverlayPosition
  marginX?: number
  marginY?: number
  children: React.ReactNode
  onHide?: () => void
}

export interface getOverlayStyleProps {
  target: HTMLElement | null
  overlay: HTMLElement
  placement: OverlayPosition
  marginX: number
  marginY: number
}

export interface getOverlayPositionProps {
  target: HTMLElement
}

export interface getOverlayTranslateProps {
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
