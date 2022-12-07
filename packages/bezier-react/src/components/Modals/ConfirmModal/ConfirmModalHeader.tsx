/* eslint-disable no-restricted-imports */
/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import {
  ModalHeader,
  ModalTitleSize,
} from '../Modal'
import { ConfirmModalHeaderProps } from './ConfirmModal.types'

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
