/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { FormHelperText } from 'Components/Forms/FormHelperText'
import FormErrorMessageProps from './FormErrorMessage.types'

export const FORM_ERROR_MESSAGE_TEST_ID = 'bezier-react-form-error-message'

function FormErrorMessage({
  testId = FORM_ERROR_MESSAGE_TEST_ID,
  color = 'bgtxt-orange-normal',
  children,
  ...rest
}: FormErrorMessageProps) {
  return (
    <FormHelperText
      {...rest}
      testId={testId}
      aria-live="polite"
      color={color}
    >
      { children }
    </FormHelperText>
  )
}

export default FormErrorMessage
