/* External dependencies */
import React, { useState, useCallback, useMemo } from 'react'

/* Internal dependencies */
import { Typography } from 'Foundation'
import {
  isNil,
} from 'Utils/typeUtils'
import useId from 'Hooks/useId'
import { omitBezierComponentProps, pickBezierComponentProps } from 'Utils/propsUtils'
// eslint-disable-next-line no-restricted-imports
import FormFieldSize from '../FormFieldSize'
import FormControlContext from './FormControlContext'
import FormControlProps, {
  GroupPropsGetter,
  FieldPropsGetter,
  LabelPropsGetter,
  HelperTextPropsGetter,
  ErrorMessagePropsGetter,
} from './FormControl.types'
import * as Styled from './FormControl.styled'

export const FORM_CONTROL_TEST_ID = 'bezier-react-form-control'

function FormControl({
  id: idProp,
  testId = FORM_CONTROL_TEST_ID,
  labelPosition = 'top',
  leftLabelWrapperHeight = FormFieldSize.M,
  children,
  ...rest
}: FormControlProps) {
  const [hasMultipleFields, setHasMultipleFields] = useState(false)
  const [hasHelperText, setHasHelperText] = useState(false)
  const [hasErrorMessage, setHasErrorMessage] = useState(false)

  const id = useId(idProp, 'field')
  const groupId = `${id}-group`
  const labelId = `${id}-label`
  const helperTextId = `${id}-help-text`
  const errorMessageId = `${id}-error-message`

  const fieldId = hasMultipleFields ? undefined : id

  const describerId = useMemo(() => {
    if (hasErrorMessage) { return errorMessageId }
    if (hasHelperText) { return helperTextId }
    return undefined
  }, [
    hasErrorMessage,
    hasHelperText,
    errorMessageId,
    helperTextId,
  ])

  const bezierProps = useMemo(() => pickBezierComponentProps(rest), [rest])
  const formCommonProps = useMemo(() => omitBezierComponentProps(rest), [rest])

  const getGroupProps = useCallback<GroupPropsGetter>(ownProps => ({
    id: groupId,
    'aria-labelledby': labelId,
    'aria-describedby': describerId,
    setIsRendered: setHasMultipleFields,
    ...ownProps,
  }), [
    groupId,
    labelId,
    describerId,
    setHasMultipleFields,
  ])

  const getLabelProps = useCallback<LabelPropsGetter>(ownProps => ({
    id: labelId,
    htmlFor: fieldId,
    typo: labelPosition === 'left' ? Typography.Size14 : Typography.Size13,
    Wrapper: labelPosition === 'top'
      ? Styled.TopLabelWrapper
      : (({ children: labelElement }) => (
        <Styled.LeftLabelWrapper height={leftLabelWrapperHeight}>
          { labelElement }
        </Styled.LeftLabelWrapper>
      )),
    ...ownProps,
  }), [
    fieldId,
    labelId,
    labelPosition,
    leftLabelWrapperHeight,
  ])

  const getFieldProps = useCallback<FieldPropsGetter>(ownProps => ({
    id: fieldId,
    'aria-describedby': hasMultipleFields ? undefined : describerId,
    ...formCommonProps,
    ...ownProps,
  }), [
    fieldId,
    describerId,
    formCommonProps,
    hasMultipleFields,
  ])

  const getHelperTextProps = useCallback<HelperTextPropsGetter>(ownProps => ({
    id: helperTextId,
    visible: isNil(formCommonProps?.hasError) || !formCommonProps?.hasError,
    setIsRendered: setHasHelperText,
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
    setIsRendered: setHasErrorMessage,
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

  if (!children) { return null }

  const Container = {
    top: Styled.Box,
    left: Styled.Grid,
  }[labelPosition]

  return (
    <FormControlContext.Provider value={contextValue}>
      <Container
        data-testid={testId}
        {...bezierProps}
      >
        { children }
      </Container>
    </FormControlContext.Provider>
  )
}

export default FormControl
