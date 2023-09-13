import React, {
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import { ZIndex } from '~/src/constants/ZIndex'
import useMergeRefs from '~/src/hooks/useMergeRefs'
import { getRootElement } from '~/src/utils/domUtils'
import { isNumber } from '~/src/utils/typeUtils'

import {
  type ModalContentProps,
  type ModalContentPropsContextValue,
} from './Modal.types'
import {
  ModalContainerContextProvider,
  ModalContentPropsContextProvider,
} from './ModalContext'
import { ModalClose } from './ModalHelpers'

import * as Styled from './Modal.styled'

/**
 * `ModalContent` is a container of the modal content.
 * It creates a portal to render the modal content outside of the DOM tree
 * and renders overlay behind the modal content too.
 */
export const ModalContent = forwardRef(function ModalContent({
  children,
  style,
  container = getRootElement(),
  showCloseIcon = false,
  preventHideOnOutsideClick = false,
  width = 'max-content',
  height = 'fit-content',
  zIndex = ZIndex.Modal,
  ...rest
}: ModalContentProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const [contentContainer, setContentContainer] = useState<HTMLElement>()

  const contentRef = useMergeRefs(
    forwardedRef,
    useCallback((node: HTMLElement | null) => {
      setContentContainer(node ?? undefined)
    }, []),
  )

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

  const propsContextValue = useMemo((): ModalContentPropsContextValue => ({
    showCloseIcon,
  }), [showCloseIcon])

  return (
    <DialogPrimitive.Portal container={container}>
      <Styled.DialogPrimitiveOverlay style={overlayStyle}>
        <DialogPrimitive.Content
          asChild
          onPointerDownOutside={(e) => {
            if (preventHideOnOutsideClick) {
              e.preventDefault()
            }
          }}
          onInteractOutside={(e) => {
            if (preventHideOnOutsideClick) {
              e.preventDefault()
            }
          }}
        >
          <Styled.Content
            aria-modal
            ref={contentRef}
            style={contentStyle}
            {...rest}
          >
            <Styled.Section>
              <ModalContainerContextProvider value={contentContainer}>
                <ModalContentPropsContextProvider value={propsContextValue}>
                  { children }
                </ModalContentPropsContextProvider>
              </ModalContainerContextProvider>

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
