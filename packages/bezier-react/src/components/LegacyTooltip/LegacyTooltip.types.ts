import { type Ref } from 'react'

import {
  type AlphaAdditionalStylableProps,
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type ContentProps,
  type DisableProps,
  type PolymorphicProps,
} from '~/src/types/ComponentProps'

interface LegacyTooltipOptions {
  placement?: LegacyTooltipPosition
  offset?: number
  keepInContainer?: boolean
  allowHover?: boolean
  delayShow?: number
  delayHide?: number
  contentTestId?: string
  lazy?: boolean
}

export interface LegacyTooltipProps extends
  AlphaBezierComponentProps,
  PolymorphicProps,
  ChildrenProps,
  ContentProps,
  DisableProps,
  AlphaAdditionalStylableProps<'content' | 'contentWrapper'>,
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof ContentProps>,
  LegacyTooltipOptions {
}

export interface LegacyTooltipContentProps extends Pick<
LegacyTooltipOptions,
'keepInContainer' |
'placement' |
'offset' |
'allowHover'
>,
  AlphaBezierComponentProps,
  PolymorphicProps,
  ContentProps,
  AlphaAdditionalStylableProps<'content' | 'contentWrapper'>,
  DisableProps {
  tooltipContainer: HTMLDivElement | null
  forwardedRef: Ref<HTMLDivElement>
}

export interface GetTooltipStyle extends Required<Pick<LegacyTooltipOptions, 'placement' | 'offset' | 'allowHover'>> {
  tooltipContainer: HTMLDivElement
}

export interface GetReplacement extends Required<Pick<LegacyTooltipOptions, 'placement' | 'keepInContainer'>> {
  tooltip: HTMLDivElement
  rootElement: HTMLElement
}

export enum LegacyTooltipPosition {
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
