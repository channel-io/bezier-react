/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { isNumber } from 'lodash-es'

/* Internal dependencies */
import { getRootElement } from 'Utils/domUtils'
import ModalContentContext from './ModalContentContext'
import { ModalContentProps, ModalContentContextValue } from './Modal.types'
import * as Styled from './Modal.styled'

export const ModalContent = forwardRef(function ModalContent({
  children,
  style,
  container = getRootElement(),
  showCloseIcon = false,
  width = 'max-content',
  height = 'fit-content',
  zIndex = 1e7,
  ...rest
}: ModalContentProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const contentStyle = useMemo((): React.CSSProperties & {
    '--width': ModalContentProps['width']
    '--height': ModalContentProps['height']
    '--z-index': ModalContentProps['zIndex']
  } => ({
    ...style,
    '--width': isNumber(width) ? `${width}px` : width,
    '--height': isNumber(height) ? `${height}px` : height,
    '--z-index': zIndex,
  }), [
    style,
    width,
    height,
    zIndex,
  ])

  const contextValue = useMemo((): ModalContentContextValue => ({
    showCloseIcon,
  }), [showCloseIcon])

  return (
    <DialogPrimitive.Portal container={container}>
      <Styled.DialogPrimitiveOverlay />
      <DialogPrimitive.Content asChild>
        <Styled.Content
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
              <DialogPrimitive.Close asChild>
                <Styled.CloseIconButton />
              </DialogPrimitive.Close>
            ) }
          </Styled.Section>
        </Styled.Content>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
})
