/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'
import { IconName } from '../Icon'

export enum Placement {
  TopLeft = 'topLeft',
  TopCenter = 'topCenter',
  TopRight = 'topRight',
  BottomLeft = 'bottomLeft',
  BottomCenter = 'bottomCenter',
  BottomRight = 'bottomRight',
}

export enum Appearance {
  Succes = 'succes',
  Warning = 'warning',
  Error = 'error',
  Info = 'info',
}

export enum IconColor {
  Succes = 'bgtxt-green-normal',
  Warning = 'bgtxt-orange-normal',
  Error = 'bgtxt-red-normal',
  Info = 'txt-black-darkest',
}

export interface ActionItemType {
  content: string
  onClick: any
}

export default interface ToastProps extends UIComponentProps, React.HTMLAttributes<HTMLDivElement> {
  placement?: Placement
  appearance?: Appearance
  iconName: IconName
  content: string
  actionItem?: ActionItemType
}
