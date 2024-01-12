import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type SideContentProps,
} from '~/src/types/ComponentProps'
import { type ZIndex } from '~/src/types/Token'

export enum ModalTitleSize {
  L = 'L',
  M = 'M',
}

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
   * @default noop
   */
  onShow?: () => void

  /**
   * Callback function to be called when the modal is closed.
   * @default noop
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
   * @default ModalTitleSize.L
   */
  titleSize?: ModalTitleSize

  /**
   * Hides content from the screen in an accessible way.
   * @default false
   */
  hidden?: boolean
}

type ModalFooterSideContent = React.ReactNode

interface ModalFooterOwnProps extends
  SideContentProps<ModalFooterSideContent, ModalFooterSideContent> {}

export interface ModalProps extends
  ChildrenProps,
  ModalOwnProps {}

export interface ModalContentProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  ModalContentOwnProps {}

export interface ModalHeaderProps extends
  AlphaBezierComponentProps,
  Omit<React.HTMLAttributes<HTMLElement>, keyof ModalHeaderOwnProps>,
  ModalHeaderOwnProps {}

export interface ModalBodyProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement> {}

export interface ModalFooterProps extends
  AlphaBezierComponentProps,
  React.HTMLAttributes<HTMLElement>,
  ModalFooterOwnProps {}

export interface ModalTriggerProps extends
  ChildrenProps<React.ReactElement> {}

export interface ModalCloseProps extends
  ChildrenProps<React.ReactElement> {}

export interface ModalContentPropsContextValue extends
  Required<Pick<ModalContentOwnProps, 'showCloseIcon'>> {}
