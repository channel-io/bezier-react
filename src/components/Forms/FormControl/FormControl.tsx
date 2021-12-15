/* External dependencies */
import React, { useState, useCallback, useMemo } from 'react'

/* Internal dependencies */
import useId from 'Hooks/useId'
import { omitBezierComponentProps, pickBezierComponentProps } from 'Utils/propsUtils'
import FormControlContext from './FormControlContext'
import FormControlProps, { FieldPropsGetter, LabelPropsGetter, HelperTextPropsGetter } from './FormControl.types'
import * as Styled from './FormControl.styled'

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

  const bezierProps = pickBezierComponentProps(rest)
  const formCommonProps = omitBezierComponentProps(rest)

  const getLabelProps = useCallback<LabelPropsGetter>(ownProps => ({
    id: labelId,
    htmlFor: id,
    Wrapper: labelPosition === 'top'
      ? Styled.TopLabelWrapper
      : Styled.LeftLabelWrapper,
    ...formCommonProps,
    ...ownProps,
  }), [
    id,
    labelId,
    labelPosition,
    formCommonProps,
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
    Wrapper: labelPosition === 'top'
      ? Styled.TopHelperTextWrapper
      : Styled.LeftHelperTextWrapper,
    ...formCommonProps,
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

  return (
    <FormControlContext.Provider value={contextValue}>
      { labelPosition === 'top'
        ? (
          <Styled.Box {...rootProps}>
            { children }
          </Styled.Box>
        )
        : (
          <Styled.Grid {...rootProps}>
            { children }
          </Styled.Grid>
        ) }
    </FormControlContext.Provider>
  )
}

export default FormControl
