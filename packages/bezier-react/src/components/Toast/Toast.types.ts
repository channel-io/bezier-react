/* External dependencies */
import React, { ReactNode, ComponentType } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { TransitionDuration } from 'Foundation'
import { BezierComponentProps, ContentProps } from 'Types/ComponentProps'
import { InjectedInterpolation } from 'Types/Foundation'
import { IconName } from 'Components/Icon'

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

interface ToastElementOptions {
  preset?: ToastPreset
  appearance?: ToastAppearance
  iconName?: IconName
  /**
   * @deprecated use React.ReactNode content props instead.
   */
  actionContent?: string
  transitionDuration: TransitionDuration
  transform: InjectedInterpolation
  placement: ToastPlacement
  zIndex?: number
  onClick?: React.MouseEventHandler
  onDismiss: React.MouseEventHandler<HTMLDivElement>
}

export type ToastContent = NonNullable<React.ReactNode>

export default interface ToastElementProps extends
  BezierComponentProps,
  Required<ContentProps<ToastContent>>,
  ToastElementOptions {}

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
  autoDismiss?: boolean
  rightSide?: boolean
  zIndex?: number
  onClick?: React.MouseEventHandler
  onDismiss?: OnDismissCallback
}

export const defaultOptions: ToastOptions = {
  iconName: 'info-filled',
  appearance: ToastAppearance.Info,
  autoDismiss: false,
  onDismiss: noop,
  rightSide: false,
}

export type ToastType = ToastOptions & { id: ToastId, content: ToastContent }

export interface ToastContextType {
  add: (content: ToastContent, options: ToastOptions) => ToastId
  remove: (id: ToastId) => void
  removeAll: () => void
  leftToasts: ToastType[]
  rightToasts: ToastType[]
}

export type ToastContainerProps = {
  children?: ReactNode[]
  placement: ToastPlacement
}

export interface ToastControllerProps extends ToastElementProps {
  autoDismiss: boolean
  autoDismissTimeout: number
  component: ComponentType<ToastElementProps>
}
