/* Internal dependencies */
import { useToast } from '../../hooks/useToast'
import ToastProvider from './ToastProvider'
import ToastProps, {
  Placement as ToastPlacement,
  Appearance as ToastAppearance,
  IconColor as ToastIconColor,
} from './Toast.types'

export type {
  ToastProps,
}

export {
  ToastProvider,
  useToast,
  ToastPlacement,
  ToastAppearance,
  ToastIconColor,
}
