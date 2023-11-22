import { noop } from '~/src/utils/function'
import { createContext } from '~/src/utils/react'

import { type ToastContextType } from './Toast.types'

export const [
  ToastContextProvider,
  useToastContext,
] = createContext<ToastContextType>({
  add: () => '',
  update: () => '',
  remove: noop,
  removeAll: noop,
  leftToasts: [],
  rightToasts: [],
})
