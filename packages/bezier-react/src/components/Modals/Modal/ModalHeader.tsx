import React, {
  forwardRef,
  useContext,
} from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import { Typography } from '~/src/foundation'

import { Text } from '~/src/components/Text'
import { VisuallyHidden } from '~/src/components/VisuallyHidden'

import {
  type ModalHeaderProps,
  ModalTitleSize,
} from './Modal.types'
import ModalContentContext from './ModalContentContext'

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

            <Text
              aria-roledescription="subtitle"
              as="p"
              bold
              color="txt-black-dark"
              typo={Typography.Size13}
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
export const ModalHeader = forwardRef(function ModalHeader({
  title,
  subtitle,
  description,
  titleSize = ModalTitleSize.L,
  hidden = false,
  ...rest
}: ModalHeaderProps, forwardedRef: React.Ref<HTMLElement>) {
  const { showCloseIcon } = useContext(ModalContentContext)
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
              typo={Typography.Size15}
            >
              { description }
            </Text>
          </DialogPrimitive.Description>
        ) }
      </Styled.Header>
    </Hidden>
  )
})
