/* Internal dependencies */
import { css } from '../FoundationStyledComponent'

const DefaultRoundStyle = css`
  overflow: hidden;
`

const round4 = css`
  ${DefaultRoundStyle};
  border-radius: 4px;
`

const round6 = css`
  ${DefaultRoundStyle};
  border-radius: 6px;
`

const round8 = css`
  ${DefaultRoundStyle};
  border-radius: 8px;
`

const round12 = css`
  ${DefaultRoundStyle};
  border-radius: 12px;
`

const round16 = css`
  ${DefaultRoundStyle};
  border-radius: 16px;
`

const round20 = css`
  ${DefaultRoundStyle};
  border-radius: 20px;
`

const round32 = css`
  ${DefaultRoundStyle};
  border-radius: 32px;
`

export const Rounding = {
  DefaultRoundStyle,
  round4,
  round6,
  round8,
  round12,
  round16,
  round20,
  round32,
}
