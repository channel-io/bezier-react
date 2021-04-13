import React from 'react'
import { styled } from '../../foundation'
import { Placement } from './Toast.types'
import { placements } from './utils'

export type ToastContainerProps = {
  children?: JSX.Element[]
  hasToasts: boolean
  placement: Placement
}

interface ContainerProps {
  placement: Placement
}

const Container = styled.div<ContainerProps>`
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
    {...props}
  />
)

export default React.memo(ToastContainer)
