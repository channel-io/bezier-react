/* External dependencies */
import React, { useCallback } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { ModalProps } from './Modal.types'

export function Modal({
  children,
  show,
  onShow = noop,
  onHide = noop,
}: ModalProps) {
  const onOpenChange = useCallback<NonNullable<DialogPrimitive.DialogProps['onOpenChange']>>((open) => {
    const callback = open ? onShow : onHide
    callback()
  }, [
    onShow,
    onHide,
  ])

  return (
    <DialogPrimitive.Root
      open={show}
      onOpenChange={onOpenChange}
    >
      { children }
    </DialogPrimitive.Root>
  )
}

