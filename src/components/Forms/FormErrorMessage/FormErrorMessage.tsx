/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { BaseHelperText } from 'Components/Forms/BaseHelperText'
import FormErrorMessageProps from './FormErrorMessage.types'

export const FORM_ERROR_MESSAGE_TEST_ID = 'bezier-react-form-error-message'

function FormErrorMessage({
  testId = FORM_ERROR_MESSAGE_TEST_ID,
  color = 'bgtxt-orange-normal',
  children,
  ...rest
}: FormErrorMessageProps,
forwardedRef: React.Ref<HTMLParamElement>,
) {
  return (
    <BaseHelperText
      {...rest}
      ref={forwardedRef}
      type="error"
      testId={testId}
      aria-live="polite"
      color={color}
    >
      { children }
    </BaseHelperText>
  )
}

export default forwardRef(FormErrorMessage)
