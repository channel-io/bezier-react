/* Internal dependencies */
import { css } from '../ThemedStyledComponent'

const DefaultRoundStyle = css`
  overflow: hidden;
`

const Round10 = css`
  ${DefaultRoundStyle};
  border-radius: 2px;
`

const Round20 = css`
  ${DefaultRoundStyle};
  border-radius: 2px;
`

const Round30 = css`
  ${DefaultRoundStyle};
  border-radius: 2px;
`

export const Rounding = {
  DefaultRoundStyle,
  Round10,
  Round20,
  Round30,
}
