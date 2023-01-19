/* Internal dependencies */
import { css } from '~/src/foundation/FoundationStyledComponent'

const DefaultRoundStyle = css`
  overflow: hidden;
`

export enum RoundAbsoluteNumber {
  R1 = 1,
  R3 = 3,
  R4 = 4,
  R6 = 6,
  R8 = 8,
  R12 = 12,
  R16 = 16,
  R20 = 20,
  R32 = 32,
}

const round1 = css`
  ${DefaultRoundStyle};
  border-radius: ${RoundAbsoluteNumber.R1}px;
`

const round3 = css`
  ${DefaultRoundStyle};
  border-radius: ${RoundAbsoluteNumber.R3}px;
`

const round4 = css`
  ${DefaultRoundStyle};
  border-radius: ${RoundAbsoluteNumber.R4}px;
`

const round6 = css`
  ${DefaultRoundStyle};
  border-radius: ${RoundAbsoluteNumber.R6}px;
`

const round8 = css`
  ${DefaultRoundStyle};
  border-radius: ${RoundAbsoluteNumber.R8}px;
`

const round12 = css`
  ${DefaultRoundStyle};
  border-radius: ${RoundAbsoluteNumber.R12}px;
`

const round16 = css`
  ${DefaultRoundStyle};
  border-radius: ${RoundAbsoluteNumber.R16}px;
`

const round20 = css`
  ${DefaultRoundStyle};
  border-radius: ${RoundAbsoluteNumber.R20}px;
`

const round32 = css`
  ${DefaultRoundStyle};
  border-radius: ${RoundAbsoluteNumber.R32}px;
`

export const Rounding = {
  DefaultRoundStyle,
  round1,
  round3,
  round4,
  round6,
  round8,
  round12,
  round16,
  round20,
  round32,
}
