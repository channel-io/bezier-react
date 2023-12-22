import { Text } from '@channel.io/bezier-react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const WrappedText = styled(Text)``
