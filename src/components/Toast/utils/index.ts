/* Internal dependencies */
import { css } from '../../../foundation'
import { GNB_WDITH } from '../../../layout/GNB/GNB.styled'
import { ToastAppearance, ToastIconColor, ToastPlacement } from '../Toast.types'

function getIconColor(appearance: ToastAppearance): string {
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

// TODO: GNB 만큼 left 값 주기
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
        left: ${GNB_WDITH};
      `
  }
}

const initPosition = (placement: ToastPlacement, isXPosition: boolean) => {
  switch (placement) {
    case ToastPlacement.BottomLeft:
      return isXPosition ? '-120%' : '0'
    case ToastPlacement.BottomRight:
      return isXPosition ? '120%' : '0'
    default:
      return '0'
  }
}

export {
  getIconColor,
  getPlacement,
  initPosition,
}
