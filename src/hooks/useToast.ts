import { useContext } from 'react'
import { ToastContext } from '../contexts/ToastProvider'

export const useToast = () => {
  const context = useContext(ToastContext)

  if (!context) {
    throw Error('ToastProvider가 필요합니다.')
  }

  return {
    addToast: context.add,
    removeToast: context.remove,
    removeAllToasts: context.removeAll,
    updateToast: context.update,
    toasts: context.toasts,
  }
}
