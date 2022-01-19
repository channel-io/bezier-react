/* External dependencies */
import React, { forwardRef, useEffect } from 'react'

/* Internal dependencies */
import useFormControlContext from 'Components/Forms/useFormControlContext'
import type FormGroupProps from './FormGroup.types'
import * as Styled from './FormGroup.styled'

function FormGroup({
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
  } = contextValue?.getGroupProps(rest) ?? { setIsRendered: undefined }

  useEffect(() => {
    setIsRendered?.(true)
    return function cleanUp() {
      setIsRendered?.(false)
    }
  }, [setIsRendered])

  return (
    <Styled.Stack
      {...ownProps}
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
