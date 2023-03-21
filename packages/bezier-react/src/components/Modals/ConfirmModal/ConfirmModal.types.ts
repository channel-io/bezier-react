/* eslint-disable no-restricted-imports */
/* Internal dependencies */
import {
  type ModalProps,
  type ModalContentProps,
  type ModalHeaderProps,
  type ModalBodyProps,
  type ModalFooterProps,
  type ModalTriggerProps,
  type ModalCloseProps,
} from '../Modal'

export interface ConfirmModalProps extends
  ModalProps {}

export interface ConfirmModalContentProps extends
  Omit<ModalContentProps, 'showCloseIcon'> {}

export interface ConfirmModalHeaderProps extends
  Omit<ModalHeaderProps, 'subtitle' | 'titleSize' | 'hidden'> {}

export interface ConfirmModalBodyProps extends
  ModalBodyProps {}

export interface ConfirmModalFooterProps extends
  ModalFooterProps {}

export interface ConfirmModalTriggerProps extends
  ModalTriggerProps {}

export interface ConfirmModalCloseProps extends
  ModalCloseProps {}
