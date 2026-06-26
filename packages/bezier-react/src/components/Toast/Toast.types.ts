import type React from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import { type ChildrenProps, type ContentProps } from '~/src/types/props'
import { type ZIndex } from '~/src/types/tokens'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export type ToastPlacement = 'bottom-left' | 'bottom-right'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export type ToastAppearance = 'success' | 'warning' | 'error' | 'info'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
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

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export type ToastContent = NonNullable<React.ReactNode>

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
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

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface ToastProviderProps
  extends ChildrenProps,
    Pick<ToastProps, 'autoDismissTimeout'>,
    ToastProviderOwnProps {}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export type ToastId = string

export type OnDismissCallback = (id: ToastId) => void

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export type ToastOptions = Pick<
  ToastProps,
  'preset' | 'icon' | 'appearance' | 'autoDismiss' | 'zIndex'
> & {
  rightSide?: boolean
  onDismiss?: OnDismissCallback
}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
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
