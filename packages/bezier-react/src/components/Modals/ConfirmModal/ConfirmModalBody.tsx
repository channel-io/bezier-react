/* eslint-disable no-restricted-imports */
import React, { forwardRef } from 'react'

import { ModalBody } from '../Modal'

import { type ConfirmModalBodyProps } from './ConfirmModal.types'

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
