/* Internal dependencies */
import { css } from '../../foundation'

export interface ButtonThemeType extends ReturnType<typeof css> {}

const Primary = css`
  color: ${({ foundation }) => foundation?.theme?.['txt-white']};
  background-color: ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
`

export default {
  Primary,
}
