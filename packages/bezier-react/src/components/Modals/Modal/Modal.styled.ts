/* External dependencies */
import * as DialogPrimitive from '@radix-ui/react-dialog'

/* Internal dependencies */
import { styled, css } from 'Foundation'
import { gap } from 'Utils/styleUtils'
import { Text } from 'Components/Text'
import { Button, ButtonSize, ButtonColorVariant, ButtonStyleVariant } from 'Components/Button'
import { ModalBodyProps, ModalContentProps, ModalFooterProps, ModalHeaderProps } from './Modal.types'
import ModalAnimation from './ModalAnimation.styled'

export const DialogPrimitiveOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: var(--bezier-modal-z-index);
  display: grid;
  place-items: center;
  padding: 40px 0;
  overflow-y: auto;
  background-color: var(--bgtxt-absolute-black-lighter);

  &[data-state='open'] {
    ${ModalAnimation.overlayShow}
  }
`

export const Content = styled.div<ModalContentProps>`
  ${({ foundation }) => foundation?.rounding.round20}
  ${({ foundation }) => foundation?.elevation.ev4()}

  position: relative;
  box-sizing: border-box;
  width: var(--bezier-modal-width);
  min-width: 360px;
  max-width: 100vw;
  height: var(--bezier-modal-height);
  max-height: 100%;
  overflow: visible;
  color: var(--bg-grey-darkest);
  word-break: break-word;

  &[data-state='open'] {
    ${ModalAnimation.contentShow}
  }

  &:focus {
    outline: none;
  }

  ${({ interpolation }) => interpolation}
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const MODAL_PADDING = 24
const HEADER_BODY_GAP = 12
const FOOTER_TOP_GAP = 16

export const Body = styled.div<ModalBodyProps>`
  flex: 1;
  padding: ${MODAL_PADDING}px;

  ${({ interpolation }) => interpolation}
`

export const Header = styled.header<ModalHeaderProps>`
  display: flex;
  flex-direction: column;
  padding: ${MODAL_PADDING}px ${MODAL_PADDING}px 0 ${MODAL_PADDING}px;
  ${gap(12)}

  /* NOTE(@ed): Support when the ModalBody is used as stand-alone */
  ${({ hidden }) => !hidden && css`
    & + ${Body},
    & + * ${Body} {
      padding-top: ${HEADER_BODY_GAP}px;
    }
  `}

  ${({ interpolation }) => interpolation}
`

export const Footer = styled.footer<ModalFooterProps>`
  display: flex;
  padding: ${FOOTER_TOP_GAP}px ${MODAL_PADDING}px ${MODAL_PADDING}px;

  /* NOTE(@ed): Support when the ModalBody is used as stand-alone */
  /* stylelint-disable declaration-block-semicolon-newline-after, rule-empty-line-before */
  ${Body} + &,
  ${Body} + * & {
    padding-top: 0;
    margin-top: ${FOOTER_TOP_GAP - MODAL_PADDING}px;
  }
  /* stylelint-enable declaration-block-semicolon-newline-after, rule-empty-line-before */

  ${({ interpolation }) => interpolation}
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${gap(6)}
`

export const HeadingGroup = styled.hgroup`
  display: flex;
  flex: 1;
  flex-direction: column-reverse;
  ${gap(4)}
`

export const Title = styled(Text).attrs({
  forwardedAs: 'h2',
  bold: true,
  color: 'txt-black-darkest',
})`
  width: 100%;
`

const CLOSE_ICON_BUTTON_SIZE = ButtonSize.M
const CLOSE_ICON_BUTTON_MARGIN_X = -6
const CLOSE_ICON_BUTTON_MARGIN_Y = -6

export const CloseIconButton = styled(Button).attrs({
  size: CLOSE_ICON_BUTTON_SIZE,
  leftContent: 'cancel',
  colorVariant: ButtonColorVariant.MonochromeDark,
  styleVariant: ButtonStyleVariant.Tertiary,
})`
  position: absolute;
  top: ${MODAL_PADDING + CLOSE_ICON_BUTTON_MARGIN_X}px;
  right: ${MODAL_PADDING + CLOSE_ICON_BUTTON_MARGIN_Y}px;
`

export const CloseIconButtonSpacer = styled(Button).attrs({
  forwardedAs: 'div',
  size: CLOSE_ICON_BUTTON_SIZE,
})`
  margin-top: ${CLOSE_ICON_BUTTON_MARGIN_X}px;
  margin-right: ${CLOSE_ICON_BUTTON_MARGIN_Y}px;
  pointer-events: none;
  visibility: hidden;
`

export const FooterLeftContent = styled.div`
  margin-right: auto;
`

export const FooterRightContent = styled.div`
  margin-left: auto;
`
