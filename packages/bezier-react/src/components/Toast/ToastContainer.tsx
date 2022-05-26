/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Container } from './Toast.styled'
import { ToastContainerProps } from './Toast.types'

const ToastContainer = ({
  placement,
  ...props
}: ToastContainerProps) => (
  <Container
    placement={placement}
    {...props}
  />
)

export default React.memo(ToastContainer)
