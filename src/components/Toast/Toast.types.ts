/* External dependencies */
import { ReactNode, ComponentType } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'
import { IconName } from '../Icon'
import { TransitionDuration } from '../../foundation/Transition'

export enum ToastPlacement {
  BottomLeft = 'bottomLeft',
  BottomRight = 'bottomRight',
}

export enum ToastAppearance {
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
  Info = 'info',
}

export enum ToastIconColor {
  Success = 'bgtxt-green-normal',
  Warning = 'bgtxt-orange-normal',
  Error = 'bgtxt-red-normal',
  Info = 'txt-black-darkest',
}

export default interface ToastElementProps extends UIComponentProps {
  appearance?: ToastAppearance
  content: string
  iconName?: IconName
  actionContent?: string
  actionOnClick?: Function
  onDismiss: () => void
  transitionDuration: TransitionDuration
  positionX: string
  positionY: string
}

export interface ToastProviderProps {
  autoDismissTimeout?: number
  children?: ReactNode[] | ReactNode
}

export type ToastId = string

export type OnDismissCallback = (id: ToastId) => void

export type Options = {
  iconName?: IconName
  appearance?: ToastAppearance
  actionContent?: string
  actionOnClick?: Function
  autoDismiss?: boolean
  onDismissCallback?: OnDismissCallback
  rightSide?: boolean
}

export const defaultOptions: Options = {
  iconName: 'info-filled',
  appearance: ToastAppearance.Info,
  autoDismiss: false,
  onDismissCallback: noop,
}

export type ToastType = Options & { id: ToastId, content: string }

export interface ContextType {
  add: (content: string, options: Options) => ToastId
  remove: (id: ToastId) => void
  removeAll: () => void
  leftToasts: ToastType[]
  rightToasts: ToastType[]
}

export type ToastContainerProps = {
  children?: ReactNode[]
  hasToasts: boolean
  placement: ToastPlacement
}

export type ToastControllerProps = ToastElementProps & {
  autoDismiss: boolean
  autoDismissTimeout: number
  placement: ToastPlacement
  component: ComponentType<ToastElementProps>
}
