'use client'

import { forwardRef } from 'react'
import * as React from 'react'

import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTrigger,
} from '~/src/v3/Modal'

import type {
  ConfirmModalBodyProps,
  ConfirmModalCloseProps,
  ConfirmModalContentProps,
  ConfirmModalFooterProps,
  ConfirmModalHeaderProps,
  ConfirmModalProps,
  ConfirmModalTriggerProps,
} from './ConfirmModal.types'

/**
 * `ConfirmModal` is a modal dialog that interrupts the user with important content and expects a response.
 */
export function ConfirmModal({ children, ...rest }: ConfirmModalProps) {
  return <Modal {...rest}>{children}</Modal>
}

/**
 * `ConfirmModalContent` is a dialog surface for confirmation flows.
 */
export const ConfirmModalContent = forwardRef(function ConfirmModalContent(
  { children, showCloseIcon = false, ...rest }: ConfirmModalContentProps,
  forwardedRef: React.Ref<HTMLDivElement>
) {
  return (
    <ModalContent
      role="alertdialog"
      ref={forwardedRef}
      showCloseIcon={showCloseIcon}
      type="confirm"
      {...rest}
    >
      {children}
    </ModalContent>
  )
})

/**
 * `ConfirmModalHeader` renders the accessible title and description of the confirm modal.
 */
export const ConfirmModalHeader = forwardRef(function ConfirmModalHeader(
  props: ConfirmModalHeaderProps,
  forwardedRef: React.Ref<HTMLElement>
) {
  return (
    <ModalHeader
      ref={forwardedRef}
      subtitle={null}
      titleSize="m"
      {...props}
    />
  )
})

/**
 * `ConfirmModalBody` is a simple wrapper of the main confirm modal content.
 */
export const ConfirmModalBody = forwardRef(function ConfirmModalBody(
  { children, ...rest }: ConfirmModalBodyProps,
  forwardedRef: React.Ref<HTMLDivElement>
) {
  return (
    <ModalBody
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </ModalBody>
  )
})

/**
 * `ConfirmModalFooter` is a simple wrapper of the footer of the confirm modal content.
 */
export const ConfirmModalFooter = forwardRef(function ConfirmModalFooter(
  props: ConfirmModalFooterProps,
  forwardedRef: React.Ref<HTMLElement>
) {
  return (
    <ModalFooter
      ref={forwardedRef}
      {...props}
    />
  )
})

/**
 * `ConfirmModalTrigger` is a button that opens the confirm modal.
 */
export function ConfirmModalTrigger({ children }: ConfirmModalTriggerProps) {
  return <ModalTrigger>{children}</ModalTrigger>
}

/**
 * `ConfirmModalClose` passes the handler that closes the confirm modal to the children.
 */
export function ConfirmModalClose({ children }: ConfirmModalCloseProps) {
  return <ModalClose>{children}</ModalClose>
}
