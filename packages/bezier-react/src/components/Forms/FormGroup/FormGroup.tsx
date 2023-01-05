/* External dependencies */
import React, { forwardRef, useEffect } from 'react'

/* Internal dependencies */
import { StackItem } from '~/src/components/Stack'
import useFormControlContext from '~/src/components/Forms/useFormControlContext'
import type FormGroupProps from './FormGroup.types'
import * as Styled from './FormGroup.styled'

const FORM_GROUP_TEST_ID = 'bezier-react-form-group'

function FormGroup({
  testId = FORM_GROUP_TEST_ID,
  spacing = 6,
  direction = 'vertical',
  role = 'group',
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
      justify="start"
      align="stretch"
      spacing={spacing}
      direction={direction}
      role={role}
    >
      { React.Children.map(children, (child, index) => (
        <StackItem key={(child as React.ReactElement)?.key ?? index}>
          { child }
        </StackItem>
      )) }
    </Styled.Stack>
  )
}

export default forwardRef(FormGroup)
