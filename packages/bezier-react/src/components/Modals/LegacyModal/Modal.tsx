/* eslint-disable no-restricted-imports */
/* External dependencies */
import React, { forwardRef, useMemo } from 'react'

/* Internal dependencies */
import { BaseModal } from '../BaseModal'
import type { ModalContextValue, ModalProps } from './Modal.types'
import ModalContext from './ModalContext'

function Modal(
  {
    children,
    targetElement,
    onHide,
    ...rests
  }: ModalProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const contextValue = useMemo<ModalContextValue>(() => ({
    onHide,
  }), [onHide])

  return (
    <BaseModal
      {...rests}
      ref={forwardedRef}
      onHide={onHide}
      targetElement={targetElement}
    >
      <ModalContext.Provider value={contextValue}>
        { children }
      </ModalContext.Provider>
    </BaseModal>
  )
}

export default forwardRef(Modal)
