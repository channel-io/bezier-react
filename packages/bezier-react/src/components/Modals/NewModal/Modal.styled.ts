/* External dependencies */
import * as DialogPrimitive from '@radix-ui/react-dialog'

/* Internal dependencies */
import { styled } from 'Foundation'
import {
  Button,
  ButtonSize,
  ButtonColorVariant,
  ButtonStyleVariant,
} from 'Components/Button'
import { gap } from 'Utils/styleUtils'
import ModalAnimation from './ModalAnimation.styled'

export const DialogPrimitiveOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  background-color: var(--bgtxt-absolute-black-lighter);

  &[data-state='open'] {
    ${ModalAnimation.overlayShow}
  }

  &[data-state='closed'] {
    ${ModalAnimation.overlayHide}
  }
`

export const Content = styled.div`
  ${({ foundation }) => foundation?.rounding.round20}
  ${({ foundation }) => foundation?.elevation.ev4()}

  position: fixed;
  inset: 0;
  top: 50%;
  left: 50%;
  z-index: var(--z-index);

  box-sizing: border-box;
  width: var(--width);
  min-width: 360px;
  max-width: 100vw;
  height: var(--height);
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  color: var(--bg-grey-darkest);
  transform: translate(-50%, -50%);

  &[data-state='open'] {
    ${ModalAnimation.contentShow}
  }

  &[data-state='closed'] {
    ${ModalAnimation.contentHide}
  }

  &:focus {
    outline: none;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const MODAL_PADDING = 24

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: ${MODAL_PADDING}px ${MODAL_PADDING}px 12px ${MODAL_PADDING}px;
  ${gap(12)}
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

export const Body = styled.div`
  flex: 1;
  padding: 0 ${MODAL_PADDING}px;
`

export const Footer = styled.footer`
  display: flex;
  padding: 16px ${MODAL_PADDING}px ${MODAL_PADDING}px;
`

export const FooterLeftContent = styled.div`
  margin-right: auto;
`

export const FooterRightContent = styled.div`
  margin-left: auto;
`
