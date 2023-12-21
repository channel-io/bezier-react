import styled, { css, keyframes } from 'styled-components';
import type { InterpolationProps } from '@channel.io/bezier-react'
const Enter = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const EnterTransition = () => css`
  animation: ${Enter} 150ms 1000ms ease-out forwards;
`

export const Wrapper = styled.div<InterpolationProps>`
  ${css`
    background: red;
  `}

  ${EnterTransition}
`
