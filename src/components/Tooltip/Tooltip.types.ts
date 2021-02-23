/* Internal dependencies */
import { UIComponentProps, ChildrenComponentProps } from '../../types/ComponentProps'

export default interface TooltipProps extends UIComponentProps, ChildrenComponentProps, React.HTMLAttributes<HTMLDivElement> {
  content?: React.ReactNode
  placement?: TooltipPosition
  offset?: number
  delayHide?: boolean
  disabled?: boolean
}

export interface GetTooltipStyle extends Required<Pick<TooltipProps, 'placement' | 'offset'>> {
  container: HTMLDivElement | null
  tooltip: HTMLDivElement | null
}

export enum TooltipPosition {
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
