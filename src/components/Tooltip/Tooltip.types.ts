/* Internal dependencies */
import { BezierComponentProps, ChildrenComponentProps } from '../../types/ComponentProps'

export default interface TooltipProps extends BezierComponentProps, ChildrenComponentProps, React.HTMLAttributes<HTMLDivElement> {
  content?: React.ReactNode
  contentClassName?: string
  placement?: TooltipPosition
  offset?: number
  disabled?: boolean
  keepInContainer?: boolean
  allowHover?: boolean
  delayShow?: number
  delayHide?: number
}

export interface GetTooltipStyle extends Required<Pick<TooltipProps, 'placement' | 'offset' | 'allowHover'>> {
  tooltipContainer: HTMLDivElement
}

export interface GetReplacement extends Required<Pick<TooltipProps, 'placement' | 'keepInContainer'>> {
  tooltip: HTMLDivElement
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
