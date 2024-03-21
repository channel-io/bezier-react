import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type BezierComponentProps,
  type ChildrenProps,
  type ContentProps,
  type DisableProps,
} from '~/src/types/props'

export type TooltipPosition =
  | 'top-center'
  | 'top-left'
  | 'top-right'
  | 'right-center'
  | 'right-top'
  | 'right-bottom'
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-center'
  | 'left-top'
  | 'left-bottom'

interface TooltipOwnProps {
  /**
   * The open state of the tooltip when it is initially rendered.
   */
  defaultShow?: boolean
  /**
   * An element that sits above the tooltip content.
   */
  title?: React.ReactNode
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
   * @default 'bottom-center'
   */
  placement?: TooltipPosition
  /**
   * The distance in pixels from the trigger.
   * @default 4
   */
  offset?: number
  /**
   * Specify a container element to portal the content into.
   * When placed inside a `Modal`, default value is the container element of `Modal`.
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
   * Callback function to be called when the tooltip is opened.
   */
  onShow?: () => void
  /**
   * Callback function to be called when the tooltip is closed.
   */
  onHide?: () => void
  /**
   * Event handler called when the escape key is down.
   * It can be prevented by calling `event.preventDefault`.
   */
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  /**
   * Event handler called when a pointer event occurs outside the bounds of the component.
   * It can be prevented by calling `event.preventDefault`.
   */
  onPointerDownOutside?: (
    event: CustomEvent<{ originalEvent: PointerEvent }>
  ) => void
}

export interface TooltipProps
  extends Omit<
      BezierComponentProps<'div'>,
      'title' | keyof ContentProps | keyof ChildrenProps
    >,
    ChildrenProps<React.ReactElement>,
    ContentProps,
    DisableProps,
    TooltipOwnProps {}
