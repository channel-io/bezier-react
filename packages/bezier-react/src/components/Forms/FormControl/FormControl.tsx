import React, {
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'

import useId from '~/src/hooks/useId'
import { splitByBezierComponentProps } from '~/src/utils/props'
import { px } from '~/src/utils/style'
import { isNil } from '~/src/utils/type'

import { Stack } from '~/src/components/Stack'

// eslint-disable-next-line no-restricted-imports
import FormFieldSize from '../FormFieldSize'

import {
  type ContainerProps,
  type ErrorMessagePropsGetter,
  type FieldPropsGetter,
  type FormControlProps,
  type GroupPropsGetter,
  type HelperTextPropsGetter,
  type LabelPropsGetter,
} from './FormControl.types'
import { FormControlContextProvider } from './FormControlContext'

import * as Styled from './FormControl.styled'

export const FORM_CONTROL_TEST_ID = 'bezier-react-form-control'

const Container = forwardRef<HTMLElement, ContainerProps>(function Container({
  labelPosition,
  children,
  testId,
  ...rest
}, forwardedRef) {
  switch (labelPosition) {
    case 'top':
      return (
        <Stack
          ref={forwardedRef}
          direction="vertical"
          testId={testId}
          {...rest}
        >
          { children }
        </Stack>
      )

    case 'left':
    default:
      return (
        <Styled.Grid
          ref={forwardedRef as React.ForwardedRef<HTMLDivElement>}
          data-testid={testId}
          {...rest}
        >
          { children }
        </Styled.Grid>
      )
  }
})

export const FormControl = forwardRef<HTMLElement, FormControlProps>(function FormControl({
  id: idProp,
  testId = FORM_CONTROL_TEST_ID,
  labelPosition = 'top',
  leftLabelWrapperHeight = FormFieldSize.M,
  style,
  children,
  ...rest
}, forwardedRef) {
  const [groupNode, setGroupNode] = useState<HTMLElement | null>(null)
  const [helperTextNode, setHelperTextNode] = useState<HTMLElement | null>(null)
  const [errorMessageNode, setErrorMessageNode] = useState<HTMLElement | null>(null)

  const id = useId(idProp, 'field')
  const groupId = `${id}-group`
  const labelId = `${id}-label`
  const helperTextId = `${id}-help-text`
  const errorMessageId = `${id}-error-message`

  const fieldId = groupNode ? undefined : id

  const describerId = useMemo(() => {
    if (errorMessageNode) { return errorMessageId }
    if (helperTextNode) { return helperTextId }
    return undefined
  }, [
    errorMessageNode,
    helperTextNode,
    errorMessageId,
    helperTextId,
  ])

  const [bezierProps, formCommonProps] = useMemo(() => splitByBezierComponentProps(rest), [rest])

  const getGroupProps = useCallback<GroupPropsGetter>(ownProps => ({
    id: groupId,
    'aria-labelledby': labelId,
    'aria-describedby': describerId,
    ref: setGroupNode,
    ...ownProps,
  }), [
    groupId,
    labelId,
    describerId,
  ])

  const getLabelProps = useCallback<LabelPropsGetter>(ownProps => ({
    id: labelId,
    htmlFor: fieldId,
    labelPosition,
    typo: labelPosition === 'top' ? '13' : '14',
    ...ownProps,
  }), [
    fieldId,
    labelId,
    labelPosition,
  ])

  const getFieldProps = useCallback<FieldPropsGetter>(ownProps => ({
    id: fieldId,
    'aria-describedby': groupNode ? undefined : describerId,
    ...formCommonProps,
    ...ownProps,
  }), [
    fieldId,
    describerId,
    formCommonProps,
    groupNode,
  ])

  const getHelperTextProps = useCallback<HelperTextPropsGetter>(ownProps => ({
    id: helperTextId,
    visible: isNil(formCommonProps?.hasError) || !formCommonProps?.hasError,
    ref: setHelperTextNode,
    labelPosition,
    ...ownProps,
  }), [
    helperTextId,
    labelPosition,
    formCommonProps,
  ])

  const getErrorMessageProps = useCallback<ErrorMessagePropsGetter>(ownProps => ({
    id: errorMessageId,
    visible: isNil(formCommonProps?.hasError) || formCommonProps?.hasError,
    ref: setErrorMessageNode,
    labelPosition,
    ...ownProps,
  }), [
    errorMessageId,
    labelPosition,
    formCommonProps,
  ])

  const contextValue = useMemo(() => ({
    id,
    labelId,
    helperTextId,
    errorMessageId,
    getGroupProps,
    getLabelProps,
    getFieldProps,
    getHelperTextProps,
    getErrorMessageProps,
    ...formCommonProps,
  }), [
    id,
    labelId,
    helperTextId,
    errorMessageId,
    getGroupProps,
    getLabelProps,
    getFieldProps,
    getHelperTextProps,
    getErrorMessageProps,
    formCommonProps,
  ])

  const containerStyle = useMemo(() => ({
    ...style,
    '--b-form-control-left-label-wrapper-height': px(leftLabelWrapperHeight),
  } as React.CSSProperties), [
    style,
    leftLabelWrapperHeight,
  ])

  if (!children) { return null }

  return (
    <FormControlContextProvider value={contextValue}>
      <Container
        {...bezierProps}
        ref={forwardedRef}
        style={containerStyle}
        testId={testId}
        labelPosition={labelPosition}
      >
        { children }
      </Container>
    </FormControlContextProvider>
  )
})
