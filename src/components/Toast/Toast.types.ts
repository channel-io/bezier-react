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

export default interface ToastProps extends UIComponentProps, React.HTMLAttributes<HTMLDivElement> {
  placement?: Placement
  appearance?: Appearance
  content?: string
  iconName?: IconName
}
