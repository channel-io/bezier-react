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

export enum ToastPreset {
  Default = 'Default',
  Success = 'Success',
  Error = 'Error',
  Offline = 'Offline',
  Online = 'Online',
}

export interface ToastPresetType {
  appearance: ToastAppearance
  iconName: IconName
}

export default interface ToastElementProps extends UIComponentProps {
  preset?: ToastPreset
  appearance?: ToastAppearance
  iconName?: IconName
  content: string
  actionContent?: string
  onClick?: () => void
  onDismiss: () => void
  transitionDuration: TransitionDuration
  placement: ToastPlacement
}

export interface ToastProviderProps {
  autoDismissTimeout?: number
  children?: ReactNode[] | ReactNode
}

export type ToastId = string

export type OnDismissCallback = (id: ToastId) => void

export type ToastOptions = {
  preset?: ToastPreset
  iconName?: IconName
  appearance?: ToastAppearance
  actionContent?: string
  onClick?: () => void
  autoDismiss?: boolean
  onDismiss?: OnDismissCallback
  rightSide?: boolean
}

export const defaultOptions: ToastOptions = {
  iconName: 'info-filled',
  appearance: ToastAppearance.Info,
  autoDismiss: false,
  onDismiss: noop,
  rightSide: false,
}

export type ToastType = ToastOptions & { id: ToastId, content: string }

export interface ToastContextType {
  add: (content: string, options: ToastOptions) => ToastId
  remove: (id: ToastId) => void
  removeAll: () => void
  leftToasts: ToastType[]
  rightToasts: ToastType[]
}

export type ToastContainerProps = {
  children?: ReactNode[]
  placement: ToastPlacement
}

export type ToastControllerProps = ToastElementProps & {
  autoDismiss: boolean
  autoDismissTimeout: number
  component: ComponentType<ToastElementProps>
}
