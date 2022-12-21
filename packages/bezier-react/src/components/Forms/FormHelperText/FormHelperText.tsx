/* External dependencies */
import React, { forwardRef, useEffect, useMemo } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
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
    color={color}
  >
    { children }
  </BaseHelperText>
))

export const FormErrorMessage = forwardRef(({
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
    color={color}
  >
    { children }
  </BaseHelperText>
))
