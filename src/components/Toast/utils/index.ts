import { css } from '../../../foundation'
import { Appearance, IconColor, Placement } from '../Toast.types'

function getIconColor(appearance: Appearance): string {
  switch (appearance) {
    case Appearance.Succes:
      return IconColor.Succes
    case Appearance.Warning:
      return IconColor.Warning
    case Appearance.Error:
      return IconColor.Error
    case Appearance.Info:
    default:
      return IconColor.Info
  }
}

function placements(placement: Placement) {
  switch (placement) {
    case Placement.TopCenter:
      return css`
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        `
    case Placement.TopRight:
      return css`
          top: 0;
          right: 0;
        `
    case Placement.TopLeft:
      return css`
          top: 0;
          left: 0;
        `
    case Placement.BottomCenter:
      return css`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        `
    case Placement.BottomRight:
      return css`
          right: 0;
          bottom: 0;
        `
    case Placement.BottomLeft:
    default:
      return css`
        bottom: 0;
        left: 0;
      `
  }
}

export {
  getIconColor,
  placements,
}
