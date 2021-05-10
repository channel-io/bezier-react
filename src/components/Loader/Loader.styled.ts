/* Internal dependencies */
import { styled, css } from '../../foundation'
import { StyledLoaderProps, StyledSpinnerProps } from './Loader.types'

const delayed = (props: StyledLoaderProps) => (props.delayed ? css`
  @keyframes appearAnimation {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  opacity: 0;
  animation: appearAnimation 0.2s ease-in;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
` : '')

const relative = (props: StyledLoaderProps) => (props.relative ? css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
` : '')

export const StyledLoader = styled.div<StyledLoaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => (props.dim
    // ? `background-color: ${Palette.black20};`
    ? 'background-color: black;'
    : ''
  )}

  ${delayed}

  ${relative}
`

export const Spinner = styled.div<StyledSpinnerProps>`
  @keyframes loaderRotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  display: inline-block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: solid ${({ thickness }) => thickness}px ${({ foundation, color }) => foundation?.theme?.[color]};
  border-top-color: transparent;
  border-radius: 50%;
  transform-origin: 50% 50%;
  animation: loaderRotate 1s infinite linear;
`

export const Content = styled.div``
