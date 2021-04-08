/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export enum Placement {
  TopLeft = 'topLeft',
  TopCenter = 'topCenter',
  TopRight = 'topRight',
  BottomLeft = 'bottomLeft',
  BottomCenter = 'bottomCenter',
  BottomRight = 'bottomRight',
}

export type Appearance =
  | 'succes'
  | 'warning'
  | 'error'
  | 'info'

/* export type Placement =
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'top-left'
  | 'top-center'
  | 'top-right' */

export default interface ToastProps extends UIComponentProps, React.HTMLAttributes<HTMLDivElement> {
  placement?: Placement
  appearance?: Appearance
  content?: string
}
