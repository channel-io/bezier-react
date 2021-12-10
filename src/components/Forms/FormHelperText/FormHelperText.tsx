/* External dependencies */
import React, { forwardRef } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import type FormHelperTextProps from './FormHelperText.types'
import * as Styled from './FormHelperText.styled'

export const FORM_HELPER_TEXT_TEST_ID = 'bezier-react-form-helper-text'

function FormHelperText({
  testId = FORM_HELPER_TEXT_TEST_ID,
  as = 'p',
  hasError,
  typo = Typography.Size13,
  children,
  ...rest
}: FormHelperTextProps,
forwardedRef: React.Ref<HTMLParamElement>,
) {
  if (isEmpty(children)) { return null }

  return (
    <Styled.HelperText
      {...rest}
      aria-live={hasError ? 'polite' : undefined}
      color={hasError ? 'bgtxt-orange-normal' : 'txt-black-dark'}
      testId={testId}
      ref={forwardedRef}
      forwardedAs={as}
      typo={typo}
    >
      { children }
    </Styled.HelperText>
  )
}

export default forwardRef(FormHelperText)
