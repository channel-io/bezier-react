import {
  type BezierComponentProps,
  type ChildrenProps,
  type SideContentProps,
} from '~/src/types/ComponentProps'

export enum ModalTitleSize {
  L = 'L',
  M = 'M',
}

interface ModalOptions {
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

interface ModalContentOptions {
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
   * @default ZIndex.Modal
   */
  zIndex?: React.CSSProperties['zIndex']
}

interface ModalHeaderOptions {
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

interface ModalFooterOptions extends
  SideContentProps<ModalFooterSideContent, ModalFooterSideContent> {}

export interface ModalProps extends
  ChildrenProps,
  ModalOptions {}

export interface ModalContentProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  ModalContentOptions {}

export interface ModalHeaderProps extends
  BezierComponentProps,
  Omit<React.HTMLAttributes<HTMLElement>, keyof ModalHeaderOptions>,
  ModalHeaderOptions {}

export interface ModalBodyProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement> {}

export interface ModalFooterProps extends
  BezierComponentProps,
  React.HTMLAttributes<HTMLElement>,
  ModalFooterOptions {}

export interface ModalTriggerProps extends
  ChildrenProps<React.ReactElement> {}

export interface ModalCloseProps extends
  ChildrenProps<React.ReactElement> {}

export interface ModalContentContextValue extends
  NonNullable<Pick<ModalContentOptions, 'showCloseIcon'>> {}
