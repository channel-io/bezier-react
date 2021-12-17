/* External dependencies */
import React, { useState, useCallback, useMemo } from 'react'

/* Internal dependencies */
import useId from 'Hooks/useId'
import { omitBezierComponentProps, pickBezierComponentProps } from 'Utils/propsUtils'
import FormControlContext from './FormControlContext'
import FormControlProps, { FieldPropsGetter, LabelPropsGetter, HelperTextPropsGetter } from './FormControl.types'
import * as Styled from './FormControl.styled'

// TODO: 테스트 작성
function FormControl({
  id: idProps,
  testId,
  labelPosition = 'top',
  children,
  ...rest
}: FormControlProps) {
  const [hasHelperText, setHasHelperText] = useState(false)

  const uuid = useId()
  const id = idProps ?? `field-${uuid}`
  const labelId = `${id}-label`
  const helperTextId = `${id}-help-text`

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
    'aria-describedby': hasHelperText
      ? helperTextId
      : undefined,
    Wrapper: Styled.FieldWrapper,
    ...formCommonProps,
    ...ownProps,
  }), [
    id,
    helperTextId,
    hasHelperText,
    formCommonProps,
  ])

  const getHelperTextProps = useCallback<HelperTextPropsGetter>(ownProps => ({
    id: helperTextId,
    setHasHelperText,
    hasError: formCommonProps?.hasError,
    Wrapper: labelPosition === 'top'
      ? Styled.TopHelperTextWrapper
      : Styled.LeftHelperTextWrapper,
    ...ownProps,
  }), [
    helperTextId,
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
    getLabelProps,
    getFieldProps,
    getHelperTextProps,
    ...formCommonProps,
  }), [
    id,
    labelId,
    helperTextId,
    getLabelProps,
    getFieldProps,
    getHelperTextProps,
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
