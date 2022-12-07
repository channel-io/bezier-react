/* eslint-disable no-restricted-imports */
/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { ModalBody } from '../Modal'
import { ConfirmModalBodyProps } from './ConfirmModal.types'

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
