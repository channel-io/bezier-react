/* Internal dependencies */
import { css } from 'Foundation'
import { FormComponentProps } from 'Components/Forms/Form.types'

export const inputTextStyle = css`
  color: ${({ foundation }) => foundation?.theme?.['txt-black-darkest']};

  ${(props: FormComponentProps) => props?.readOnly && css`
    color: ${({ foundation }) => foundation?.theme?.['txt-black-darker']};
  `}
`

export const inputPlaceholderStyle = css`
  &::placeholder {
    color: ${({ foundation }) => foundation?.theme?.['txt-black-dark']};
  }
`

export const inputWrapperStyle = css`
  box-shadow: 0 1px 2px ${({ foundation }) => foundation?.theme?.['bg-black-lighter']},
    inset 0 0 0 1px ${({ foundation }) => foundation?.theme?.['bg-black-dark']};
`

export const ckafocusedInputWrapperStyle = css`
  box-shadow: 0 0 0 3px ${({ foundation }) => foundation?.theme?.['bgtxt-blue-light']},
    inset 0 0 0 1px ${({ foundation }) => foundation?.theme?.['bgtxt-blue-normal']};
`

export const erroredInputWrapperStyle = css`
  box-shadow: 0 0 0 3px ${({ foundation }) => foundation?.theme?.['bgtxt-orange-light']},
    inset 0 0 0 1px ${({ foundation }) => foundation?.theme?.['bgtxt-orange-normal']};
`
