import React, { forwardRef } from 'react'

import classNames from 'classnames'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { noop } from '~/src/utils/function'
import { isEmpty } from '~/src/utils/type'

import { useFormControlContext } from '~/src/components/Forms/FormControl'
import { Text } from '~/src/components/Text'

import type {
  BaseHelperTextProps,
  FormErrorMessageProps,
  FormHelperTextProps,
} from './FormHelperText.types'

import styles from './FormHelperText.module.scss'

type ForwardedRef = React.Ref<HTMLParamElement>

export const FORM_HELPER_TEXT_TEST_ID = 'bezier-react-form-helper-text'
export const FORM_ERROR_MESSAGE_TEST_ID = 'bezier-react-form-error-message'

const BaseHelperText = forwardRef(({
  type,
  typo = '13',
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
    ref,
    labelPosition,
    ...ownProps
  } = getProps?.(rest) ?? {
    visible: true,
    ref: noop,
    labelPosition: 'top',
    ...rest,
  }

  const mergedRef = useMergeRefs(ref, forwardedRef)

  if (isEmpty(children) || !visible) { return null }

  return (
    <div
      className={classNames(
        styles.HelperTextWrapper,
        styles[`${labelPosition}-position`],
      )}
    >
      <Text
        {...ownProps}
        ref={mergedRef}
        className={styles.HelperText}
        typo={typo}
        align="left"
      >
        { children }
      </Text>
    </div>
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
