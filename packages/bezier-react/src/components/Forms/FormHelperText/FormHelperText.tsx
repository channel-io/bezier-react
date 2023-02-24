/* External dependencies */
import React, { forwardRef, useEffect, useMemo } from 'react'

/* Internal dependencies */
import { Typography } from 'Foundation'
import {
  isEmpty,
} from 'Utils/typeUtils'
import useFormControlContext from 'Components/Forms/useFormControlContext'
import type { BaseHelperTextProps, FormHelperTextProps, FormErrorMessageProps } from './FormHelperText.types'
import * as Styled from './FormHelperText.styled'

type ForwardedRef = React.Ref<HTMLParamElement>

export const FORM_HELPER_TEXT_TEST_ID = 'bezier-react-form-helper-text'
export const FORM_ERROR_MESSAGE_TEST_ID = 'bezier-react-form-error-message'

const BaseHelperText = forwardRef(({
  as = 'p',
  type,
  typo = Typography.Size13,
  children,
  ...rest
}: BaseHelperTextProps,
forwardedRef: ForwardedRef,
) => {
  const contextValue = useFormControlContext()
  const getProps = type === 'info'
    ? contextValue?.getHelperTextProps
    : contextValue?.getErrorMessageProps

  const {
    visible,
    setIsRendered,
    Wrapper,
    ...ownProps
  } = getProps?.(rest) ?? {
    visible: true,
    setIsRendered: undefined,
    Wrapper: React.Fragment,
    ...rest,
  }

  const shouldRendered = useMemo(() => (
    !isEmpty(children) && visible
  ), [
    visible,
    children,
  ])

  useEffect(() => {
    setIsRendered?.(shouldRendered)
  }, [
    shouldRendered,
    setIsRendered,
  ])

  useEffect(() => function cleanUp() {
    setIsRendered?.(false)
  }, [setIsRendered])

  if (!shouldRendered) { return null }

  return (
    <Wrapper>
      <Styled.HelperText
        {...ownProps}
        ref={forwardedRef}
        forwardedAs={as}
        typo={typo}
      >
        { children }
      </Styled.HelperText>
    </Wrapper>
  )
})

export const FormHelperText = forwardRef(({
  testId = FORM_HELPER_TEXT_TEST_ID,
  color = 'txt-black-dark',
  children,
  ...rest
}: FormHelperTextProps,
forwardedRef: ForwardedRef,
) => (
  <BaseHelperText
    {...rest}
    type="info"
    ref={forwardedRef}
    testId={testId}
    color={color}
  >
    { children }
  </BaseHelperText>
))

export const FormErrorMessage = forwardRef(({
  testId = FORM_ERROR_MESSAGE_TEST_ID,
  color = 'bgtxt-orange-normal',
  children,
  ...rest
}: FormErrorMessageProps,
forwardedRef: ForwardedRef,
) => (
  <BaseHelperText
    {...rest}
    aria-live="polite"
    type="error"
    ref={forwardedRef}
    testId={testId}
    color={color}
  >
    { children }
  </BaseHelperText>
))
