/* Internal dependencies */
import { useToast } from '../../hooks/useToast'
import ToastProvider from './ToastProvider'
import ToastProps, {
  ToastPlacement,
  ToastAppearance,
  ToastIconColor,
  ToastPreset,
} from './Toast.types'

export type {
  ToastProps,
}

export {
  ToastProvider,
  useToast,
  ToastPreset,
  ToastPlacement,
  ToastAppearance,
  ToastIconColor,
}
