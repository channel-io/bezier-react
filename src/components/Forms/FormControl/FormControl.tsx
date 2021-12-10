/* External dependencies */
import React, { useMemo, useCallback } from 'react'
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

  const LabelComponent = useMemo(() => (
    <FormLabel
      id={`${id}-label`}
      htmlFor={id}
      help={help}
    >
      { label }
    </FormLabel>
  ), [
    id,
    help,
    label,
  ])

  const HelperTextComponent = useMemo(() => (
    <FormHelperText
      id={helperTextId}
      hasError={hasError}
    >
      { displayedHelperText }
    </FormHelperText>
  ), [
    helperTextId,
    hasError,
    displayedHelperText,
  ])

  switch (labelPosition) {
    case 'top': return (
      <Styled.Box role="group" {...rest}>
        { !isEmpty(label) && (
          <Styled.TopLabelWrapper>
            { LabelComponent }
          </Styled.TopLabelWrapper>
        ) }

        { children && (
          React.Children.map(children, renderField)
        ) }

        { hasHelperText && (
          <Styled.HelperTextWrapper>
            { HelperTextComponent }
          </Styled.HelperTextWrapper>
        ) }
      </Styled.Box>
    )

    case 'left': return (
      <Styled.Flex role="group" {...rest}>
        { !isEmpty(label) && (
          <Styled.LeftLabelWrapper>
            { LabelComponent }
          </Styled.LeftLabelWrapper>
        ) }

        <div>
          { children && (
            React.Children.map(children, renderField)
          ) }

          { hasHelperText && (
            <Styled.HelperTextWrapper>
              { HelperTextComponent }
            </Styled.HelperTextWrapper>
          ) }
        </div>
      </Styled.Flex>
    )
  }
}

export default FormControl
