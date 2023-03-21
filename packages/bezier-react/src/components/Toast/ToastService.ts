/* External dependencies */
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import {
  defaultOptions,
  type ToastOptions,
  type ToastId,
  type ToastType,
  type ToastContent,
} from './Toast.types'

/* ToastService를 사용하는 이유
Notion: https://www.notion.so/channelio/Toast-bc13dfbc81314141909250d9cf02c4c7#82b94a73d2f34257ab4799cdeccbc70c
*/

class ToastService {
  toasts: ToastType[] = []

  getToasts = () => this.toasts

  setToasts = (newToasts: ToastType[]) => {
    this.toasts = newToasts
  }

  has = (toastId: ToastId) => {
    if (!this.toasts.length) {
      return false
    }
    return this.toasts.reduce((flag, toast) => (toast.id === toastId ? true : flag), false)
  }

  add = (content: ToastContent, options: ToastOptions = defaultOptions) => {
    const newId: ToastId = uuid()

    if (this.has(newId)) {
      return ''
    }

    const newToast: ToastType = {
      id: newId,
      content,
      version: 0,
      ...options,
    }
    const newToasts: ToastType[] = [...this.toasts, newToast]
    this.setToasts(newToasts)
    return newId
  }

  update = (toastId: ToastId, content: ToastContent, options: ToastOptions = {}) => {
    if (!this.has(toastId)) {
      return ''
    }

    const newToasts: ToastType[] = this.toasts.map((toast) => {
      if (toast.id === toastId) {
        return {
          ...toast,
          ...options,
          version: toast?.version != null ? toast.version + 1 : 0,
          content,
        }
      }
      return toast
    })
    this.setToasts(newToasts)
    return toastId
  }

  remove = (id: ToastId): boolean => {
    if (!this.has(id)) {
      return false
    }
    const newToasts: ToastType[] = this.toasts.filter((toast) => toast.id !== id)
    this.setToasts(newToasts)
    return true // remove success
  }

  removeAll = () => {
    if (!this.toasts.length) {
      return
    }

    this.setToasts([])
  }
}

export default ToastService
