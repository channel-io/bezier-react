/* Internal dependencies */
import { UIComponentProps, ChildrenComponentProps } from '../../types/ComponentProps'

export default interface TooltipProps extends UIComponentProps, ChildrenComponentProps, React.HTMLAttributes<HTMLDivElement> {
  content?: React.ReactNode
  placement?: TooltipPosition
  offset?: number
  disabled?: boolean
  keepInContainer?: boolean
}

export interface GetTooltipStyle extends Required<Pick<TooltipProps, 'placement' | 'offset'>> {
  isOverHorizontal: boolean
  isOverVertical: boolean
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
