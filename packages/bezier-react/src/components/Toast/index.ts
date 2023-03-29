/* Internal dependencies */
import ToastProvider from './ToastProvider'
import {
  type ToastOptions,
  type ToastId,
  type ToastType,
  type ToastContent,
} from './Toast.types'
import type ToastProps from './Toast.types'
import {
  ToastPlacement,
  ToastAppearance,
  ToastIconColor,
  ToastPreset,
} from './Toast.types'

export type {
  ToastProps,
  ToastOptions,
  ToastId,
  ToastType,
  ToastContent,
}

export {
  ToastProvider,
  ToastPreset,
  ToastPlacement,
  ToastAppearance,
  ToastIconColor,
}
