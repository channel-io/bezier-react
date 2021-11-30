/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import { isNil, isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Typography, SemanticNames } from '../../foundation'
import type FormHelperTextProps from './FormHelperText.types'
import * as Styled from './FormHelperText.styled'

export const FORM_HELPER_TEXT_TEST_ID = 'bezier-react-form-helper-text'

function FormHelperText({
  id,
  testId = FORM_HELPER_TEXT_TEST_ID,
  errorMessage,
  children,
  ...rest
}: FormHelperTextProps,
forwardedRef: React.Ref<HTMLParamElement>,
) {
  const helperTextProps = useMemo<{
    color: SemanticNames
    content: React.ReactNode
  } | null>(() => {
    if (!isEmpty(errorMessage)) {
      return {
        color: 'bgtxt-orange-normal',
        content: errorMessage,
      }
    }
    if (!isEmpty(children)) {
      return {
        color: 'txt-black-dark',
        content: children,
      }
    }
    return null
  }, [
    errorMessage,
    children,
  ])

  if (isNil(helperTextProps)) { return null }

  const { color, content } = helperTextProps

  return (
    <Styled.HelperText
      {...rest}
      id={id}
      testId={testId}
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
