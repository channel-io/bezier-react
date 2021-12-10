/* External dependencies */
import React, { useMemo } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { FormLabel } from 'Components/Forms/FormLabel'
import { FormHelperText } from 'Components/Forms/FormHelperText'
import FormControlProps from './FormControl.types'
import * as Styled from './FormControl.styled'

function FormControl({
  id,
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

  return (
    <>
      { labelPosition === 'top'
        ? (
          <Styled.Wrapper
            {...rest}
            role="group"
          >
            { !isEmpty(label) && (
              <Styled.LabelWrapper>
                { LabelComponent }
              </Styled.LabelWrapper>
            ) }
            { React.Children.map(children, child => (
              React.isValidElement(child) && React.cloneElement(child, {
                id,
                hasError,
                disabled,
                readOnly,
                'aria-describedby': hasHelperText ? helperTextId : undefined,
              })
            )) }
            { hasHelperText && (
              <Styled.HelperTextWrapper>
                { HelperTextComponent }
              </Styled.HelperTextWrapper>
            ) }
          </Styled.Wrapper>
        )
        : (
          // TODO
          <div />
        ) }
    </>
  )
}

export default FormControl
