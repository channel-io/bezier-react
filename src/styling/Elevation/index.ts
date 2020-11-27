/* Internal dependencies */
import { css } from '../Theme'

const defaultBorderWidth = 1

const ev0 = css`
  box-shadow: 0 0 0 ${defaultBorderWidth}px ${props => props.theme?.colors?.shadow1};
`

const ev10 = css`
  box-shadow:
    0 0 0 ${defaultBorderWidth}px ${props => props.theme?.colors?.shadow1},
    0 2px 6px ${props => props.theme?.colors?.shadow1};
`

const ev20 = css`
  box-shadow:
    0 0 0 ${defaultBorderWidth}px ${props => props.theme?.colors?.shadow1},
    0 4px 16px ${props => props.theme?.colors?.shadow1};
`

const ev30 = css`
  box-shadow:
    0 0 0 ${defaultBorderWidth}px ${props => props.theme?.colors?.shadow1},
    0 4px 16px ${props => props.theme?.colors?.shadow1};
`

const ev40 = css`
  box-shadow:
    0 0 0 ${defaultBorderWidth}px ${props => props.theme?.colors?.shadow1},
    0 4px 20px ${props => props.theme?.colors?.shadow1};
`

const ev50 = css`
  box-shadow:
    0 0 0 ${defaultBorderWidth}px ${props => props.theme?.colors?.shadow1},
    0 4px 20px ${props => props.theme?.colors?.shadow1};
`

const ev60 = css`
  box-shadow:
    0 0 0 ${defaultBorderWidth}px ${props => props.theme?.colors?.shadow1},
    0 6px 60px ${props => props.theme?.colors?.shadow1};
`

export default {
  ev0,
  ev10,
  ev20,
  ev30,
  ev40,
  ev50,
  ev60,
}
