/* eslint-disable no-restricted-imports */
/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { ModalContent } from '../Modal'

import { type ConfirmModalContentProps } from './ConfirmModal.types'

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
