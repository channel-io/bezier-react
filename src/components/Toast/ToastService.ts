/* External dependencies */
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import {
  defaultOptions,
  ToastOptions,
  ToastId,
  ToastType,
} from './Toast.types'

class ToastService {
  toasts: ToastType[] = []

  getToasts = () => this.toasts

  setToasts = (newToasts: ToastType[]) => {
    this.toasts = newToasts
  }

  has = (id: string) => {
    if (!this.toasts.length) {
      return false
    }
    return this.toasts.reduce((flag, cur) => (cur.id === id ? true : flag), false)
  }

  add = (content: string, options: ToastOptions = defaultOptions) => {
    const newId: ToastId = uuid()

    if (this.has(newId)) {
      return ''
    }

    const newToast: ToastType = {
      id: newId,
      content,
      ...options,
    }
    const newToasts: ToastType[] = [...this.toasts, newToast]
    this.setToasts(newToasts)
    return newId
  }

  remove = (id: ToastId): void => {
    if (!this.has(id)) {
      return
    }
    const newToasts: ToastType[] = this.toasts.filter((toast) => toast.id !== id)
    this.setToasts(newToasts)
  }

  removeAll = () => {
    if (!this.toasts.length) {
      return
    }

    this.setToasts([])
  }
}

export default ToastService
