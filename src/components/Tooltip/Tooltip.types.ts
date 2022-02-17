/* External dependencies */
import { Ref } from 'react'
/* Internal dependencies */
import {
  BezierComponentProps,
  RenderConfigProps,
  ChildrenProps,
  ContentProps,
  DisableProps,
  AdditionalStylableProps,
} from 'Types/ComponentProps'

interface TooltipOptions {
  placement?: TooltipPosition
  offset?: number
  keepInContainer?: boolean
  allowHover?: boolean
  delayShow?: number
  delayHide?: number
}

export default interface TooltipProps extends
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  DisableProps,
  AdditionalStylableProps<'content'>,
  React.HTMLAttributes<HTMLDivElement>,
  TooltipOptions {
  contentTestId?: string
  lazy?: boolean
}

export interface TooltipContentProps extends Pick<
TooltipOptions,
'keepInContainer' |
'placement' |
'offset' |
'allowHover'
>,
  RenderConfigProps,
  ContentProps,
  AdditionalStylableProps<'content'>,
  DisableProps {
  tooltipContainer: HTMLDivElement | null
  forwardedRef: Ref<any>
}

export interface GetTooltipStyle extends Required<Pick<TooltipOptions, 'placement' | 'offset' | 'allowHover'>> {
  tooltipContainer: HTMLDivElement
}

export interface GetReplacement extends Required<Pick<TooltipOptions, 'placement' | 'keepInContainer'>> {
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
