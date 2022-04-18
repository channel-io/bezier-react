/* eslint-disable no-restricted-imports */
/* External dependencies */
import React, {
  useCallback,
  forwardRef,
} from 'react'

/* Internal dependencies */
import { Modal } from '../Modal'
import type { ConfirmModalProps } from './ConfirmModal.types'

function ConfirmModal(
  {
    children,
    onHide,
    onConfirm,
    onKeyDown,
    ...rests
  }: ConfirmModalProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const handleKeydown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(e)

    switch (e.key) {
      case 'Enter': {
        e.stopPropagation()
        onConfirm(e)
      }
    }
  }, [
    onKeyDown,
    onConfirm,
  ])

  return (
    <Modal
      {...rests}
      ref={forwardedRef}
      onHide={onHide}
      onKeyDown={handleKeydown}
    >
      { children }
    </Modal>
  )
}

export default forwardRef(ConfirmModal)
