/* External dependencies */
import { useContext } from 'react'

/* Internal dependencies */
import ToastContext from '../contexts/ToastContext'

export const useToast = () => {
  const context = useContext(ToastContext)

  if (!context) {
    throw Error('ToastProvider가 필요합니다.')
  }

  return {
    addToast: context.add,
    removeToast: context.remove,
    removeAllToasts: context.removeAll,
    leftToasts: context.leftToasts,
    rightToasts: context.rightToasts,
  }
}
