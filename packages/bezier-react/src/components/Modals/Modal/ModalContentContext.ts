import { createContext } from '~/src/utils/reactUtils'

import { type ModalContentContextValue } from './Modal.types'

export const [
  ModalContentContextProvider,
  useModalContentContext,
] = createContext<ModalContentContextValue>({
  showCloseIcon: false,
})
