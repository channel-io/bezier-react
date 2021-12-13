/* External dependencies */
import React, { useMemo, useCallback, HTMLAttributes } from 'react'
import { isEmpty } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { FormLabel } from 'Components/Forms/FormLabel'
import { FormHelperText } from 'Components/Forms/FormHelperText'
import { FormComponentProps } from 'Components/Forms/Form.types'
import FormControlProps from './FormControl.types'
import * as Styled from './FormControl.styled'

function FormControl({
  id: idProps,
  testId,
  hasError,
  disabled,
  readOnly,
  label,
  labelPosition = 'top',
  help,
  helperText,
  errorMessage,
  children,
  ...rest
}: FormControlProps) {
  const id = useMemo(() => idProps ?? uuid(), [idProps])
  const helperTextId = `${id}-help-text`

  const { hasHelperText, displayedHelperText } = useMemo(() => (
    hasError
      ? {
        hasHelperText: !isEmpty(errorMessage),
        displayedHelperText: errorMessage,
      }
      : {
        hasHelperText: !isEmpty(helperText),
        displayedHelperText: helperText,
      }
  ), [
    hasError,
    helperText,
    errorMessage,
  ])

  const renderField = useCallback((field: React.ReactElement<FormComponentProps>) => (
    React.cloneElement(field, {
      id: field.props.id ?? id,
      hasError: field.props.hasError ?? hasError,
      disabled: field.props.disabled ?? disabled,
      readOnly: field.props.readOnly ?? readOnly,
      'aria-describedby': field.props['aria-describedby'] ?? hasHelperText
        ? helperTextId
        : undefined,
    })
  ), [
    id,
    hasError,
    disabled,
    readOnly,
    hasHelperText,
    helperTextId,
  ])

  const renderFormControlComponent = useCallback((
    Wrapper: React.FunctionComponent<HTMLAttributes<HTMLDivElement>>,
    LabelWrapper: React.FunctionComponent,
    HelperTextWrapper: React.FunctionComponent,
  ) => (
    <Wrapper role="group" {...rest}>
      { !isEmpty(label) && (
        <LabelWrapper>
          <FormLabel
            id={`${id}-label`}
            htmlFor={id}
            help={help}
          >
            { label }
          </FormLabel>
        </LabelWrapper>
      ) }

      <div role="group">
        { children && (
          React.Children.map(children, renderField)
        ) }
      </div>

      { hasHelperText && (
        <HelperTextWrapper>
          <FormHelperText
            id={helperTextId}
            hasError={hasError}
          >
            { displayedHelperText }
          </FormHelperText>
        </HelperTextWrapper>
      ) }
    </Wrapper>
  ), [
    children,
    rest,
    id,
    help,
    label,
    hasError,
    hasHelperText,
    helperTextId,
    displayedHelperText,
    renderField,
  ])

  return (
    <>
      { labelPosition === 'top'
        ? renderFormControlComponent(
          Styled.Box,
          Styled.TopLabelWrapper,
          Styled.TopHelperTextWrapper,
        )
        : renderFormControlComponent(
          Styled.Grid,
          Styled.LeftLabelWrapper,
          Styled.LeftHelperTextWrapper,
        ) }
    </>
  )
}

export default FormControl
