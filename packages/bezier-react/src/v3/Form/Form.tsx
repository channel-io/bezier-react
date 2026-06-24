'use client'

import {
  Children,
  Fragment,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'

import classNames from 'classnames'

import useId from '~/src/hooks/useId'
import type { FormFieldProps as BaseFormFieldProps } from '~/src/types/props'
import { ariaAttr } from '~/src/utils/aria'
import { createContext } from '~/src/utils/react'
import { isNil } from '~/src/utils/type'
import { Divider } from '~/src/v3/Divider'

import type {
  ErrorMessagePropsGetter,
  FieldPropsGetter,
  FormFieldContainerProps,
  FormFieldContextValue,
  FormFieldProps,
  FormFieldSize,
  FormProps,
  GroupPropsGetter,
  HelperTextPropsGetter,
  LabelPropsGetter,
} from './Form.types'

import styles from './Form.module.scss'

const [FormFieldContextProvider, useFormFieldContext] = createContext<
  FormFieldContextValue | undefined
>(undefined)

export { useFormFieldContext }

function normalizeFormFieldSize(size?: string): FormFieldSize {
  return size === 'l' ? 'l' : 'm'
}

/**
 * `Form` renders a native `form` element with Bezier field layout.
 */
export const Form = forwardRef<HTMLFormElement, FormProps>(function Form(
  { children, className, ...rest },
  forwardedRef
) {
  if (!children) {
    return null
  }

  return (
    <form
      ref={forwardedRef}
      className={classNames(styles.Form, className)}
      {...rest}
    >
      {Children.map(children, (child, index) => (
        <Fragment key={index}>
          {index > 0 && (
            <Divider
              className={styles.FormDivider}
              withoutSideIndent
            />
          )}
          {child}
        </Fragment>
      ))}
    </form>
  )
})

const FormFieldContainer = forwardRef<HTMLDivElement, FormFieldContainerProps>(
  function FormFieldContainer(
    { labelPosition, children, className, ...rest },
    forwardedRef
  ) {
    return (
      <div
        ref={forwardedRef}
        className={classNames(
          styles.FormField,
          labelPosition === 'left' ? styles.LabelLeft : styles.LabelTop,
          className
        )}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

/**
 * `FormField` connects a form field with its label, helper text, error message, and grouped controls.
 * It does not render a native `form` element.
 * @example
 *
 * ```tsx
 * <FormField>
 *   <FormLabel>Email</FormLabel>
 *   <TextInput />
 *   <FormHelperText>Enter your work email.</FormHelperText>
 *   <FormErrorMessage>Email is required.</FormErrorMessage>
 * </FormField>
 * ```
 */
export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  function FormField(
    {
      children,
      id: idProp,
      labelPosition = 'top',
      size = 'm',
      hasError = false,
      required,
      readOnly,
      disabled,
      ...rest
    },
    forwardedRef
  ) {
    const [groupNode, setGroupNode] = useState<HTMLElement | null>(null)
    const [helperTextNode, setHelperTextNode] = useState<HTMLElement | null>(
      null
    )
    const [errorMessageNode, setErrorMessageNode] =
      useState<HTMLElement | null>(null)

    const id = useId(idProp, 'field')
    const groupId = `${id}-group`
    const labelId = `${id}-label`
    const helperTextId = `${id}-help-text`
    const errorMessageId = `${id}-error-message`
    const fieldId = groupNode ? undefined : id
    const normalizedSize = normalizeFormFieldSize(size)

    const describerId = useMemo(() => {
      if (errorMessageNode) {
        return errorMessageId
      }
      if (helperTextNode) {
        return helperTextId
      }
      return undefined
    }, [errorMessageNode, helperTextNode, errorMessageId, helperTextId])

    const getGroupProps = useCallback<GroupPropsGetter>(
      (ownProps) => ({
        id: groupId,
        'aria-labelledby': labelId,
        'aria-describedby': describerId,
        ref: setGroupNode,
        ...ownProps,
      }),
      [groupId, labelId, describerId]
    )

    const getLabelProps = useCallback<LabelPropsGetter>(
      (ownProps) => ({
        id: labelId,
        htmlFor: fieldId,
        className: classNames(
          styles.FormLabelWrapper,
          labelPosition === 'left' && styles['position-left']
        ),
        ...ownProps,
      }),
      [fieldId, labelId, labelPosition]
    )

    const getFieldProps = useCallback<FieldPropsGetter>(
      (ownProps) => ({
        id: fieldId,
        size: normalizedSize,
        'aria-describedby': groupNode ? undefined : describerId,
        hasError,
        required,
        readOnly,
        disabled,
        ...ownProps,
      }),
      [
        fieldId,
        describerId,
        normalizedSize,
        hasError,
        required,
        readOnly,
        disabled,
        groupNode,
      ]
    )

    const getHelperTextProps = useCallback<HelperTextPropsGetter>(
      (ownProps) => ({
        id: helperTextId,
        visible: isNil(hasError) || !hasError,
        ref: setHelperTextNode,
        className: classNames(
          styles.FormHelperTextWrapper,
          labelPosition === 'left' && styles['position-left']
        ),
        ...ownProps,
      }),
      [helperTextId, labelPosition, hasError]
    )

    const getErrorMessageProps = useCallback<ErrorMessagePropsGetter>(
      (ownProps) => ({
        id: errorMessageId,
        visible: isNil(hasError) || hasError,
        ref: setErrorMessageNode,
        className: classNames(
          styles.FormHelperTextWrapper,
          labelPosition === 'left' && styles['position-left']
        ),
        ...ownProps,
      }),
      [errorMessageId, labelPosition, hasError]
    )

    const contextValue = useMemo(
      () => ({
        id,
        labelId,
        helperTextId,
        errorMessageId,
        getGroupProps,
        getLabelProps,
        getFieldProps,
        getHelperTextProps,
        getErrorMessageProps,
        size: normalizedSize,
        hasError,
        required,
        readOnly,
        disabled,
      }),
      [
        id,
        labelId,
        helperTextId,
        errorMessageId,
        getGroupProps,
        getLabelProps,
        getFieldProps,
        getHelperTextProps,
        getErrorMessageProps,
        normalizedSize,
        hasError,
        required,
        readOnly,
        disabled,
      ]
    )

    if (!children) {
      return null
    }

    return (
      <FormFieldContextProvider value={contextValue}>
        <FormFieldContainer
          {...rest}
          ref={forwardedRef}
          labelPosition={labelPosition}
        >
          {children}
        </FormFieldContainer>
      </FormFieldContextProvider>
    )
  }
)

export function useFormFieldProps<
  Props extends BaseFormFieldProps & { size?: FormFieldSize },
>(props?: Props) {
  const contextValue = useFormFieldContext()

  const formFieldProps = useMemo(() => {
    const mergedProps = contextValue?.getFieldProps(props) ?? { ...props }

    const {
      disabled = false,
      readOnly = false,
      required = false,
      hasError = false,
      size = undefined,
      ...rest
    } = mergedProps

    return {
      ...rest,
      'aria-disabled': ariaAttr(disabled),
      'aria-invalid': ariaAttr(hasError),
      'aria-required': ariaAttr(required),
      'aria-readonly': ariaAttr(readOnly),
      size,
      disabled,
      hasError,
      required,
      readOnly,
    }
  }, [props, contextValue])

  return formFieldProps as typeof formFieldProps & Props
}
