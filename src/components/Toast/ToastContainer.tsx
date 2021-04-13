/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { styled } from '../../foundation'
import { ToastContainerProps } from './Toast.types'
import { placements } from './utils'

const Container = styled.div<ToastContainerProps>`
  position: absolute;
  bottom: 0;
  z-index: 1000000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100vh;
  padding: 8px 16px;
  overflow: hidden;
  pointer-events: none;
  ${({ placement }) => placements(placement)}
`

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
