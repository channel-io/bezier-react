/* eslint-disable no-restricted-imports */
import {
  type ModalBodyProps,
  type ModalCloseProps,
  type ModalContentProps,
  type ModalFooterProps,
  type ModalHeaderProps,
  type ModalProps,
  type ModalTriggerProps,
} from '~/src/components/Modal'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface ConfirmModalProps extends ModalProps {}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface ConfirmModalContentProps
  extends Omit<ModalContentProps, 'showCloseIcon'> {}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface ConfirmModalHeaderProps
  extends Omit<ModalHeaderProps, 'subtitle' | 'titleSize' | 'hidden'> {}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface ConfirmModalBodyProps extends ModalBodyProps {}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface ConfirmModalFooterProps extends ModalFooterProps {}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface ConfirmModalTriggerProps extends ModalTriggerProps {}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface ConfirmModalCloseProps extends ModalCloseProps {}
