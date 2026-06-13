'use client'

import { forwardRef } from 'react'

import { ErrorTriangleFilledIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { noop } from '~/src/utils/function'
import { isEmpty } from '~/src/utils/type'
import { Icon } from '~/src/v3/Icon'
import { Text } from '~/src/v3/Text'

import { useFormFieldContext } from './FormField'
import type {
  BaseHelperTextProps,
  FormErrorMessageProps,
  FormHelperTextProps,
} from './FormHelperText.types'

import styles from './FormHelperText.module.scss'

const FORM_HELPER_TEXT_TEST_ID = 'bezier-v3-form-helper-text'
const FORM_ERROR_MESSAGE_TEST_ID = 'bezier-v3-form-error-message'

const BaseHelperText = forwardRef<HTMLSpanElement, BaseHelperTextProps>(
  function BaseHelperText(
    {
      type,
      typo = '13',
      color = type === 'error' ? 'text-accent-orange' : 'text-neutral-lighter',
      children,
      className,
      ...rest
    },
    forwardedRef
  ) {
    const contextValue = useFormFieldContext()
    const getProps =
      type === 'info'
        ? contextValue?.getHelperTextProps
        : contextValue?.getErrorMessageProps

    const {
      visible,
      ref,
      className: formFieldClassName,
      ...ownProps
    } = getProps?.(rest) ?? {
      visible: true,
      ref: noop,
      className: undefined,
      ...rest,
    }

    const mergedRef = useMergeRefs(ref, forwardedRef)

    if (isEmpty(children) || !visible) {
      return null
    }

    return (
      <Text
        ref={mergedRef}
        as="p"
        className={classNames(
          styles.FormHelperText,
          type === 'error' && styles.FormErrorMessage,
          formFieldClassName,
          className
        )}
        typo={typo}
        color={color}
        align="left"
        {...ownProps}
      >
        {type === 'error' && (
          <Icon
            className={styles.ErrorIcon}
            source={ErrorTriangleFilledIcon}
            size="16"
            color="icon-accent-orange"
          />
        )}
        {children}
      </Text>
    )
  }
)

/**
 * `FormHelperText` describes a field inside `FormField`.
 */
export const FormHelperText = forwardRef<
  HTMLSpanElement,
  FormHelperTextProps
>(function FormHelperText(props, forwardedRef) {
  return (
    <BaseHelperText
      type="info"
      ref={forwardedRef}
      data-testid={FORM_HELPER_TEXT_TEST_ID}
      {...props}
    />
  )
})

/**
 * `FormErrorMessage` shows a field error inside `FormField`.
 */
export const FormErrorMessage = forwardRef<
  HTMLSpanElement,
  FormErrorMessageProps
>(function FormErrorMessage(props, forwardedRef) {
  return (
    <BaseHelperText
      aria-live="polite"
      type="error"
      ref={forwardedRef}
      data-testid={FORM_ERROR_MESSAGE_TEST_ID}
      {...props}
    />
  )
})
