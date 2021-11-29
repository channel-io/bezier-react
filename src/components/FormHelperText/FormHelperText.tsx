/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import { isNil } from 'lodash-es'

/* Internal dependencies */
import { Typography, SemanticNames } from '../../foundation'
import { isNotEmptyString } from '../../utils/stringUtils'
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
  const helperTextProps = useMemo<{
    color: SemanticNames
    content: string
  } | null>(() => {
    if (isNotEmptyString(errorMessage)) {
      return {
        color: 'bgtxt-orange-normal',
        content: errorMessage,
      }
    }
    if (isNotEmptyString(description)) {
      return {
        color: 'txt-black-dark',
        content: description,
      }
    }
    return null
  }, [
    errorMessage,
    description,
  ])

  if (isNil(helperTextProps)) { return null }

  const { color, content } = helperTextProps

  return (
    <Styled.HelperText
      {...rest}
      id={id}
      ref={forwardedRef}
      forwardedAs="p"
      marginTop={4}
      typo={Typography.Size13}
      color={color}
    >
      { content }
    </Styled.HelperText>
  )
}

export default forwardRef(FormHelperText)
