import {
  type ComponentType,
  type ReactNode,
} from 'react'
import type React from 'react'

import {
  type BezierIcon,
  InfoFilledIcon,
} from '@channel.io/bezier-icons'

import { type TransitionDuration } from '~/src/foundation'

import {
  type BezierComponentProps,
  type ContentProps,
} from '~/src/types/ComponentProps'
import { type InjectedInterpolation } from '~/src/types/Foundation'
import { noop } from '~/src/utils/function'

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
  icon: BezierIcon
}

interface ToastElementOptions {
  preset?: ToastPreset
  appearance?: ToastAppearance
  icon?: BezierIcon
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

export type Offset = {
  left?: number
  right?: number
  bottom?: number
}

export interface ToastProviderProps {
  autoDismissTimeout?: number
  offset?: Offset
  container?: HTMLElement | null
  children?: ReactNode[] | ReactNode
}

export type ToastId = string

export type OnDismissCallback = (id: ToastId) => void

export type ToastOptions = {
  preset?: ToastPreset
  icon?: BezierIcon
  appearance?: ToastAppearance
  actionContent?: string
  autoDismiss?: boolean
  rightSide?: boolean
  zIndex?: number
  onClick?: React.MouseEventHandler
  onDismiss?: OnDismissCallback
}

export const defaultOptions: ToastOptions = {
  icon: InfoFilledIcon,
  appearance: ToastAppearance.Info,
  autoDismiss: false,
  onDismiss: noop,
  rightSide: false,
}

export type ToastType = ToastOptions & {
  id: ToastId
  content: ToastContent
  /**
   * Updated version
   * @default 0
   */
  version?: number
}

export interface ToastContextType {
  add: (content: ToastContent, options?: ToastOptions) => ToastId
  update: (toastId: ToastId, content: ToastContent, options?: ToastOptions) => ToastId
  remove: (id: ToastId) => void
  removeAll: () => void
  leftToasts: ToastType[]
  rightToasts: ToastType[]
}

export type ToastContainerProps = {
  children?: ReactNode[]
  placement: ToastPlacement
  offset?: Offset
}

export interface ToastControllerProps extends ToastElementProps {
  autoDismiss: boolean
  autoDismissTimeout: number
  component: ComponentType<ToastElementProps>
  /**
   * Updated toast version
   * @default 0
   */
  version?: number
}
