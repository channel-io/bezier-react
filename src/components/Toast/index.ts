/* Internal dependencies */
import ToastProvider from '../../contexts/ToastProvider'
import { useToast } from '../../hooks/useToast'
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
