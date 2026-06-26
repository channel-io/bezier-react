'use client'

import {
  forwardRef,
  isValidElement,
  useCallback,
  useMemo,
  useState,
} from 'react'
import * as React from 'react'

import { CancelIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'





import { IconButton } from '~/src/beta/IconButton'
import { Text } from '~/src/beta/Text'
import useMergeRefs from '~/src/hooks/useMergeRefs'
import { getZIndexClassName } from '~/src/types/props-helpers'
import { createContext } from '~/src/utils/react'
import { cssDimension } from '~/src/utils/style'
import { isNil, isNumber } from '~/src/utils/type'

import {
  AlphaDialogPrimitive,
  AlphaDialogPrimitiveClose,
  AlphaDialogPrimitiveContent,
  AlphaDialogPrimitiveDescription,
  AlphaDialogPrimitiveOverlay,
  AlphaDialogPrimitivePortal,
  type AlphaDialogPrimitiveProps,
  AlphaDialogPrimitiveTitle,
  AlphaDialogPrimitiveTrigger,
} from '~/src/components/AlphaDialogPrimitive'
import { ThemeProvider, useThemeName } from '~/src/components/ThemeProvider'
import { VisuallyHidden } from '~/src/components/VisuallyHidden'
import { useRootElement } from '~/src/components/WindowProvider'

import type {
  ModalBodyProps,
  ModalCloseProps,
  ModalContentProps,
  ModalContentPropsContextValue,
  ModalFooterProps,
  ModalHeaderProps,
  ModalProps,
  ModalTitleSize,
  ModalTriggerProps,
} from './Modal.types'

import styles from './Modal.module.scss'

const [ModalContainerContextProvider, useModalContainerContext] = createContext<
  HTMLElement | undefined
>(undefined)

export { useModalContainerContext }

const [ModalContentPropsContextProvider, useModalContentPropsContext] =
  createContext<ModalContentPropsContextValue>({
    hasBody: false,
    showCloseIcon: false,
    type: 'default',
  })

function hasModalChild(
  children: React.ReactNode,
  predicate: (child: React.ReactElement) => boolean
): boolean {
  return React.Children.toArray(children).some((child) => {
    if (
      !isValidElement<{
        children?: React.ReactNode
      }>(child)
    ) {
      return false
    }

    if (child.type === React.Fragment) {
      return hasModalChild(child.props.children, predicate)
    }

    return predicate(child)
  })
}

function hasHiddenModalHeader(children: React.ReactNode): boolean {
  return hasModalChild(
    children,
    (child) =>
      child.type === ModalHeader &&
      (child.props as { hidden?: boolean }).hidden === true
  )
}

function hasModalBody(children: React.ReactNode): boolean {
  return hasModalChild(children, (child) => child.type === ModalBody)
}

/**
 * `Modal` is a dialog that appears on top of the page.
 *
 * `Modal` is a context of the Modal-related components. It doesn't render any DOM node.
 * It controls the visibility of the entire component and provides
 * handlers and accessibility properties to Modal-related components.
 */
export function Modal({
  children,
  show,
  defaultShow,
  onShow,
  onHide,
}: ModalProps) {
  const onOpenChange = useCallback<
    NonNullable<AlphaDialogPrimitiveProps['onOpenChange']>
  >(
    (open) => {
      const callback = open ? onShow : onHide
      callback?.()
    },
    [onShow, onHide]
  )

  return (
    <AlphaDialogPrimitive
      open={show}
      defaultOpen={defaultShow}
      onOpenChange={onOpenChange}
    >
      {children}
    </AlphaDialogPrimitive>
  )
}

/**
 * `ModalContent` is the dialog surface. It creates a portal, renders the overlay,
 * and defines the focus boundary of the modal.
 */
export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  function ModalContent(
    {
      children,
      style,
      className,
      container: givenContainer,
      type = 'default',
      showCloseIcon = false,
      preventHideOnOutsideClick = false,
      width = 'max-content',
      height = 'fit-content',
      zIndex = 'modal',
      collisionPadding = { top: 40, bottom: 40 },
      ...rest
    },
    forwardedRef
  ) {
    const rootElement = useRootElement()
    const container = givenContainer ?? rootElement
    const [contentContainer, setContentContainer] = useState<HTMLElement>()
    const shouldShowCloseIcon = showCloseIcon && !hasHiddenModalHeader(children)
    const hasBody = hasModalBody(children)

    const contentRef = useMergeRefs(
      forwardedRef,
      useCallback((node: HTMLElement | null) => {
        setContentContainer(node ?? undefined)
      }, [])
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

      return {
        '--b-modal-collision-padding': padding,
      } as React.CSSProperties
    })()

    const propsContextValue = useMemo(
      (): ModalContentPropsContextValue => ({
        hasBody,
        showCloseIcon: shouldShowCloseIcon,
        type,
      }),
      [hasBody, shouldShowCloseIcon, type]
    )

    return (
      <AlphaDialogPrimitivePortal container={container}>
        <ThemeProvider themeName={useThemeName()}>
          <AlphaDialogPrimitiveOverlay
            style={overlayStyle}
            className={classNames(
              styles.ModalOverlay,
              getZIndexClassName(zIndex)
            )}
          >
            <AlphaDialogPrimitiveContent
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
                aria-modal="true"
                ref={contentRef}
                style={
                  {
                    '--b-modal-width': cssDimension(width),
                    '--b-modal-height': cssDimension(height),
                    ...style,
                  } as React.CSSProperties
                }
                className={classNames(styles.ModalContent, className)}
                {...rest}
              >
                <section className={styles.ModalSection}>
                  <ModalContainerContextProvider value={contentContainer}>
                    <ModalContentPropsContextProvider value={propsContextValue}>
                      {children}
                    </ModalContentPropsContextProvider>
                  </ModalContainerContextProvider>

                  {shouldShowCloseIcon && (
                    <ModalClose>
                      <IconButton
                        className={styles.CloseIconButton}
                        size="m"
                        variant="ghost"
                        semantic="primary"
                        content={CancelIcon}
                        aria-label="Close"
                      />
                    </ModalClose>
                  )}
                </section>
              </div>
            </AlphaDialogPrimitiveContent>
          </AlphaDialogPrimitiveOverlay>
        </ThemeProvider>
      </AlphaDialogPrimitivePortal>
    )
  }
)

