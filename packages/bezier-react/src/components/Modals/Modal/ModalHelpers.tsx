/* External dependencies */
import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

/* Internal dependencies */
import { ModalTriggerProps, ModalCloseProps } from './Modal.types'

export function ModalTrigger({ children }: ModalTriggerProps) {
  return (
    <DialogPrimitive.Trigger asChild>
      { children }
    </DialogPrimitive.Trigger>
  )
}

export function ModalClose({ children }: ModalCloseProps) {
  return (
    <DialogPrimitive.Close asChild>
      { children }
    </DialogPrimitive.Close>
  )
}
