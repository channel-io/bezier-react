/* External dependencies */
import React, { forwardRef } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Typography } from '../../foundation'
import type FormHelperTextProps from './FormHelperText.types'
import * as Styled from './FormHelperText.styled'

function FormHelperText({
  id,
  description,
  errorMessage,
  ...rest
}: FormHelperTextProps,
forwardedRef: React.Ref<HTMLParamElement>,
) {
  const hasDescription = !isEmpty(description)
  const hasError = !isEmpty(errorMessage)

  if (!hasDescription && !hasError) { return null }

  return (
    <Styled.HelperText
      {...rest}
      id={id}
      ref={forwardedRef}
      forwardedAs="p"
      marginTop={4}
      typo={Typography.Size13}
      color={hasError ? 'bgtxt-orange-normal' : 'txt-black-dark'}
    >
      { hasError ? errorMessage : description }
    </Styled.HelperText>
  )
}

export default forwardRef(FormHelperText)
