/* eslint-disable no-restricted-imports */
/* External dependencies */
import React from 'react'

/* Internal dependencies */
import {
  ModalClose,
  ModalTrigger,
} from '../Modal'

import {
  type ConfirmModalCloseProps,
  type ConfirmModalTriggerProps,
} from './ConfirmModal.types'

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
