import React, {
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import { ZIndex } from '~/src/constants/ZIndex'
import useMergeRefs from '~/src/hooks/useMergeRefs'
import {
  ThemeProvider,
  useThemeName,
} from '~/src/providers/ThemeProvider'
import { useWindow } from '~/src/providers/WindowProvider'
import { noop } from '~/src/utils/function'
import { createContext } from '~/src/utils/react'
import { cssDimension } from '~/src/utils/style'
import { isNumber } from '~/src/utils/type'

import { Text } from '~/src/components/Text'
import { VisuallyHidden } from '~/src/components/VisuallyHidden'

import {
  type ModalBodyProps,
  type ModalCloseProps,
  type ModalContentProps,
  type ModalContentPropsContextValue,
  type ModalFooterProps,
  type ModalHeaderProps,
  type ModalProps,
  ModalTitleSize,
  type ModalTriggerProps,
} from './Modal.types'

import * as Styled from './Modal.styled'

export const [
  ModalContainerContextProvider,
  useModalContainerContext,
] = createContext<HTMLElement | undefined>(undefined)

const [
  ModalContentPropsContextProvider,
  useModalContentPropsContext,
] = createContext<ModalContentPropsContextValue>({
  showCloseIcon: false,
})

/**
 * `ModalTrigger` is a button that opens the modal. **It doesn't render any DOM node.**
 * It passes the handler that opens the modal and accessibility properties to the children.
 *
 * It **must** be placed outside of the `ModalContent`.
 */
export function ModalTrigger({ children }: ModalTriggerProps) {
  return (
    <DialogPrimitive.Trigger asChild>
      { children }
    </DialogPrimitive.Trigger>
  )
}

/**
 * `ModalClose` is a button that closes the modal. **It doesn't render any DOM node.**
 * It passes the handler that closes the modal to the children.
 */
export function ModalClose({ children }: ModalCloseProps) {
  return (
    <DialogPrimitive.Close asChild>
      { children }
    </DialogPrimitive.Close>
  )
}

/**
 * `Modal` is a dialog that appears on top of the page.
 *
 * `Modal` is a context of the Modal-related components. It doesn't render any DOM node.
 * It controls the visibility of the entire component and provides
 * handlers and accessibility properties to Modal-related components.
 *
 * @example
 *
 * ```tsx
 * // Anatomy of the Modal
 * <Modal>
 *  <ModalTrigger />
 *  <ModalContent>
 *    <ModalHeader />
 *    <ModalBody />
 *    <ModalFooter />
 *  </ModalContent>
 * </Modal>
 * ```
 */
export function Modal({
  children,
  show,
  defaultShow,
  onShow = noop,
  onHide = noop,
}: ModalProps) {
  const onOpenChange = useCallback<NonNullable<DialogPrimitive.DialogProps['onOpenChange']>>((open) => {
    const callback = open ? onShow : onHide
    callback()
  }, [
    onShow,
    onHide,
  ])

  return (
    <DialogPrimitive.Root
      open={show}
      defaultOpen={defaultShow}
      onOpenChange={onOpenChange}
    >
      { children }
    </DialogPrimitive.Root>
  )
}

/**
 * `ModalContent` is a container of the modal content.
 * It creates a portal to render the modal content outside of the DOM tree
 * and renders overlay behind the modal content too.
 */
export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(function ModalContent({
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
}, forwardedRef) {
  const { rootElement } = useWindow()
  const container = givenContainer ?? rootElement
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
      '--b-modal-z-index': zIndex,
      '--b-modal-collision-padding': padding,
    } as React.CSSProperties)
  }, [
    collisionPadding,
    zIndex,
  ])

  const contentStyle = useMemo(() => ({
    ...style,
    '--b-modal-width': cssDimension(width),
    '--b-modal-height': cssDimension(height),
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
      <ThemeProvider themeName={useThemeName()}>
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
      </ThemeProvider>
    </DialogPrimitive.Portal>
  )
})

/**
 * `ModalBody` is a simple wrapper of the main modal content.
 */
export const ModalBody = forwardRef(function ModalBody({
  children,
  ...rest
}: ModalBodyProps, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <Styled.Body
      ref={forwardedRef}
      {...rest}
    >
      { children }
    </Styled.Body>
  )
})

/**
 * `ModalFooter` is a simple wrapper of the footer of the modal content.
 * Usually, it contains the action buttons of the modal.
 */
export const ModalFooter = forwardRef<HTMLElement, ModalFooterProps>(function ModalFooter({
  leftContent,
  rightContent,
  ...rest
}, forwardedRef) {
  return (
    <Styled.Footer
      ref={forwardedRef}
      {...rest}
    >
      { leftContent && (
        <Styled.FooterLeftContent>
          { leftContent }
        </Styled.FooterLeftContent>
      ) }

      { rightContent && (
        <Styled.FooterRightContent>
          { rightContent }
        </Styled.FooterRightContent>
      ) }
    </Styled.Footer>
  )
})

function getTitleTypo(size: ModalTitleSize) {
  switch (size) {
    case ModalTitleSize.L:
      return '24'
    case ModalTitleSize.M:
      return '16'
    default:
      return '16'
  }
}

function ModalHeaderTitle({
  children,
  size,
  subtitle,
}: React.PropsWithChildren<Pick<ModalHeaderProps, 'subtitle'> & {
  size: NonNullable<ModalHeaderProps['titleSize']>
}>) {
  const hasSubtitle = !!subtitle
  const titleTypo = getTitleTypo(size)

  return (
    <DialogPrimitive.Title asChild>
      { hasSubtitle
        ? (
          <Styled.HeadingGroup
            role="group"
            aria-roledescription="Heading group"
          >
            <Styled.Title typo={titleTypo}>
              { children }
            </Styled.Title>

            <Text
              aria-roledescription="subtitle"
              as="p"
              bold
              color="txt-black-dark"
              typo="13"
            >
              { subtitle }
            </Text>
          </Styled.HeadingGroup>
        )
        : (
          <Styled.Title typo={titleTypo}>
            { children }
          </Styled.Title>
        ) }
    </DialogPrimitive.Title>
  )
}

/**
 * `ModalHeader` is a header of the modal content.
 * It renders the accessible title and description of the modal.
 * If you want to hide the title and description, use `hidden` prop.
 */
export const ModalHeader = forwardRef<HTMLElement, ModalHeaderProps>(function ModalHeader({
  title,
  subtitle,
  description,
  titleSize = ModalTitleSize.L,
  hidden = false,
  ...rest
}, forwardedRef) {
  const { showCloseIcon } = useModalContentPropsContext()
  const hasTitleArea = title || showCloseIcon
  const Hidden = hidden ? VisuallyHidden : React.Fragment

  return (
    <Hidden>
      <Styled.Header
        ref={forwardedRef}
        hidden={hidden}
        {...rest}
      >
        { hasTitleArea && (
          <Styled.TitleContainer>
            { title && (
              <ModalHeaderTitle
                size={titleSize}
                subtitle={subtitle}
              >
                { title }
              </ModalHeaderTitle>
            ) }

            { showCloseIcon && (
              <Styled.CloseIconButtonSpacer />
            ) }
          </Styled.TitleContainer>
        ) }

        { description && (
          <DialogPrimitive.Description asChild>
            <Text
              as="p"
              color="txt-black-darkest"
              typo="15"
            >
              { description }
            </Text>
          </DialogPrimitive.Description>
        ) }
      </Styled.Header>
    </Hidden>
  )
})
