/* Internal dependencies */
import { css } from 'Foundation'

export const inputPlaceholderStyle = css`
  &::placeholder {
    color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};
  }
`
