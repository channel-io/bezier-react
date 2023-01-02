/* External dependencies */
import { createContext } from 'react'

/* Internal dependencies */
import { noop } from 'Utils/typeUtils'
import { ToastContextType } from './Toast.types'

const ToastContext = createContext<ToastContextType>({
  add: () => '',
  update: () => '',
  remove: noop,
  removeAll: noop,
  leftToasts: [],
  rightToasts: [],
})

export default ToastContext
