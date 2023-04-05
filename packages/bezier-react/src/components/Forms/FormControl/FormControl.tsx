/* External dependencies */
import React, {
  useState,
  useCallback,
  useMemo,
} from 'react'

/* Internal dependencies */
import { Typography } from '~/src/foundation'
import useId from '~/src/hooks/useId'
import { isNil } from '~/src/utils/typeUtils'
import {
  omitBezierComponentProps,
  pickBezierComponentProps,
} from '~/src/utils/propsUtils'
// eslint-disable-next-line no-restricted-imports
import FormFieldSize from '../FormFieldSize'
import FormControlContext from './FormControlContext'
import {
  type GroupPropsGetter,
  type FieldPropsGetter,
  type LabelPropsGetter,
  type HelperTextPropsGetter,
  type ErrorMessagePropsGetter,
} from './FormControl.types'
import type FormControlProps from './FormControl.types'
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
