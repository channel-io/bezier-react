/* eslint-disable no-restricted-imports */
/* External dependencies */
import React, {
  forwardRef,
  useContext,
  useMemo,
} from 'react'

/* Internal dependencies */
import { Typography } from 'Foundation'
import {
  ButtonColorVariant,
  ButtonStyleVariant,
  ButtonSize,
} from 'Components/Button'
import ModalContext from './ModalContext'
import type { ModalContentProps, ModalTitleTextProps } from './Modal.types'
import { ModalTitleSize } from './Modal.types'
import * as Styled from './Modal.styled'

function ModalTitleText({ children, titleSize, ...rests }: ModalTitleTextProps) {
  const textTypo = useMemo(() => {
    switch (titleSize) {
      case ModalTitleSize.M: {
        return Typography.Size16
      }
      default: {
        return Typography.Size24
      }
    }
  }, [titleSize])

  return (
    <Styled.TitleText
      {...rests}
      testId="Modal__Contents__Title__Text"
      color="txt-black-darkest"
      typo={textTypo}
      bold
    >
      { children }
    </Styled.TitleText>
  )
}

const ModalContent = (
  {
    children,
    title,
    subTitle,
    description,
    showCloseIcon,
    titleSize = ModalTitleSize.L,
  }: ModalContentProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) => {
  const { onHide } = useContext(ModalContext)

  return (
    <Styled.Contents
      ref={forwardedRef}
      data-testid="Modal__Contents"
    >
      { (title || subTitle) && (
        <Styled.Title data-testid="Modal__Contents__Title">
          <Styled.TitleAndSubTitle data-testid="Modal__Contents__TitleAndSubTitle">
            { subTitle && (
              <Styled.SubTitleText
                testId="Modal__Contents__SubTitle__Text"
                typo={Typography.Size13}
                truncated
                color="txt-black-dark"
              >
                { subTitle }
              </Styled.SubTitleText>
            ) }
            { title && (
              <ModalTitleText titleSize={titleSize}>
                { title }
              </ModalTitleText>
            ) }
          </Styled.TitleAndSubTitle>
          { showCloseIcon && (
            <Styled.CloseIconButton
              testId="Modal__Contents__Title__CloseButton"
              size={ButtonSize.M}
              leftContent="cancel"
              colorVariant={ButtonColorVariant.MonochromeDark}
              styleVariant={ButtonStyleVariant.Tertiary}
              onClick={onHide}
            />
          ) }
        </Styled.Title>
      ) }

      { description && (
        <Styled.Description data-testid="Modal__Contents__Description">
          <Styled.DescriptionText
            typo={Typography.Size15}
            color="txt-black-darkest"
          >
            { description }
          </Styled.DescriptionText>
        </Styled.Description>
      ) }
      { children && (
        <Styled.ChildrenContent data-testid="Modal__Contents__ChildrenContent">
          { children }
        </Styled.ChildrenContent>
      ) }
    </Styled.Contents>

  )
}

export default forwardRef(ModalContent)
