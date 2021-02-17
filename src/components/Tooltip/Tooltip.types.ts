/* Internal dependencies */
import { UIComponentProps, ChildrenComponentProps } from '../../types/ComponentProps'

export default interface TooltipProps extends UIComponentProps, ChildrenComponentProps, React.HTMLAttributes<HTMLDivElement> {
  content?: React.ReactNode
  placement?: TooltipPosition
  offset?: number
  marginX?: number
  marginY?: number
  delayHide?: boolean
  disabled?: boolean
}

export interface GetTooltipStyle extends Required<Pick<TooltipProps, 'placement' | 'offset' | 'marginX' | 'marginY'>> {
  container: HTMLDivElement | null
  tooltip: HTMLDivElement | null
}

export enum TooltipPosition {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
}
