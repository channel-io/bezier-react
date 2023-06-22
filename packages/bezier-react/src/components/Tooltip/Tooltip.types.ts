import { type Ref } from 'react'

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
  AdditionalStylableProps<'content' | 'contentWrapper'>,
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof ContentProps>,
  TooltipOptions {
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
  AdditionalStylableProps<'content' | 'contentWrapper'>,
  DisableProps {
  tooltipContainer: HTMLDivElement | null
  forwardedRef: Ref<HTMLDivElement>
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
