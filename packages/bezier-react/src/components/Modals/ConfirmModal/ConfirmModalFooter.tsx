/* eslint-disable no-restricted-imports */
/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { ModalFooter } from '../Modal'
import { type ConfirmModalFooterProps } from './ConfirmModal.types'

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
