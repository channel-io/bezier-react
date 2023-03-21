/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { type ModalContentContextValue } from './Modal.types'

const ModalContentContext = React.createContext<ModalContentContextValue>({
  showCloseIcon: false,
})

export default ModalContentContext
