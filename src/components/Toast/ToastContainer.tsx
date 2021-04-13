/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Container } from './Toast.styled'
import { ToastContainerProps } from './Toast.types'

const ToastContainer = ({
  hasToasts,
  placement,
  ...props
}: ToastContainerProps) => (
  <Container
    placement={placement}
    hasToasts={hasToasts}
    {...props}
  />
)

export default React.memo(ToastContainer)
