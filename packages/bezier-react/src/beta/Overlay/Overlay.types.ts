import { type BetaZIndex } from '~/src/types/beta-tokens'
import {
  type AdditionalOverridableStyleProps,
  type BezierComponentProps,
  type ChildrenProps,
} from '~/src/types/props'

export interface ContainerRectAttr {
  containerWidth: number
  containerHeight: number
  containerTop: number
  containerLeft: number
  scrollTop: number
  scrollLeft: number
}

export interface TargetRectAttr {
  targetWidth: number
  targetHeight: number
  targetTop: number
  targetLeft: number
  clientTop: number
  clientLeft: number
}

export interface OverlayVirtualTarget {
  /**
   * Returns the rectangle used as the overlay positioning target.
   *
   * Use this for virtual positioning targets, such as a context-menu point
   * derived from a pointer event, when there is no concrete HTMLElement to
   * attach the overlay to.
   */
  getBoundingClientRect: () => Pick<
    DOMRect,
    'width' | 'height' | 'top' | 'left'
  >
  clientTop?: number
  clientLeft?: number
}

export type OverlayTarget = HTMLElement | OverlayVirtualTarget

export type OverlayPosition =
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
  | 'inner-left-top'
  | 'inner-left-bottom'
  | 'inner-right-top'
  | 'inner-right-bottom'

interface OverlayOwnProps {
  show?: boolean
  /**
   * Specify a container element to portal the content into.
   * When placed inside a `Modal`, default value is the container element of `Modal`.
   * @default document.body
   */
  container?: HTMLElement | null
  target?: OverlayTarget | null
  position?: OverlayPosition
  marginX?: number
  marginY?: number
  keepInContainer?: boolean
  withTransition?: boolean
  enableClickOutside?: boolean
  onHide?: () => void

  /**
   * z-index of the overlay.
   * @default 'overlay'
   */
  zIndex?: BetaZIndex
}

export interface OverlayProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    AdditionalOverridableStyleProps<'container'>,
    OverlayOwnProps {}
