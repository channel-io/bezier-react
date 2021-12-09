/* External dependencies */
import React, { useState, useMemo, createContext } from 'react'

/* Internal dependencies */
import FormControlProps, { FormControlContextValue } from './FormControl.types'
import * as Styled from './FormControl.styled'

export const FormControlContext = createContext<FormControlContextValue | undefined>(undefined)

function FormControl({
  id,
  testId,
  hasError,
  disabled,
  readOnly,
  labelPosition = 'top',
  children,
  ...rest
}: FormControlProps) {
  const [hasHelperText, setHasHelperText] = useState(false)

  const contextValue = useMemo<FormControlContextValue>(() => ({
    hasError,
    disabled,
    readOnly,
    labelPosition,
    fieldId: id,
    labelId: `${id}-label`,
    helperTextId: `${id}-help-text`,
    hasHelperText,
    setHasHelperText,
  }), [
    hasError,
    disabled,
    readOnly,
    labelPosition,
    id,
    hasHelperText,
  ])

  return (
    <Styled.Wrapper
      {...rest}
      role="group"
    >
      <FormControlContext.Provider value={contextValue}>
        { children }
      </FormControlContext.Provider>
    </Styled.Wrapper>
  )
}

export default FormControl
