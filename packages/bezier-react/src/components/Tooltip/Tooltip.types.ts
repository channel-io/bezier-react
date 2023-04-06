/* External dependencies */
import { type Ref } from 'react'

/* Internal dependencies */
import {
  type AdditionalStylableProps,
  type BezierComponentProps,
  type ChildrenProps,
  type ContentProps,
  type DisableProps,
  type RenderConfigProps,
} from '~/src/types/ComponentProps'

interface TooltipOptions {
  placement?: TooltipPosition
  offset?: number
  container?: HTMLElement | null
  keepInContainer?: boolean
  allowHover?: boolean
  delayShow?: number
  delayHide?: number
  contentTestId?: string
  lazy?: boolean
}

export default interface TooltipProps extends
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  DisableProps,
  AdditionalStylableProps<'content'>,
  React.HTMLAttributes<HTMLDivElement>,
  TooltipOptions {
}

export interface TooltipContentProps extends Pick<
TooltipOptions,
'container' |
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
  forwardedRef: Ref<HTMLDivElement>
}

export interface GetTooltipStyle extends Required<Pick<TooltipOptions, 'placement' | 'offset' | 'allowHover'>> {
  tooltipContainer: HTMLDivElement
}

export interface GetReplacement extends Required<Pick<TooltipOptions, 'placement' | 'container' | 'keepInContainer'>> {
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
