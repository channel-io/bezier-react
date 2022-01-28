/* External dependencies */
import React, { forwardRef, useEffect } from 'react'

/* Internal dependencies */
import useFormControlContext from 'Components/Forms/useFormControlContext'
import type FormGroupProps from './FormGroup.types'
import * as Styled from './FormGroup.styled'

export const FORM_GROUP_TEST_ID = 'bezier-react-form-group'

function FormGroup({
  testId = FORM_GROUP_TEST_ID,
  gap = 6,
  direction = 'column',
  children,
  ...rest
}: FormGroupProps,
forwardedRef: React.Ref<HTMLDivElement>,
) {
  const contextValue = useFormControlContext()

  const {
    setIsRendered,
    ...ownProps
  } = contextValue?.getGroupProps(rest) ?? {
    setIsRendered: undefined,
    ...rest,
  }

  useEffect(() => {
    setIsRendered?.(true)
    return function cleanUp() {
      setIsRendered?.(false)
    }
  }, [setIsRendered])

  return (
    <Styled.Stack
      {...ownProps}
      data-testid={testId}
      ref={forwardedRef}
      gap={gap}
      direction={direction}
      role="group"
    >
      { children }
    </Styled.Stack>
  )
}

export default forwardRef(FormGroup)
