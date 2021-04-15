/* External dependencies */
import { ReactNode, ComponentType } from 'react'
import { noop } from 'lodash-es'

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

export default interface ToastElementProps extends UIComponentProps, React.HTMLAttributes<HTMLDivElement> {
  appearance?: Appearance
  content: string
  iconName?: IconName
  actionContent?: string
  actionOnClick?: Function
  onDismiss: typeof noop
  onMouseEnter: typeof noop
  onMouseLeave: typeof noop
  transitionDuration: number
  positionX: string
  positionY: string
}

export interface ToastProviderProps {
  autoDismissTimeout?: number
  globalAutoDismiss?: boolean
  children?: ReactNode[] | ReactNode
  placement?: Placement
  portalTargetSelector?: string
  transitionDuration?: number
}

export type ToastId = string

export type Callback = (id: ToastId) => void

export type Options = {
  iconName?: IconName
  appearance?: Appearance
  actionContent?: string
  actionOnClick?: Function
  autoDismiss?: boolean
  onDismissCallback?: Callback
}

export const defaultOptions: Options = {
  iconName: 'info-filled',
  appearance: Appearance.Info,
  autoDismiss: false,
  onDismissCallback: noop,
}

export type ToastType = Options & { id: ToastId, content: string }

export interface ContextType {
  add: (content: string, options: Options) => ToastId
  remove: (id: ToastId) => void
  removeAll: () => void
  toasts: ToastType[]
}

export type ToastContainerProps = {
  children?: ReactNode[]
  hasToasts: boolean
  placement: Placement
}

export type ToastControllerProps = ToastElementProps & {
  autoDismiss: boolean
  autoDismissTimeout: number
  placement: Placement
  component: ComponentType<ToastElementProps>
}
