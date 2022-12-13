/* eslint-disable no-restricted-imports */
/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Modal } from '../Modal'
import { ConfirmModalProps } from './ConfirmModal.types'

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

