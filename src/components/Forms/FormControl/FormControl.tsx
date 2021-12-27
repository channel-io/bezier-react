/* External dependencies */
import React, { useState, useCallback, useMemo } from 'react'
import { isNil } from 'lodash-es'

/* Internal dependencies */
import useId from 'Hooks/useId'
import { omitBezierComponentProps, pickBezierComponentProps } from 'Utils/propsUtils'
import FormControlContext from './FormControlContext'
import FormControlProps, {
  FieldPropsGetter,
  LabelPropsGetter,
  HelperTextPropsGetter,
  ErrorMessagePropsGetter,
} from './FormControl.types'
import * as Styled from './FormControl.styled'

// TODO: 테스트 작성
const FORM_CONTROL_TEXT_TEST_ID = 'bezier-react-form-control'

function FormControl({
  id: idProps,
  testId = FORM_CONTROL_TEXT_TEST_ID,
  labelPosition = 'top',
  children,
  ...rest
}: FormControlProps) {
  const [hasHelperText, setHasHelperText] = useState(false)
  const [hasErrorMessage, setHasErrorMessage] = useState(false)

  const uuid = useId()
  const id = idProps ?? `field-${uuid}`
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

  const bezierProps = useMemo(() => pickBezierComponentProps(rest), [rest])
  const formCommonProps = useMemo(() => omitBezierComponentProps(rest), [rest])

  const getLabelProps = useCallback<LabelPropsGetter>(ownProps => ({
    id: labelId,
    htmlFor: id,
    Wrapper: labelPosition === 'top'
      ? Styled.TopLabelWrapper
      : Styled.LeftLabelWrapper,
    ...ownProps,
  }), [
    id,
    labelId,
    labelPosition,
  ])

  const getFieldProps = useCallback<FieldPropsGetter>(ownProps => ({
    id,
    'aria-describedby': fieldLabelId,
    Wrapper: Styled.FieldWrapper,
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

  const rootProps = useMemo(() => ({
    role: 'group',
    ...bezierProps,
  }), [bezierProps])

  const contextValue = useMemo(() => ({
    id,
    labelId,
    helperTextId,
    errorMessageId,
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
        {...rootProps}
      >
        { children }
      </Container>
    </FormControlContext.Provider>
  )
}

export default FormControl
