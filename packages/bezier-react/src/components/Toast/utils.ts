import {
  CheckCircleFilledIcon,
  ErrorTriangleFilledIcon,
  InfoFilledIcon,
  WifiIcon,
  WifiOffIcon,
} from '@channel.io/bezier-icons'

import { css } from '~/src/foundation'

import {
  ToastAppearance,
  ToastIconColor,
  ToastPlacement,
  ToastPreset,
  type ToastPresetType,
} from './Toast.types'

/**
 * @deprecated
 * FIXME: Styling dependent on specific applications.
 */
const GNB_WIDTH = 68

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

const showedToastTranslateXStyle = css` transform: translateX(0); `

const initPosition = (placement?: ToastPlacement) => {
  switch (placement) {
    case ToastPlacement.BottomLeft:
      return css` transform: translateX(-120%); `
    case ToastPlacement.BottomRight:
      return css` transform: translateX(120%); `
    default:
      return showedToastTranslateXStyle
  }
}

const getToastPreset = (preset: ToastPreset): ToastPresetType => {
  switch (preset) {
    case ToastPreset.Success:
      return {
        icon: CheckCircleFilledIcon,
        appearance: ToastAppearance.Success,
      }
    case ToastPreset.Error:
      return {
        icon: ErrorTriangleFilledIcon,
        appearance: ToastAppearance.Error,
      }
    case ToastPreset.Offline:
      return {
        icon: WifiOffIcon,
        appearance: ToastAppearance.Warning,
      }
    case ToastPreset.Online:
      return {
        icon: WifiIcon,
        appearance: ToastAppearance.Success,
      }
    case ToastPreset.Default:
    default:
      return {
        icon: InfoFilledIcon,
        appearance: ToastAppearance.Info,
      }
  }
}

export {
  getIconColor,
  getPlacement,
  initPosition,
  showedToastTranslateXStyle,
  getToastPreset,
}
