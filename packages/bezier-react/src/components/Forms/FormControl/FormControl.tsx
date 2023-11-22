import React, {
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'

import { Typography } from '~/src/foundation'

import useId from '~/src/hooks/useId'
import {
  cssVarName,
  px,
} from '~/src/utils/css'
import {
  omitBezierComponentProps,
  pickBezierComponentProps,
} from '~/src/utils/propsUtils'
import { isNil } from '~/src/utils/typeUtils'

import { AlphaStack } from '~/src/components/AlphaStack'

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

const cv = cssVarName('form-control')

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
        <AlphaStack
          ref={forwardedRef}
          direction="vertical"
          testId={testId}
          {...rest}
        >
          { children }
        </AlphaStack>
      )

    case 'left':
    default:
      return (
        <Styled.Grid
          ref={forwardedRef}
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

  const bezierProps = useMemo(() => pickBezierComponentProps(rest), [rest])
  const formCommonProps = useMemo(() => omitBezierComponentProps(rest), [rest])

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
    typo: labelPosition === 'top' ? Typography.Size13 : Typography.Size14,
    Wrapper: labelPosition === 'top'
      ? Styled.TopLabelWrapper
      : Styled.LeftLabelWrapper,
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
    Wrapper: labelPosition === 'top'
      ? Styled.TopHelperTextWrapper
      : Styled.LeftHelperTextWrapper,
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
    Wrapper: labelPosition === 'top'
      ? Styled.TopHelperTextWrapper
      : Styled.LeftHelperTextWrapper,
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
    [cv('left-label-wrapper-height')]: px(leftLabelWrapperHeight),
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
