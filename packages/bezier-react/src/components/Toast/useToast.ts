import { useToastContext } from './ToastContext'

export default function useToast() {
  const context = useToastContext()

  if (!context) {
    throw Error('\'useToast\' must be used within \'ToastProvider\'')
  }

  return {
    addToast: context.add,
    updateToast: context.update,
    removeToast: context.remove,
    removeAllToasts: context.removeAll,
    leftToasts: context.leftToasts,
    rightToasts: context.rightToasts,
  }
}
