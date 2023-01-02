/* External dependencies */
import React, { useCallback } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

/* Internal dependencies */
import { noop } from 'Utils/typeUtils'
import { ModalProps } from './Modal.types'

/**
 * `Modal` is a dialog that appears on top of the page.
 *
 * `Modal` is a context of the Modal-related components. It doesn't render any DOM node.
 * It controls the visibility of the entire component and provides
 * handlers and accessibility properties to Modal-related components.
 *
 * @example
 *
 * ```tsx
 * // Anatomy of the Modal
 * <Modal>
 *  <ModalTrigger />
 *  <ModalContent>
 *    <ModalHeader />
 *    <ModalBody />
 *    <ModalFooter />
 *  </ModalContent>
 * </Modal>
 * ```
 */
export function Modal({
  children,
  show,
  defaultShow,
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
      defaultOpen={defaultShow}
      onOpenChange={onOpenChange}
    >
      { children }
    </DialogPrimitive.Root>
  )
}

