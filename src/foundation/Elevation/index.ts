/* Internal dependencies */
import { css } from '../ThemedStyledComponent'

const defaultBorderStyle = '0 0 2px 1px'

const ev1 = css`
  box-shadow:
    ${defaultBorderStyle} ${({ theme }) => theme?.colors?.shadow1},
    0 1px 2px ${({ theme }) => theme?.colors?.shadow1};
`

const ev2 = css`
  box-shadow:
    ${defaultBorderStyle} ${({ theme }) => theme?.colors?.shadow1},
    0 2px 6px ${({ theme }) => theme?.colors?.shadow1};
`

const ev3 = css`
  box-shadow:
    ${defaultBorderStyle} ${({ theme }) => theme?.colors?.shadow1},
    0 4px 12px ${({ theme }) => theme?.colors?.shadow1};
`

const ev4 = css`
  box-shadow:
    ${defaultBorderStyle} ${({ theme }) => theme?.colors?.shadow1},
    0 4px 20px ${({ theme }) => theme?.colors?.shadow1};
`

const ev5 = css`
  box-shadow:
    ${defaultBorderStyle} ${({ theme }) => theme?.colors?.shadow1},
    0 6px 40px ${({ theme }) => theme?.colors?.shadow1};
`

const ev6 = css`
  box-shadow:
    ${defaultBorderStyle} ${({ theme }) => theme?.colors?.shadow1},
    0 12px 60px ${({ theme }) => theme?.colors?.shadow1};
`

export const Elevation = {
  ev1,
  ev2,
  ev3,
  ev4,
  ev5,
  ev6,
}
