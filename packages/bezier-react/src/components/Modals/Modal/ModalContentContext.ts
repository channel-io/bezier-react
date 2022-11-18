/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { ModalContentContextValue } from './Modal.types'

const ModalContentContext = React.createContext<ModalContentContextValue>({
  showCloseIcon: false,
})

export default ModalContentContext
