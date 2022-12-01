/* External dependencies */
import React, { forwardRef, useContext } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { Text } from 'Components/Text'
import ModalContentContext from './ModalContentContext'
import { ModalHeaderProps, ModalTitleSize } from './Modal.types'
import * as Styled from './Modal.styled'

function getTitleTypo(size: ModalTitleSize) {
  switch (size) {
    case ModalTitleSize.L:
      return Typography.Size24
    case ModalTitleSize.M:
      return Typography.Size16
    default:
      return Typography.Size16
  }
}

function ModalHeaderTitle({
  children,
  size,
  subtitle,
}: React.PropsWithChildren<Pick<ModalHeaderProps, 'subtitle'> & { size: NonNullable<ModalHeaderProps['titleSize']> }>) {
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

            { subtitle && (
              <Text
                aria-roledescription="subtitle"
                as="p"
                bold
                color="txt-black-dark"
                typo={Typography.Size13}
              >
                { subtitle }
              </Text>
            ) }
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

function VisuallyHidden({
  children,
  hidden,
}: React.PropsWithChildren<Required<Pick<ModalHeaderProps, 'hidden'>>>) {
  return hidden
    ? (
      <VisuallyHiddenPrimitive.Root asChild>
        { children }
      </VisuallyHiddenPrimitive.Root>
    )
    : (
      <>
        { children }
      </>
    )
}

/**
 * `ModalHeader` is a header of the modal content.
 * It renders the accessible title and description of the modal.
 * If you want to hide the title and description, use `hidden` prop.
 */
export const ModalHeader = forwardRef(function ModalHeader({
  title,
  subtitle,
  description,
  titleSize = ModalTitleSize.L,
  hidden = false,
  ...rest
}: ModalHeaderProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const { showCloseIcon } = useContext(ModalContentContext)
  const hasTitleArea = title || showCloseIcon

  return (
    <VisuallyHidden hidden={hidden}>
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
              typo={Typography.Size15}
            >
              { description }
            </Text>
          </DialogPrimitive.Description>
        ) }
      </Styled.Header>
    </VisuallyHidden>
  )
})
