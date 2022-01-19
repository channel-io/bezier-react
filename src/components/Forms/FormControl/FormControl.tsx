/* External dependencies */
import React, { useState, useCallback, useMemo } from 'react'
import { isNil } from 'lodash-es'

/* Internal dependencies */
import useId from 'Hooks/useId'
import { omitBezierComponentProps, pickBezierComponentProps } from 'Utils/propsUtils'
import { TextFieldSize } from 'Components/Forms/Inputs/TextField'
import FormControlContext from './FormControlContext'
import FormControlProps, {
  GroupPropsGetter,
  FieldPropsGetter,
  LabelPropsGetter,
  HelperTextPropsGetter,
  ErrorMessagePropsGetter,
} from './FormControl.types'
import * as Styled from './FormControl.styled'

// TODO: 테스트 작성
const FORM_CONTROL_TEXT_TEST_ID = 'bezier-react-form-control'

function FormControl({
  id: idProp,
  testId = FORM_CONTROL_TEXT_TEST_ID,
  labelPosition = 'top',
  leftLabelWrapperHeight = TextFieldSize.M,
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

  const fieldLabelId = useMemo(() => {
    if (hasErrorMessage) { return errorMessageId }
    if (hasHelperText) { return helperTextId }
    return undefined
  }, [
    hasErrorMessage,
    hasHelperText,
    errorMessageId,
    helperTextId,
  ])

  const labelHtmlFor = useMemo(() => (
    hasMultipleFields ? undefined : id
  ), [
    id,
    hasMultipleFields,
  ])

  const bezierProps = useMemo(() => pickBezierComponentProps(rest), [rest])
  const formCommonProps = useMemo(() => omitBezierComponentProps(rest), [rest])

  const getGroupProps = useCallback<GroupPropsGetter>(ownProps => ({
    id: groupId,
    'aria-labelledby': labelId,
    'aria-describedby': fieldLabelId,
    setIsRendered: setHasMultipleFields,
    ...ownProps,
  }), [
    groupId,
    labelId,
    fieldLabelId,
    setHasMultipleFields,
  ])

  const getLabelProps = useCallback<LabelPropsGetter>(ownProps => ({
    id: labelId,
    htmlFor: labelHtmlFor,
    Wrapper: labelPosition === 'top'
      ? Styled.TopLabelWrapper
      : (({ children: labelElement }) => (
        <Styled.LeftLabelWrapper height={leftLabelWrapperHeight}>
          { labelElement }
        </Styled.LeftLabelWrapper>
      )),
    ...ownProps,
  }), [
    labelHtmlFor,
    labelId,
    labelPosition,
    leftLabelWrapperHeight,
  ])

  const getFieldProps = useCallback<FieldPropsGetter>(ownProps => ({
    id,
    'aria-describedby': fieldLabelId,
    ...formCommonProps,
    ...ownProps,
  }), [
    id,
    fieldLabelId,
    formCommonProps,
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
