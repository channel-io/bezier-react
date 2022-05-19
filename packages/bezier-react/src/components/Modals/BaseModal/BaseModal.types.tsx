import { BezierComponentProps } from 'Types/ComponentProps'

type BaseModalHtmlAttributes = React.HTMLAttributes<HTMLDivElement>

export interface BaseModalProps extends
  BaseModalHtmlAttributes,
  BezierComponentProps {
  /**
   * @description
   */
  show: boolean

  /**
   * Callback to close modal
   */
  onHide: () => void

  /**
   * Focus when this is opened
   * @default true
   */
  autoFocus?: boolean

  /**
   * When this is true, added modal padding-x
   * @default true
   */
  padded?: boolean

  /**
   * background overlay color classname
   */
  backdropClassName?: string

  /**
   * Portal's target element
   * @default getRootElement()
   */
  targetElement?: HTMLElement | null

  /**
   * @default 1e7
   */
  zIndex?: number
}
