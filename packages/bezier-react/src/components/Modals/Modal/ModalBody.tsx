/* External dependencies */
import React from 'react'

/* Internal dependencies */
import * as Styled from './Modal.styled'

export function ModalBody({ children }) {
  return (
    <Styled.Body>
      { children }
    </Styled.Body>
  )
}
