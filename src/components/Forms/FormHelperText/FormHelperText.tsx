/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { BaseHelperText } from 'Components/Forms/BaseHelperText'
import type FormHelperTextProps from './FormHelperText.types'

export const FORM_HELPER_TEXT_TEST_ID = 'bezier-react-form-helper-text'

function FormHelperText({
  testId = FORM_HELPER_TEXT_TEST_ID,
  color = 'txt-black-dark',
  children,
  ...rest
}: FormHelperTextProps,
forwardedRef: React.Ref<HTMLParamElement>,
) {
  return (
    <BaseHelperText
      {...rest}
      ref={forwardedRef}
      type="info"
      testId={testId}
      color={color}
    >
      { children }
    </BaseHelperText>
  )
}

export default forwardRef(FormHelperText)
