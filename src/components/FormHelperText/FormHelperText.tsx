/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Typography, SemanticNames } from '../../foundation'
import type FormHelperTextProps from './FormHelperText.types'
import * as Styled from './FormHelperText.styled'

export const FORM_HELPER_TEXT_TEST_ID = 'bezier-react-form-helper-text'

function FormHelperText({
  id,
  testId = FORM_HELPER_TEXT_TEST_ID,
  as = 'p',
  hasError,
  children,
  ...rest
}: FormHelperTextProps,
forwardedRef: React.Ref<HTMLParamElement>,
) {
  const color = useMemo<SemanticNames>(() => {
    if (hasError) {
      return 'bgtxt-orange-normal'
    }
    return 'txt-black-dark'
  }, [hasError])

  if (isEmpty(children)) { return null }

  return (
    <Styled.HelperText
      {...rest}
      id={id}
      testId={testId}
      ref={forwardedRef}
      forwardedAs={as}
      marginTop={4}
      typo={Typography.Size13}
      color={color}
    >
      { children }
    </Styled.HelperText>
  )
}

export default forwardRef(FormHelperText)
