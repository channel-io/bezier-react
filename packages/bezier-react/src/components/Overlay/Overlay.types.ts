import {
  type AdditionalOverridableStyleProps,
  type BezierComponentProps,
  type ChildrenProps,
} from '~/src/types/props'
import { type ZIndex } from '~/src/types/tokens'

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
  target?: HTMLElement | null
  position?: OverlayPosition
  marginX?: number
  marginY?: number
  keepInContainer?: boolean
  withTransition?: boolean
  enableClickOutside?: boolean
  onHide?: () => void
}

export interface OverlayProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    AdditionalOverridableStyleProps<'container'>,
    OverlayOwnProps {
  zIndex?: ZIndex
}
