/* Internal dependencies */
import { css } from '../ThemedStyledComponent'

const DefaultRoundStyle = css`
  overflow: hidden;
`

const Round10 = css`
  ${DefaultRoundStyle};
  border-radius: 4px;
`

const Round20 = css`
  ${DefaultRoundStyle};
  border-radius: 6px;
`

const Round30 = css`
  ${DefaultRoundStyle};
  border-radius: 8px;
`

const Round40 = css`
  ${DefaultRoundStyle};
  border-radius: 12px;
`

const Round50 = css`
  ${DefaultRoundStyle};
  border-radius: 16px;
`

const Round60 = css`
  ${DefaultRoundStyle};
  border-radius: 20px;
`

const Round70 = css`
  ${DefaultRoundStyle};
  border-radius: 32px;
`

export const Rounding = {
  DefaultRoundStyle,
  Round10,
  Round20,
  Round30,
  Round40,
  Round50,
  Round60,
  Round70,
}
