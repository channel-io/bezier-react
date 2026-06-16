import {
  type ModalBodyProps,
  type ModalCloseProps,
  type ModalContentProps,
  type ModalFooterProps,
  type ModalHeaderProps,
  type ModalProps,
  type ModalTriggerProps,
} from '~/src/v3/Modal'

export interface ConfirmModalProps extends ModalProps {}

export interface ConfirmModalContentProps
  extends Omit<ModalContentProps, 'type'> {}

export interface ConfirmModalHeaderProps
  extends Omit<ModalHeaderProps, 'subtitle' | 'titleSize' | 'hidden'> {}

export interface ConfirmModalBodyProps extends ModalBodyProps {}

export interface ConfirmModalFooterProps extends ModalFooterProps {}

export interface ConfirmModalTriggerProps extends ModalTriggerProps {}

export interface ConfirmModalCloseProps extends ModalCloseProps {}
