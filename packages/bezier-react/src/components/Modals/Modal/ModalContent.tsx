/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { isNumber } from 'lodash-es'

/* Internal dependencies */
import { document } from 'Utils/domUtils'
import { ModalClose } from './ModalHelpers'
import ModalContentContext from './ModalContentContext'
import { ModalContentProps, ModalContentContextValue } from './Modal.types'
import * as Styled from './Modal.styled'

/**
 * `ModalContent` is a container of the modal content.
 * It creates a portal to render the modal content outside of the DOM tree
 * and renders overlay behind the modal content too.
 */
export const ModalContent = forwardRef(function ModalContent({
  children,
  style,
  container = document.body,
  showCloseIcon = false,
  width = 'max-content',
  height = 'fit-content',
  zIndex = 0,
  ...rest
}: ModalContentProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const overlayStyle = useMemo((): React.CSSProperties & {
    '--bezier-modal-z-index': ModalContentProps['zIndex']
  } => ({
    '--bezier-modal-z-index': zIndex,
  }), [zIndex])

  const contentStyle = useMemo((): React.CSSProperties & {
    '--bezier-modal-width': ModalContentProps['width']
    '--bezier-modal-height': ModalContentProps['height']
  } => ({
    ...style,
    '--bezier-modal-width': isNumber(width) ? `${width}px` : width,
    '--bezier-modal-height': isNumber(height) ? `${height}px` : height,
  }), [
    style,
    width,
    height,
  ])

  const contextValue = useMemo((): ModalContentContextValue => ({
    showCloseIcon,
  }), [showCloseIcon])

  return (
    <DialogPrimitive.Portal container={container}>
      <Styled.DialogPrimitiveOverlay style={overlayStyle}>
        <DialogPrimitive.Content asChild>
          <Styled.Content
            aria-modal
            ref={forwardedRef}
            style={contentStyle}
            {...rest}
          >
            <Styled.Section>
              <ModalContentContext.Provider value={contextValue}>
                { children }
              </ModalContentContext.Provider>

              { /* NOTE: To prevent focusing first on the close button when opening the modal, place the close button behind. */ }
              { showCloseIcon && (
                <ModalClose>
                  <Styled.CloseIconButton />
                </ModalClose>
              ) }
            </Styled.Section>
          </Styled.Content>
        </DialogPrimitive.Content>
      </Styled.DialogPrimitiveOverlay>
    </DialogPrimitive.Portal>
  )
})
