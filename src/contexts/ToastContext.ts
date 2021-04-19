/* External dependencies */
import { createContext } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { ContextType } from '../components/Toast/Toast.types'

const ToastContext = createContext<ContextType>({
  add: () => '',
  remove: noop,
  removeAll: noop,
  toasts: [],
})

export default ToastContext
