'use client'
import { forwardRef, useCallback, useMemo, useState } from 'react'
import * as React from 'react'

import classNames from 'classnames'

import useId from '~/src/hooks/useId'
import {
  type FormFieldProps,
  type FormFieldSize,
  type SizeProps,
} from '~/src/types/props'
import { getFormFieldSizeClassName } from '~/src/types/props-helpers'
import { ariaAttr } from '~/src/utils/aria'
import { createContext } from '~/src/utils/react'
import { isNil } from '~/src/utils/type'

import { Stack } from '~/src/components/Stack'

import {
  type ContainerProps,
  type ErrorMessagePropsGetter,
  type FieldPropsGetter,
  type FormControlContextValue,
  type FormControlProps,
  type GroupPropsGetter,
  type HelperTextPropsGetter,
  type LabelPropsGetter,
} from './FormControl.types'

import styles from './FormControl.module.scss'

const [FormControlContextProvider, useFormControlContext] = createContext<
  FormControlContextValue | undefined
>(undefined)

export { useFormControlContext }

export const FORM_CONTROL_TEST_ID = 'bezier-form-control'

const Container = forwardRef<HTMLElement, ContainerProps>(function Container(
  { labelPosition, children, className, ...rest },
  forwardedRef
) {
  switch (labelPosition) {
    case 'top':
      return (
        <Stack
          className={className}
          ref={forwardedRef}
          direction="vertical"
          {...rest}
        >
          {children}
        </Stack>
      )

    case 'left':
    default:
      return (
        <div
          ref={forwardedRef as React.ForwardedRef<HTMLDivElement>}
          className={classNames(styles.Grid, className)}
          {...rest}
        >
          {children}
        </div>
      )
  }
})

export const FormControl = forwardRef<HTMLElement, FormControlProps>(
  function FormControl(
    {
      children,
      id: idProp,
      labelPosition = 'top',
      size = 'm',
      hasError,
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
          styles[`position-${labelPosition}`],
          getFormFieldSizeClassName(size)
        ),
        typo: labelPosition === 'top' ? '13' : '14',
        ...ownProps,
      }),
      [fieldId, labelId, labelPosition, size]
    )

    const getFieldProps = useCallback<FieldPropsGetter>(
      (ownProps) => ({
        id: fieldId,
        size,
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
        size,
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
      <FormControlContextProvider value={contextValue}>
        <Container
          {...rest}
          ref={forwardedRef}
          labelPosition={labelPosition}
          data-testid={FORM_CONTROL_TEST_ID}
        >
          {children}
        </Container>
      </FormControlContextProvider>
    )
  }
)

export function useFormFieldProps<
  Props extends FormFieldProps & SizeProps<FormFieldSize>,
>(props?: Props) {
  const contextValue = useFormControlContext()

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
