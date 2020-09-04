/* Internal dependencies */
import { css } from '../../styling/Theme'

export interface ButtonThemeType extends ReturnType<typeof css> {}

const Primary: ButtonThemeType = css`
  background-color: ${props => props.theme?.colors?.primaryBackground};
  color: ${props => props.theme?.colors?.absoluteWhite};
`

export default {
  Primary,
}
