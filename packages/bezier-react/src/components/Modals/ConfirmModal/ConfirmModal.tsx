import React, { forwardRef } from 'react'

import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitleSize,
  ModalTrigger,
} from '../Modal'

import {
  type ConfirmModalBodyProps,
  type ConfirmModalCloseProps,
  type ConfirmModalContentProps,
  type ConfirmModalFooterProps,
  type ConfirmModalHeaderProps,
  type ConfirmModalProps,
  type ConfirmModalTriggerProps,
} from './ConfirmModal.types'

/**
 * `ConfirmModal` is a modal dialog that interrupts the user with important content and expects a response.
 *
 * `ConfirmModal` is a context of the ConfirmModal-related components. It doesn't render any DOM node.
 * It controls the visibility of the entire component and provides
 * handlers and accessibility properties to ConfirmModal-related components.
 *
 * @example
 *
 * ```tsx
 * // Anatomy of the ConfirmModal
 * <ConfirmModal>
 *  <ConfirmModalModalTrigger />
 *  <ConfirmModalModalContent>
 *    <ConfirmModalModalHeader />
 *    <ConfirmModalModalBody />
 *    <ConfirmModalModalFooter />
 *  </ConfirmModalModalContent>
 * </ConfirmModal>
 * ```
 */
export function ConfirmModal({
  children,
  ...rest
}: ConfirmModalProps) {
  return (
    <Modal {...rest}>
      { children }
    </Modal>
  )
}

/**
 * `ConfirmModalContent` is a container of the modal content.
 * It creates a portal to render the modal content outside of the DOM tree
 * and renders overlay behind the modal content too.
 */
export const ConfirmModalContent = forwardRef(function ConfirmModalContent({
  children,
  ...rest
}: ConfirmModalContentProps, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <ModalContent
      role="alertdialog"
      ref={forwardedRef}
      showCloseIcon={false}
      {...rest}
    >
      { children }
    </ModalContent>
  )
})

/**
 * `ConfirmModalHeader` is a header of the modal content.
 * It renders the accessible title and description of the modal.
 */
export const ConfirmModalHeader = forwardRef(function ConfirmModalHeader(
  props: ConfirmModalHeaderProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  return (
    <ModalHeader
      ref={forwardedRef}
      subtitle={null}
      titleSize={ModalTitleSize.M}
      {...props}
    />
  )
})

/**
 * `ConfirmModalBody` is a simple wrapper of the main modal content.
 */
export const ConfirmModalBody = forwardRef(function ConfirmModalBody({
  children,
  ...rest
}: ConfirmModalBodyProps, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <ModalBody
      ref={forwardedRef}
      {...rest}
    >
      { children }
    </ModalBody>
  )
})

/**
 * `ConfirmModalFooter` is a simple wrapper of the footer of the modal content.
 * Usually, it contains the action buttons of the modal.
 */
export const ConfirmModalFooter = forwardRef(function ConfirmModalFooter(
  props: ConfirmModalFooterProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  return (
    <ModalFooter
      ref={forwardedRef}
      {...props}
    />
  )
})

/**
 * `ConfirmModalTrigger` is a button that opens the modal. **It doesn't render any DOM node.**
 * It passes the handler that opens the modal and accessibility properties to the children.
 *
 * It **must** be placed outside of the `ConfirmModalContent`.
 */
export function ConfirmModalTrigger({ children }: ConfirmModalTriggerProps) {
  return (
    <ModalTrigger>
      { children }
    </ModalTrigger>
  )
}

/**
 * `ConfirmModalClose` is a button that closes the modal. **It doesn't render any DOM node.**
 * It passes the handler that closes the modal to the children.
 */
export function ConfirmModalClose({ children }: ConfirmModalCloseProps) {
  return (
    <ModalClose>
      { children }
    </ModalClose>
  )
}
