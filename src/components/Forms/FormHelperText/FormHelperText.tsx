/* External dependencies */
import React, { forwardRef, useCallback, useMemo } from 'react'
import { isEmpty, isNil } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import useMergeRefs from 'Hooks/useMergeRefs'
import useFormControlContext from 'Components/Forms/useFormControlContext'
import type { BaseHelperTextProps, FormHelperTextProps, FormErrorMessageProps } from './FormHelperText.types'
import * as Styled from './FormHelperText.styled'

type ForwardedRef = React.Ref<HTMLParamElement>

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

  const {
    setHasHelperText,
    hasError,
    Wrapper,
    ...ownProps
  } = contextValue?.getHelperTextProps(rest) ?? {
    ...rest,
    setHasHelperText: undefined,
    hasError: undefined,
    Wrapper: React.Fragment,
  }

  const setHasHelperTextRef = useCallback((node: HTMLElement | null) => {
    if (!node) { return }
    setHasHelperText?.(true)
  }, [setHasHelperText])

  const mergedRef = useMergeRefs(setHasHelperTextRef, forwardedRef)

  const shouldRendered = useMemo(() => {
    if (isEmpty(children)) { return false }
    if (
      isNil(hasError)
      || (type === 'info' && !hasError)
      || (type === 'error' && hasError)
    ) { return true }
    return false
  }, [
    type,
    hasError,
    children,
  ])

  if (!shouldRendered) { return null }

  return (
    <Wrapper>
      <Styled.HelperText
        {...ownProps}
        ref={mergedRef}
        forwardedAs={as}
        typo={typo}
      >
        { children }
      </Styled.HelperText>
    </Wrapper>
  )
})

export const FORM_HELPER_TEXT_TEST_ID = 'bezier-react-form-helper-text'
export const FORM_ERROR_MESSAGE_TEST_ID = 'bezier-react-form-error-message'

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
