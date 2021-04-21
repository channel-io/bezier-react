/* Internal dependencies */
import { css } from '../../../foundation'
import { GNB_WIDTH } from '../../../layout/GNB/GNB.styled'
import { ToastAppearance, ToastIconColor, ToastPlacement } from '../Toast.types'

function getIconColor(appearance: ToastAppearance): ToastIconColor {
  switch (appearance) {
    case ToastAppearance.Success:
      return ToastIconColor.Success
    case ToastAppearance.Warning:
      return ToastIconColor.Warning
    case ToastAppearance.Error:
      return ToastIconColor.Error
    case ToastAppearance.Info:
    default:
      return ToastIconColor.Info
  }
}

function getPlacement(placement: ToastPlacement) {
  switch (placement) {
    case ToastPlacement.BottomRight:
      return css`
          right: 0;
          bottom: 0;
        `
    case ToastPlacement.BottomLeft:
    default:
      return css`
        bottom: 0;
        left: ${GNB_WIDTH}px;
      `
  }
}

const initPosition = (placement?: ToastPlacement) => {
  switch (placement) {
    case ToastPlacement.BottomLeft:
      return css` transform: translateX(-120%); `
    case ToastPlacement.BottomRight:
      return css` transform: translateX(120%); `
    default:
      return css` transform: translateX(0); `
  }
}

const displayPosition = () => css` transform: translateX(0); `

export {
  getIconColor,
  getPlacement,
  initPosition,
  displayPosition,
}
