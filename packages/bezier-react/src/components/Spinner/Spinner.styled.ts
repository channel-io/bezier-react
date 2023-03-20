/* Internal dependencies */
import { styled, css, keyframes } from '~/src/foundation'
import { StyledSpinnerProps, SpinnerSize, SpinnerThickness } from './Spinner.types'

function getThicknessFromSize(size: SpinnerSize) {
  switch (size) {
    case SpinnerSize.XL:
      return SpinnerThickness.Bold
    case SpinnerSize.S:
    case SpinnerSize.XS:
      return SpinnerThickness.Light
    case SpinnerSize.L:
    case SpinnerSize.M:
    default:
      return SpinnerThickness.Normal
  }
}

const spinnerKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const spinnerAnimation = () => css`
  animation: ${spinnerKeyframes} 1s infinite linear;
`

export const SpinIcon = styled.div<StyledSpinnerProps>`
  display: inline-block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-style: solid;
  border-width: ${({ size }) => getThicknessFromSize(size)}px;
  border-top-color: transparent;
  border-right-color: ${({ foundation, color }) => (color ? foundation?.theme?.[color] : 'inherit')};
  border-bottom-color: ${({ foundation, color }) => (color ? foundation?.theme?.[color] : 'inherit')};
  border-left-color: ${({ foundation, color }) => (color ? foundation?.theme?.[color] : 'inherit')};
  border-radius: 50%;
  ${spinnerAnimation}

  ${({ interpolation }) => interpolation};
`
