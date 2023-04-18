import type * as TooltipPrimitive from '@radix-ui/react-tooltip'

import {
  type BezierComponentProps,
  type ChildrenProps,
  type ContentProps,
  type DisableProps,
} from '~/src/types/ComponentProps'

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

interface TooltipOptions {
  placement?: TooltipPosition
  offset?: number
  container?: HTMLElement | null
  keepInContainer?: boolean
  delayShow?: number
}

export interface TooltipProps extends
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  DisableProps,
  React.HTMLAttributes<HTMLDivElement>,
  TooltipOptions {}

export interface TooltipContentProps extends
  BezierComponentProps,
  TooltipPrimitive.TooltipContentProps {}
