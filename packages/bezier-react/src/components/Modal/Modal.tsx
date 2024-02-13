import React, {
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'

import { CancelIcon } from '@channel.io/bezier-icons'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import classNames from 'classnames'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { getZIndexClassName } from '~/src/types/props-helpers'
import { createContext } from '~/src/utils/react'
import { cssDimension } from '~/src/utils/style'
import {
  isNil,
  isNumber,
} from '~/src/utils/type'

import { Button } from '~/src/components/Button'
import { Text } from '~/src/components/Text'
import {
  ThemeProvider,
  useThemeName,
} from '~/src/components/ThemeProvider'
import { VisuallyHidden } from '~/src/components/VisuallyHidden'
import { useRootElement } from '~/src/components/WindowProvider'

import {
  type ModalBodyProps,
  type ModalCloseProps,
  type ModalContentProps,
  type ModalContentPropsContextValue,
  type ModalFooterProps,
  type ModalHeaderProps,
  type ModalProps,
  type ModalTitleSize,
  type ModalTriggerProps,
} from './Modal.types'

import styles from './Modal.module.scss'

const [
  ModalContainerContextProvider,
  useModalContainerContext,
] = createContext<HTMLElement | undefined>(undefined)

export { useModalContainerContext }

const [
  ModalContentPropsContextProvider,
  useModalContentPropsContext,
] = createContext<ModalContentPropsContextValue>({
  showCloseIcon: false,
})

/**
 * `Modal` is a dialog that appears on top of the page.
 *
 * `Modal` is a context of the Modal-related components. It doesn't render any DOM node.
 * It controls the visibility of the entire component and provides
 * handlers and accessibility properties to Modal-related components.
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
  onShow,
  onHide,
}: ModalProps) {
  const onOpenChange = useCallback<NonNullable<DialogPrimitive.DialogProps['onOpenChange']>>((open) => {
    const callback = open ? onShow : onHide
    callback?.()
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
  className,
  container: givenContainer,
  showCloseIcon = false,
  preventHideOnOutsideClick = false,
  width = 'max-content',
  height = 'fit-content',
  zIndex = 'modal',
  collisionPadding = { top: 40, bottom: 40 },
  ...rest
}, forwardedRef) {
  const rootElement = useRootElement()
  const container = givenContainer ?? rootElement
  const [contentContainer, setContentContainer] = useState<HTMLElement>()

  const contentRef = useMergeRefs(
    forwardedRef,
    useCallback((node: HTMLElement | null) => {
      setContentContainer(node ?? undefined)
    }, []),
  )

  const overlayStyle = (() => {
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
      '--b-modal-collision-padding': padding,
    } as React.CSSProperties)
  })()

  const propsContextValue = useMemo((): ModalContentPropsContextValue => ({
    showCloseIcon,
  }), [showCloseIcon])

  return (
    <DialogPrimitive.Portal container={container}>
      <ThemeProvider themeName={useThemeName()}>
        <DialogPrimitive.Overlay
          style={overlayStyle}
          className={classNames(
            styles.ModalOverlay,
            getZIndexClassName(zIndex),
          )}
        >
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
            <div
              aria-modal
              ref={contentRef}
              style={{
                '--b-modal-width': cssDimension(width),
                '--b-modal-height': cssDimension(height),
                ...style,
              } as React.CSSProperties}
              className={classNames(
                styles.ModalContent,
                className,
              )}
              {...rest}
            >
              <section className={styles.ModalSection}>
                <ModalContainerContextProvider value={contentContainer}>
                  <ModalContentPropsContextProvider value={propsContextValue}>
                    { children }
                  </ModalContentPropsContextProvider>
                </ModalContainerContextProvider>

                { /* NOTE: To prevent focusing first on the close button when opening the modal, place the close button behind. */ }
                { showCloseIcon && (
                  // eslint-disable-next-line @typescript-eslint/no-use-before-define
                  <ModalClose>
                    <Button
                      className={styles.CloseIconButton}
                      size="m"
                      leftContent={CancelIcon}
                      colorVariant="monochrome-dark"
                      styleVariant="tertiary"
                    />
                  </ModalClose>
                ) }
              </section>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </ThemeProvider>
    </DialogPrimitive.Portal>
  )
})

function getTitleTypo(size: ModalTitleSize) {
  return ({
    l: '24',
    m: '16',
  } as const)[size]
}

function ModalHeaderTitle({
  children,
  size,
  subtitle,
}: React.PropsWithChildren<Pick<ModalHeaderProps, 'subtitle'> & {
  size: NonNullable<ModalHeaderProps['titleSize']>
}>) {
  const Title = (
    <Text
      className={styles.Title}
      as="h2"
      typo={getTitleTypo(size)}
      bold
      color="txt-black-darkest"
    >
      { children }
    </Text>
  )

  return (
    <DialogPrimitive.Title asChild>
      { !isNil(subtitle)
        ? (
          <hgroup
            className={styles.HeadingGroup}
            role="group"
            aria-roledescription="Heading group"
          >
            { Title }

            <Text
              aria-roledescription="subtitle"
              as="p"
              bold
              color="txt-black-dark"
              typo="13"
            >
              { subtitle }
            </Text>
          </hgroup>
        )
        : Title }
    </DialogPrimitive.Title>
  )
}

/**
 * `ModalHeader` is a header of the modal content.
 * It renders the accessible title and description of the modal.
 * If you want to hide the title and description, use `hidden` prop.
 */
export const ModalHeader = forwardRef<HTMLElement, ModalHeaderProps>(function ModalHeader({
  className,
  title,
  subtitle,
  description,
  titleSize = 'l',
  hidden = false,
  ...rest
}, forwardedRef) {
  const { showCloseIcon } = useModalContentPropsContext()
  const hasTitleArea = title || showCloseIcon
  const Hidden = hidden ? VisuallyHidden : React.Fragment

  return (
    <Hidden>
      <header
        ref={forwardedRef}
        className={classNames(
          styles.ModalHeader,
          hidden && styles.hidden,
          className,
        )}
        {...rest}
      >
        { hasTitleArea && (
          <div className={styles.TitleContainer}>
            { title && (
              <ModalHeaderTitle
                size={titleSize}
                subtitle={subtitle}
              >
                { title }
              </ModalHeaderTitle>
            ) }

            { showCloseIcon && (
              <Button
                className={styles.CloseIconButtonSpacer}
                as="div"
                size="m"
              />
            ) }
          </div>
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
      </header>
    </Hidden>
  )
})

/**
 * `ModalBody` is a simple wrapper of the main modal content.
 */
export const ModalBody = forwardRef(function ModalBody({
  children,
  className,
  ...rest
}: ModalBodyProps, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <div
      ref={forwardedRef}
      className={classNames(
        styles.ModalBody,
        className,
      )}
      {...rest}
    >
      { children }
    </div>
  )
})

/**
 * `ModalFooter` is a simple wrapper of the footer of the modal content.
 * Usually, it contains the action buttons of the modal.
 */
export const ModalFooter = forwardRef<HTMLElement, ModalFooterProps>(function ModalFooter({
  className,
  leftContent,
  rightContent,
  ...rest
}, forwardedRef) {
  return (
    <footer
      ref={forwardedRef}
      className={classNames(
        styles.ModalFooter,
        className,
      )}
      {...rest}
    >
      { leftContent && (
        <div className={styles.FooterLeftContent}>
          { leftContent }
        </div>
      ) }

      { rightContent && (
        <div className={styles.FooterRightContent}>
          { rightContent }
        </div>
      ) }
    </footer>
  )
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
