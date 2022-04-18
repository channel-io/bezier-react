/* eslint-disable no-restricted-imports */
/* Internal dependencies */
import { BezierComponentProps, SideContentProps, ChildrenProps } from 'Types/ComponentProps'
import { TextProps } from 'Components/Text'
import { BaseModalProps } from '../BaseModal'

export enum ModalTitleSize {
  L = 'L',
  M = 'M',
}

export interface ModalContextValue {
  onHide: () => void
}

export interface ModalProps extends BaseModalProps { }

export interface ModalContentProps extends
  BezierComponentProps,
  ChildrenProps {
  /**
   * To show close icon
   * @default false
   */
  showCloseIcon?: boolean

  /**
   * Modal title
   * (@sol) The reason it is "React.ReactNode" rather than "string" is to avoid increasing complexity by adding icon props.
   * (e.g. Tooltip or Click)
   */
  title?: React.ReactNode

  /**
   * @default L
   * L title font-size 24
   * M title font-size 16
   */
  titleSize?: ModalTitleSize

  subTitle?: string

  description?: string
}

export interface ModalTitleTextProps extends TextProps {
  titleSize?: ModalContentProps['titleSize']
}

type ModalActionSideContent = React.ReactNode

export interface ModalActionProps extends
  BezierComponentProps,
  SideContentProps<ModalActionSideContent, ModalActionSideContent> { }

