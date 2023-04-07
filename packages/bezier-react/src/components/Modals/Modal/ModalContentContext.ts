import React from 'react'

import { type ModalContentContextValue } from './Modal.types'

const ModalContentContext = React.createContext<ModalContentContextValue>({
  showCloseIcon: false,
})

export default ModalContentContext
