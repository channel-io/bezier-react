/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { ModalBodyProps } from './Modal.types'
import * as Styled from './Modal.styled'

export const ModalBody = forwardRef(function ModalBody({
  children,
  ...rest
}: ModalBodyProps, forwardedRef: React.Ref<HTMLDivElement>) {
  return (
    <Styled.Body
      ref={forwardedRef}
      {...rest}
    >
      { children }
    </Styled.Body>
  )
})
