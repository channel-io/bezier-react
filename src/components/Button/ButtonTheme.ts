/* Internal dependencies */
import { css } from '../../styling/Theme'

export interface ButtonThemeType extends ReturnType<typeof css> {}

const Primary = css`
  background-color: ${props => props.theme?.colors?.primaryBackground};
  color: ${props => props.theme?.colors?.absoluteWhite};
  transition:
    ${props => props.theme?.transition?.BackgroundTransition},
    ${props => props.theme?.transition?.ColorTransition};
`

const Danger = css`
  background-color: ${props => props.theme?.colors?.dangerBackground};
  color: ${props => props.theme?.colors.dangerColor};
  box-shadow: 0 0 0 1px ${props => props.theme?.colors?.dangerBorder};
  transition:
    ${props => props.theme?.transition?.BackgroundTransition},
    ${props => props.theme?.transition?.ColorTransition};
`

export default {
  Primary,
  Danger,
}
