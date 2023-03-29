/* External dependencies */
import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

/* Internal dependencies */
import {
  type ModalTriggerProps,
  type ModalCloseProps,
} from './Modal.types'

/**
 * `ModalTrigger` is a button that opens the modal. **It doesn't render any DOM node.**
 * It passes the handler that opens the modal and accessibility properties to the children.
 *
 * It **must** be placed outside of the `ModalContent`.
 */
export function ModalTrigger({ children }: ModalTriggerProps) {
  return (
    <DialogPrimitive.Trigger asChild>
      { children }
    </DialogPrimitive.Trigger>
  )
}

/**
 * `ModalClose` is a button that closes the modal. **It doesn't render any DOM node.**
 * It passes the handler that closes the modal to the children.
 */
export function ModalClose({ children }: ModalCloseProps) {
  return (
    <DialogPrimitive.Close asChild>
      { children }
    </DialogPrimitive.Close>
  )
}
