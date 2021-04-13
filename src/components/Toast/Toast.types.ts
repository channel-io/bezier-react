/* Internal dependencies */
import { noop } from 'lodash-es'
import { ComponentType } from 'react'
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
  appearance?: Appearance
  content: string
  iconName?: IconName
  actionItem?: ActionItemType
  onDismiss: typeof noop
  onMouseEnter: (e) => void
  onMouseLeave: (e) => void
  transitionDuration: number
  positionX: string
  positionY: string
}

export interface ToastProviderProps {
  autoDismissTimeout?: number
  globalAutoDismiss?: boolean
  children?: JSX.Element[] | JSX.Element
  placement?: Placement
  portalTargetSelector?: string
  transitionDuration?: number
}

export type ToastId = string

export type Callback = (id: ToastId) => void

export type Options = {
  content: string
  iconName?: IconName
  appearance?: Appearance
  actionItem?: ActionItemType
  autoDismiss?: boolean
  onDismissCallback?: Callback
}

export const defaultOptions: Options = {
  content: '안내 문구입니다.',
  iconName: 'info-filled',
  appearance: Appearance.Info,
  autoDismiss: false,
  onDismissCallback: noop,
}

export type ToastType = Options & { id: ToastId }

export interface ContextType {
  add: (options: Options) => void
  remove: (id:ToastId) => void
  removeAll: () => void
  update: (id: ToastId, options: Options) => void
  toasts: ToastType[]
}

export type ToastContainerProps = {
  children?: JSX.Element[]
  hasToasts: boolean
  placement: Placement
}

export type ToastControllerProps = ToastProps & {
  autoDismiss: boolean
  autoDismissTimeout: number
  placement: Placement
  component: ComponentType<ToastProps>
}
