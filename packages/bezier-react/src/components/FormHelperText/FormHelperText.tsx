'use client'

import { forwardRef } from 'react'

import classNames from 'classnames'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { noop } from '~/src/utils/function'
import { isEmpty } from '~/src/utils/type'

import { useFormControlContext } from '~/src/components/FormControl'
import { Text } from '~/src/components/Text'

import type {
  BaseHelperTextProps,
  FormErrorMessageProps,
  FormHelperTextProps,
} from './FormHelperText.types'

import styles from './FormHelperText.module.scss'

/**
 * @deprecated
 */
const FORM_HELPER_TEXT_TEST_ID = 'bezier-form-helper-text'

/**
 * @deprecated
 */
const FORM_ERROR_MESSAGE_TEST_ID = 'bezier-form-error-message'

const BaseHelperText = forwardRef<HTMLSpanElement, BaseHelperTextProps>(
  function BaseHelperText(props, forwardedRef) {
    const { type, typo = '13', children, className, ...rest } = props

    const contextValue = useFormControlContext()
    const getProps =
      type === 'info'
        ? contextValue?.getHelperTextProps
        : contextValue?.getErrorMessageProps

    const {
      visible,
      ref,
      className: formControlClassName,
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
          formControlClassName,
          className
        )}
        typo={typo}
        align="left"
        {...ownProps}
      >
        {children}
      </Text>
    )
  }
)

/**
 * `FormHelperText` is a component to show the description of the input element.
 * `FormControl` component can handle its layout by `position` props.
 * @example
 * ```tsx
 * <FormControl position="top">
 *   <FormLabel>
 *     Password
 *   </FormLabel>
 *   <TextField />
 *   <FormHelperText>
 *     Please use at least 6 characters
 *   </FormHelperText>
 * </FormControl>
 * ```
 */
export const FormHelperText = forwardRef<HTMLSpanElement, FormHelperTextProps>(
  function FormHelperText(props, forwardedRef) {
    const { color = 'txt-black-dark', children, ...rest } = props

    return (
      <BaseHelperText
        type="info"
        ref={forwardedRef}
        color={color}
        data-testid={FORM_HELPER_TEXT_TEST_ID}
        {...rest}
      >
        {children}
      </BaseHelperText>
    )
  }
)

/**
 * `FormErrorMessage` is a component to show error message when form values are invalid.
 * It should be used with `FormControl` component.
 * @example
 * ```tsx
 * <FormControl>
 *   <FormLabel>
 *     Password
 *   </FormLabel>
 *   <TextField />
 *   <FormErrorMessage>
 *     Password should be at least 6 characters
 *   </FormErrorMessage>
 * </FormControl>
 * ```
 */
export const FormErrorMessage = forwardRef<
  HTMLSpanElement,
  FormErrorMessageProps
>(function FormErrorMessage(props, forwardedRef) {
  const { color = 'bgtxt-orange-normal', children, ...rest } = props

  return (
    <BaseHelperText
      aria-live="polite"
      type="error"
      ref={forwardedRef}
      color={color}
      data-testid={FORM_ERROR_MESSAGE_TEST_ID}
      {...rest}
    >
      {children}
    </BaseHelperText>
  )
})
