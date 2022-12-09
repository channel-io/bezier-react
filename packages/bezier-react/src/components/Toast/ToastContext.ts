/* External dependencies */
import { createContext } from 'react'

/* Internal dependencies */
import { ToastContextType } from './Toast.types'

const ToastContext = createContext<ToastContextType>({
  add: () => '',
  update: () => '',
  remove: () => {},
  removeAll: () => {},
  leftToasts: [],
  rightToasts: [],
})

export default ToastContext
