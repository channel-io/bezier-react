import {
  type BezierComponentProps,
  type ChildrenProps,
  type ContentProps,
  type DisableProps,
} from '~/src/types/ComponentProps'

import { type BezierIcon } from '~/src/components/Icon'

/**
 * An enumeration that determines the position of `Tooltip`.
 */
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

interface TooltipProviderOptions {
  /**
   * Keeps the content of the tooltip open on hover. Disabling this feature affects accessibility.
   * @default false
   */
  allowHover?: boolean
  /**
   * The delay from when the mouse enters a tooltip trigger until the tooltip opens.
   * @default 0
   */
  delayShow?: number
  /**
   * The delay from when the mouse leaves a tooltip content until the tooltip hides.
   * @default 0
   */
  delayHide?: number
  /**
   * How much time a user has to enter another trigger without incurring a delay again.
   * @default 0
   */
  skipDelayShow?: number
}

interface TooltipOptions {
  /**
   * The open state of the tooltip when it is initially rendered.
   */
  defaultShow?: boolean
  /**
   * Callback function to be called when the tooltip is opened.
   */
  onShow?: () => void
  /**
   * Callback function to be called when the tooltip is closed.
   */
  onHide?: () => void
  /**
   * An element that sits below the tooltip content.
   */
  description?: React.ReactNode
  /**
   * A decorative icon that sits right of the tooltip content.
   */
  icon?: BezierIcon
  /**
   * Options to determine the location from the trigger.
   * @default TooltipPosition.BottomCenter
   */
  placement?: TooltipPosition
  /**
   * The distance in pixels from the trigger.
   * @default 4
   */
  offset?: number
  /**
   * Specify a container element to portal the content into.
   * @default document.body
   */
  container?: HTMLElement | null
  /**
   * When `true`, overrides the `position` of the tooltip
   * to prevent collisions with boundary edges.
   * @default true
   */
  keepInContainer?: boolean
  /**
   * Keeps the content of the tooltip open on hover. Disabling this feature affects accessibility.
   * Inherits from the nearest `TooltipProvider`.
   * @default false
   */
  allowHover?: boolean
  /**
   * The delay from when the mouse enters a tooltip trigger until the tooltip opens.
   * Inherits from the nearest `TooltipProvider`.
   * @default 0
   */
  delayShow?: number
  /**
   * The delay from when the mouse leaves a tooltip content until the tooltip hides.
   * Inherits from the nearest `TooltipProvider`.
   * @default 0
   */
  delayHide?: number
}

export interface TooltipProviderProps extends
  ChildrenProps,
  TooltipProviderOptions {}

export interface TooltipProps extends
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  DisableProps,
  React.HTMLAttributes<HTMLDivElement>,
  TooltipOptions {}
