/* External dependencies */
import React, { forwardRef, useContext } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

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

/**
 * `ModalHeader` is a header of the modal content.
 * It renders the accessible title and description of the modal.
 */
export const ModalHeader = forwardRef(function ModalHeader({
  title,
  subTitle,
  description,
  titleSize = ModalTitleSize.L,
  ...rest
}: ModalHeaderProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const { showCloseIcon } = useContext(ModalContentContext)

  const hasTitleOrSubtitle = title || subTitle
  const hasTitleArea = hasTitleOrSubtitle || showCloseIcon

  return (
    <Styled.Header
      ref={forwardedRef}
      {...rest}
    >
      { hasTitleArea && (
        <Styled.TitleContainer>
          { hasTitleOrSubtitle && (
            <DialogPrimitive.Title asChild>
              <Styled.HeadingGroup>
                { title && (
                  <Text
                    as="h2"
                    bold
                    color="txt-black-darkest"
                    typo={getTitleTypo(titleSize)}
                  >
                    { title }
                  </Text>
                ) }

                { subTitle && (
                  <Text
                    as="h3"
                    bold
                    color="txt-black-dark"
                    typo={Typography.Size13}
                  >
                    { subTitle }
                  </Text>
                ) }
              </Styled.HeadingGroup>
            </DialogPrimitive.Title>
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
  )
})
