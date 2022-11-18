/* Internal dependencies */
import { BezierComponentProps, SideContentProps, ChildrenProps } from 'Types/ComponentProps'

export enum ModalTitleSize {
  L = 'L',
  M = 'M',
}

interface ModalOptions {
  /**
   * Whether the modal should be shown or not.
   */
  show?: boolean

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

interface ModalContentOptions {
  /**
   * Specify a container element to portal the content into.
   * @default getRootElement()
   */
  container?: HTMLElement | null

  /**
   * Show close icon button that closes the modal when clicked.
   * @default false
   */
  showCloseIcon?: boolean

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
   * @default 1e7
   */
  zIndex?: React.CSSProperties['zIndex']
}

interface ModalHeaderOptions {
  /**
   * An accessible title to be announced when the modal is opened.
   */
  title?: React.ReactNode

  /**
   * An accessible subtitle to be announced when the modal is opened.
   */
  subTitle?: React.ReactNode

  /**
   * An accessible description to be announced when the modal is opened.
   */
  description?: React.ReactNode

  /**
   * Size of the title
   * @default ModalTitleSize.L
   */
  titleSize?: ModalTitleSize
}

type ModalFooterSideContent = React.ReactNode

interface ModalFooterOptions extends
  SideContentProps<ModalFooterSideContent, ModalFooterSideContent> {}

export interface ModalProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  ModalOptions {}

export interface ModalContentProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  ModalContentOptions {}

export interface ModalHeaderProps extends
  BezierComponentProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof ModalHeaderOptions>,
  ModalHeaderOptions {}

export interface ModalBodyProps extends
  ChildrenProps {}

export interface ModalFooterProps extends
  BezierComponentProps,
  React.HTMLAttributes<HTMLDivElement>,
  ModalFooterOptions {}

export interface ModalTriggerProps extends
  ChildrenProps {}

export interface ModalCloseProps extends
  ChildrenProps {}

export interface ModalContentContextValue extends
  NonNullable<Pick<ModalContentOptions, 'showCloseIcon'>> {}
