import React from 'react'

import type { ModalContextValue } from './Modal.types'

const ModalContext = React.createContext<ModalContextValue>({
  onHide: () => null,
})

export default ModalContext
