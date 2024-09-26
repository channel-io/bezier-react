import type React from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import { type ChildrenProps, type ContentProps } from '~/src/types/props'
import { type ZIndex } from '~/src/types/tokens'

export type ToastPlacement = 'bottom-left' | 'bottom-right'

export type ToastAppearance = 'success' | 'warning' | 'error' | 'info'

export type ToastPreset = 'default' | 'success' | 'error' | 'offline' | 'online'

interface ToastOwnProps {
  placement?: ToastPlacement
  appearance?: ToastAppearance
  preset?: ToastPreset
  icon?: BezierIcon
  /**
   * @deprecated Use `zIndex` of `ToastProvider` instead
   */
  zIndex?: ZIndex
  autoDismiss?: boolean
  autoDismissTimeout?: number
  /**
   * Updated toast version
   * @default 0
   */
  version?: number
  onDismiss?: () => void
}

export type ToastContent = NonNullable<React.ReactNode>

export interface ToastProps extends ContentProps<ToastContent>, ToastOwnProps {}

type Offset = {
  left?: number
  right?: number
  bottom?: number
}

interface ToastProviderOwnProps {
  offset?: Offset
  container?: HTMLElement | null
  /**
   * z-index level of the Toast container
   * @default 'toast'
   */
  zIndex?: ZIndex
}

export interface ToastProviderProps
  extends ChildrenProps,
    Pick<ToastProps, 'autoDismissTimeout'>,
    ToastProviderOwnProps {}

export type ToastId = string

export type OnDismissCallback = (id: ToastId) => void

export type ToastOptions = Pick<
  ToastProps,
  'preset' | 'icon' | 'appearance' | 'autoDismiss' | 'zIndex'
> & {
  rightSide?: boolean
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
  update: (
    toastId: ToastId,
    content: ToastContent,
    options?: ToastOptions
  ) => ToastId
  remove: (id: ToastId) => void
  removeAll: () => void
  leftToasts: ToastType[]
  rightToasts: ToastType[]
}