function getTitleTypo(size: ModalTitleSize) {
  return (
    {
      l: '18',
      m: '16',
    } as const
  )[size]
}

function getTitleFontWeight(size: ModalTitleSize) {
  return (
    {
      l: '600',
      m: '500',
    } as const
  )[size]
}

function ModalHeaderTitle({
  children,
  size,
  subtitle,
}: React.PropsWithChildren<
  Pick<ModalHeaderProps, 'subtitle'> & {
    size: NonNullable<ModalHeaderProps['titleSize']>
  }
>) {
  const { type } = useModalContentPropsContext()
  const titleSize = type === 'confirm' ? 'm' : size
  const Title = (
    <div className={styles.TitleWrapper}>
      <Text
        className={styles.Title}
        as="h2"
        typo={getTitleTypo(titleSize)}
        fontWeight={getTitleFontWeight(titleSize)}
        color="text-neutral"
      >
        {children}
      </Text>
    </div>
  )

  return (
    <AlphaDialogPrimitiveTitle asChild>
      {!isNil(subtitle) ? (
        <hgroup
          className={styles.HeadingGroup}
          role="group"
          aria-roledescription="Heading group"
        >
          {Title}

          <Text
            aria-roledescription="subtitle"
            as="p"
            bold
            color="text-neutral-lighter"
            typo="13"
          >
            {subtitle}
          </Text>
        </hgroup>
      ) : (
        Title
      )}
    </AlphaDialogPrimitiveTitle>
  )
}

/**
 * `ModalHeader` is a header of the modal content.
 * It renders the accessible title and description of the modal.
 * If you want to hide the title and description, use `hidden` prop.
 */
export const ModalHeader = forwardRef<HTMLElement, ModalHeaderProps>(
  function ModalHeader(
    {
      className,
      title,
      subtitle,
      description,
      titleSize = 'l',
      hidden = false,
      ...rest
    },
    forwardedRef
  ) {
    const { showCloseIcon, type } = useModalContentPropsContext()
    const hasTitleArea = title || showCloseIcon
    const Hidden = hidden ? VisuallyHidden : React.Fragment

    return (
      <Hidden>
        <header
          ref={forwardedRef}
          className={classNames(styles.ModalHeader, className)}
          data-hidden={hidden ? '' : undefined}
          data-modal-type={type}
          {...rest}
        >
          {hasTitleArea && (
            <div className={styles.TitleContainer}>
              {title && (
                <ModalHeaderTitle
                  size={titleSize}
                  subtitle={subtitle}
                >
                  {title}
                </ModalHeaderTitle>
              )}

              {showCloseIcon && (
                <div
                  className={styles.CloseIconButtonSpacer}
                  aria-hidden
                />
              )}
            </div>
          )}

          {description && (
            <AlphaDialogPrimitiveDescription asChild>
              <Text
                as="p"
                className={styles.Description}
                color="text-neutral-light"
                typo="15"
              >
                {description}
              </Text>
            </AlphaDialogPrimitiveDescription>
          )}
        </header>
      </Hidden>
    )
  }
)

/**
 * `ModalBody` is a simple wrapper of the main modal content.
 */
export const ModalBody = forwardRef(function ModalBody(
  { children, className, ...rest }: ModalBodyProps,
  forwardedRef: React.Ref<HTMLDivElement>
) {
  return (
    <div
      ref={forwardedRef}
      className={classNames(styles.ModalBody, className)}
      {...rest}
    >
      {children}
    </div>
  )
})

/**
 * `ModalFooter` is a simple wrapper of the footer of the modal content.
 * Usually, it contains the action buttons of the modal.
 */
export const ModalFooter = forwardRef<HTMLElement, ModalFooterProps>(
  function ModalFooter(
    { className, leftContent, rightContent, ...rest },
    forwardedRef
  ) {
    const { hasBody } = useModalContentPropsContext()

    return (
      <footer
        ref={forwardedRef}
        className={classNames(
          styles.ModalFooter,
          hasBody && styles.ModalFooterAfterBody,
          className
        )}
        {...rest}
      >
        {leftContent && (
          <div className={styles.FooterLeftContent}>{leftContent}</div>
        )}

        {rightContent && (
          <div className={styles.FooterRightContent}>{rightContent}</div>
        )}
      </footer>
    )
  }
)

/**
 * `ModalTrigger` is a button that opens the modal. **It doesn't render any DOM node.**
 * It passes the handler that opens the modal and accessibility properties to the children.
 *
 * It **must** be placed outside of the `ModalContent`.
 */
export function ModalTrigger({ children }: ModalTriggerProps) {
  return (
    <AlphaDialogPrimitiveTrigger asChild>
      {children}
    </AlphaDialogPrimitiveTrigger>
  )
}

/**
 * `ModalClose` is a button that closes the modal. **It doesn't render any DOM node.**
 * It passes the handler that closes the modal to the children.
 */
export function ModalClose({ children }: ModalCloseProps) {
  return (
    <AlphaDialogPrimitiveClose asChild>{children}</AlphaDialogPrimitiveClose>
  )
}
