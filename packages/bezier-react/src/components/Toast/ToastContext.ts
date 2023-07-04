import { noop } from '~/src/utils/functionUtils'
import { createContext } from '~/src/utils/reactUtils'

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
