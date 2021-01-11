/* Internal dependencies */
import { css } from '../FoundationStyledComponent'

const DefaultRoundStyle = css`
  overflow: hidden;
`

const round10 = css`
  ${DefaultRoundStyle};
  border-radius: 4px;
`

const round20 = css`
  ${DefaultRoundStyle};
  border-radius: 6px;
`

const round30 = css`
  ${DefaultRoundStyle};
  border-radius: 8px;
`

const round40 = css`
  ${DefaultRoundStyle};
  border-radius: 12px;
`

const round50 = css`
  ${DefaultRoundStyle};
  border-radius: 16px;
`

const round60 = css`
  ${DefaultRoundStyle};
  border-radius: 20px;
`

const round70 = css`
  ${DefaultRoundStyle};
  border-radius: 32px;
`

export const Rounding = {
  DefaultRoundStyle,
  round10,
  round20,
  round30,
  round40,
  round50,
  round60,
  round70,
}
