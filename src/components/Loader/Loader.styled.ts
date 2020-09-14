/* Internal dependencies */
import { styled, keyframes, css } from '../../styling/Theme'
import Palette from '../../styling/Palette'
import { StyledLoaderProps, StyledSpinnerProps } from './Loader.types'

const appearAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
const loaderRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`
const delayed = (props: StyledLoaderProps) => (props.delayed ? css`
  opacity: 0;
  animation: ${appearAnimation} 0.2s ease-in;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
` : '')

const relative = (props: StyledLoaderProps) => (props.relative ? css`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
` : '')

export const StyledLoader = styled.div<StyledLoaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => (props.dim
    ? `background-color: ${Palette.black20};`
    : ''
  )}

  ${delayed}

  ${relative}
`

export const Spinner = styled.div<StyledSpinnerProps>`
  display: inline-block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: solid ${({ thickness }) => thickness}px ${({ color }) => Palette[color]};
  border-top-color: transparent;
  border-radius: 50%;
  transform-origin: 50% 50%;
  animation: ${loaderRotate} 1s infinite linear;
`

export const Content = styled.div``
