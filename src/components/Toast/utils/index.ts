import { css } from '../../../foundation'
import { Appearance } from '../Toast.types'

export enum IconColor {
  Succes = 'bgtxt-green-normal',
  Warning = 'bgtxt-orange-normal',
  Error = 'bgtxt-red-normal',
  Info = 'txt-black-darkest',
}

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

const placements = {
  topLeft: css`
    top: 0;
    left: 0;
  `,
  topCenter: css`
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  `,
  topRight: css`
    top: 0;
    right: 0;
  `,
  bottomLeft: css`
    bottom: 0;
    left: 0;
  `,
  bottomCenter: css`
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  `,
  bottomRight: css`
    right: 0;
    bottom: 0;
  `,
}

export {
  getIconColor,
  placements,
}
