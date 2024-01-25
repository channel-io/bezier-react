import type React from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import {
  type ChildrenProps,
  type ContentProps,
} from '~/src/types/ComponentProps'
import { type ZIndex } from '~/src/types/Token'

export enum ToastPlacement {
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
}

export enum ToastAppearance {
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
  Info = 'info',
}

export enum ToastPreset {
  Default = 'Default',
  Success = 'Success',
  Error = 'Error',
  Offline = 'Offline',
  Online = 'Online',
}

interface ToastOwnProps {
  placement?: ToastPlacement
  appearance?: ToastAppearance
  preset?: ToastPreset
  icon?: BezierIcon
  /**
   * @deprecated use React.ReactNode content props instead.
   */
  actionContent?: string
  zIndex?: ZIndex
  // NOTE: deprecated ?
  autoDismiss?: boolean
  autoDismissTimeout?: number
  /**
   * Updated toast version
   * @default 0
   */
  version?: number
  onClick?: React.MouseEventHandler
  onDismiss?: () => void
}

export type ToastContent = NonNullable<React.ReactNode>

export interface ToastProps extends
  ContentProps<ToastContent>,
  ToastOwnProps {}

type Offset = {
  left?: number
  right?: number
  bottom?: number
}

interface ToastProviderOwnProps {
  offset?: Offset
  container?: HTMLElement | null
}

export interface ToastProviderProps extends
  ChildrenProps,
  Pick<ToastProps, 'autoDismissTimeout'>,
  ToastProviderOwnProps {}

export type ToastId = string

export type OnDismissCallback = (id: ToastId) => void

export type ToastOptions =
  Pick<
  ToastProps,
  | 'preset'
  | 'icon'
  | 'appearance'
  | 'actionContent'
  | 'autoDismiss'
  | 'zIndex'
  > & {
    rightSide?: boolean
    // onClick?: React.MouseEventHandler
    onDismiss?: OnDismissCallback
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

export interface ToastContextValue {
  add: (content: ToastContent, options?: ToastOptions) => ToastId
  update: (toastId: ToastId, content: ToastContent, options?: ToastOptions) => ToastId
  remove: (id: ToastId) => void
  removeAll: () => void
  leftToasts: ToastType[]
  rightToasts: ToastType[]
}
