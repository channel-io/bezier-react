import React, {
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import { ZIndex } from '~/src/constants/ZIndex'
import useMergeRefs from '~/src/hooks/useMergeRefs'
import { useWindow } from '~/src/providers/WindowProvider'
import {
  cssVarName,
  px,
} from '~/src/utils/style'
import { isNumber } from '~/src/utils/type'

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

const cv = cssVarName('modal')

/**
 * `ModalContent` is a container of the modal content.
 * It creates a portal to render the modal content outside of the DOM tree
 * and renders overlay behind the modal content too.
 */
export const ModalContent = forwardRef(function ModalContent({
  children,
  style,
  container: givenContainer,
  showCloseIcon = false,
  preventHideOnOutsideClick = false,
  width = 'max-content',
  height = 'fit-content',
  zIndex = ZIndex.Modal,
  collisionPadding = { top: 40, bottom: 40 },
  ...rest
}: ModalContentProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const { getRootElement } = useWindow()
  const container = givenContainer ?? getRootElement()
  const [contentContainer, setContentContainer] = useState<HTMLElement>()

  const contentRef = useMergeRefs(
    forwardedRef,
    useCallback((node: HTMLElement | null) => {
      setContentContainer(node ?? undefined)
    }, []),
  )

  const overlayStyle = useMemo(() => {
    const padding = (() => {
      if (isNumber(collisionPadding)) {
        return `${collisionPadding}px`
      }

      const { top, right, bottom, left } = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...collisionPadding,
      }

      return `${top}px ${right}px ${bottom}px ${left}px`
    })()

    return ({
      [cv('z-index')]: zIndex,
      [cv('collision-padding')]: padding,
    } as React.CSSProperties)
  }, [
    collisionPadding,
    zIndex,
  ])

  const contentStyle = useMemo(() => ({
    ...style,
    [cv('width')]: isNumber(width) ? px(width) : width,
    [cv('height')]: isNumber(height) ? px(height) : height,
  } as React.CSSProperties), [
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
