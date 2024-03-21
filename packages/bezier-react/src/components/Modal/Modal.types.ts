import {
  type BezierComponentProps,
  type ChildrenProps,
  type SideContentProps,
} from '~/src/types/props'
import { type ZIndex } from '~/src/types/tokens'

export type ModalTitleSize = 'l' | 'm'

type BoxSide = 'top' | 'right' | 'bottom' | 'left'

interface ModalOwnProps {
  /**
   * The controlled open state of the modal.
   * Must be used in conjunction with `onShow` and `onHide`.
   */
  show?: boolean

  /**
   * The open state of the modal when it is initially rendered.
   * Use when you **do not need to control** its open state.
   */
  defaultShow?: boolean

  /**
   * Callback function to be called when the modal is opened.
   */
  onShow?: () => void

  /**
   * Callback function to be called when the modal is closed.
   */
  onHide?: () => void
}

interface ModalContentOwnProps {
  /**
   * Specify a container element to portal the content into.
   * @default document.body
   */
  container?: HTMLElement | null

  /**
   * Show close icon button that closes the modal when clicked.
   * @default false
   */
  showCloseIcon?: boolean

  /**
   * Decides whether modal closes when clicked outside
   * @default false
   */
  preventHideOnOutsideClick?: boolean

  /**
   * Width of the modal.
   * @default 'max-content'
   */
  width?: React.CSSProperties['width']

  /**
   * Height of the modal.
   * @default 'fit-content'
   */
  height?: React.CSSProperties['height']

  /**
   * z-index of the modal content.
   * Rather than using this option, Please check modal is positioned in the proper stacking context.
   * @default 'modal'
   */
  zIndex?: ZIndex

  /**
   * Determine padding of overlay that contains modal content.
   * @default { top: 40, bottom: 40 }
   */
  collisionPadding?: number | Partial<Record<BoxSide, number>>
}

interface ModalHeaderOwnProps {
  /**
   * An accessible title to be announced when the modal is opened.
   */
  title: React.ReactNode

  /**
   * An accessible subtitle to be announced when the modal is opened.
   */
  subtitle?: React.ReactNode

  /**
   * An accessible description to be announced when the modal is opened.
   */
  description?: React.ReactNode

  /**
   * Size of the title
   * @default 'l'
   */
  titleSize?: ModalTitleSize

  /**
   * Hides content from the screen in an accessible way.
   * @default false
   */
  hidden?: boolean
}

type ModalFooterSideContent = React.ReactNode

interface ModalFooterOwnProps
  extends SideContentProps<ModalFooterSideContent, ModalFooterSideContent> {}

export interface ModalProps extends ChildrenProps, ModalOwnProps {}

export interface ModalContentProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    ModalContentOwnProps {}

export interface ModalHeaderProps
  extends Omit<BezierComponentProps<'header'>, keyof ModalHeaderOwnProps>,
    ModalHeaderOwnProps {}

export interface ModalBodyProps
  extends BezierComponentProps<'div'>,
    ChildrenProps {}

export interface ModalFooterProps
  extends BezierComponentProps<'footer'>,
    ModalFooterOwnProps {}

export interface ModalTriggerProps extends ChildrenProps<React.ReactElement> {}

export interface ModalCloseProps extends ChildrenProps<React.ReactElement> {}

export interface ModalContentPropsContextValue
  extends Required<Pick<ModalContentOwnProps, 'showCloseIcon'>> {}
