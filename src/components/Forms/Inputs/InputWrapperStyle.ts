/* Internal dependencies */
import { css } from '../../../foundation'

export const inputWrapperStyle = css`
  box-shadow: 0 1px 2px ${({ foundation }) => foundation?.theme?.['bg-black-lightest']},
    inset 0 0 0 1px ${({ foundation }) => foundation?.theme?.['bg-black-lighter']};
`

export const focusedInputWrapperStyle = css`
  box-shadow: 0 0 0 3px ${({ foundation }) => foundation?.theme?.['bgtxt-blue-lighter']},
    inset 0 0 0 1px ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
`

export const erroredInputWrapperStyle = css`
  box-shadow: 0 0 0 3px ${({ foundation }) => foundation?.theme?.['bgtxt-orange-lighter']},
    inset 0 0 0 1px ${({ foundation }) => foundation?.theme?.['bgtxt-orange-normal']};
`
