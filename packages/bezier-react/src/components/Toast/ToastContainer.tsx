import React from 'react'

import { type ToastContainerProps } from './Toast.types'

import { Container } from './Toast.styled'

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
