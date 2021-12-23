/* External dependencies */
import React, { forwardRef, useEffect } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import useFormControlContext from 'Components/Forms/useFormControlContext'
import type FormHelperTextProps from './FormHelperText.types'
import * as Styled from './FormHelperText.styled'

export const FORM_HELPER_TEXT_TEST_ID = 'bezier-react-form-helper-text'

function FormHelperText({
  testId = FORM_HELPER_TEXT_TEST_ID,
  as = 'p',
  typo = Typography.Size13,
  children,
  ...rest
}: FormHelperTextProps,
forwardedRef: React.Ref<HTMLParamElement>,
) {
  const contextValue = useFormControlContext()

  const {
    hasError,
    setHasHelperText,
    Wrapper,
    ...ownProps
  } = contextValue?.getHelperTextProps(rest) ?? {
    ...rest,
    setHasHelperText: undefined,
    Wrapper: React.Fragment,
  }

  const shouldRendered = !isEmpty(children)

  useEffect(() => {
    setHasHelperText?.(shouldRendered)
  }, [
    shouldRendered,
    setHasHelperText,
  ])

  useEffect(() => function cleanUp() {
    setHasHelperText?.(false)
  }, [setHasHelperText])

  if (!shouldRendered) { return null }

  return (
    <Wrapper>
      <Styled.HelperText
        {...ownProps}
        aria-live={hasError ? 'polite' : undefined}
        color={hasError ? 'bgtxt-orange-normal' : 'txt-black-dark'}
        testId={testId}
        ref={forwardedRef}
        forwardedAs={as}
        typo={typo}
      >
        { children }
      </Styled.HelperText>
    </Wrapper>
  )
}

export default forwardRef(FormHelperText)
