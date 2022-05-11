/* External dependencies */
import { createContext } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { ToastContextType } from './Toast.types'

const ToastContext = createContext<ToastContextType>({
  add: () => '',
  remove: noop,
  removeAll: noop,
  leftToasts: [],
  rightToasts: [],
})

export default ToastContext
