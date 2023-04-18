import React, { forwardRef } from 'react'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { noop } from '~/src/utils/functionUtils'

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
    ref,
    ...ownProps
  } = contextValue?.getGroupProps(rest) ?? {
    ref: noop,
    ...rest,
  }

  const mergedRef = useMergeRefs(ref, forwardedRef)

  return (
    <Styled.Stack
      {...ownProps}
      data-testid={testId}
      ref={mergedRef}
      justify="start"
      align="stretch"
      spacing={spacing}
      direction={direction}
      role={role}
    >
      { children }
    </Styled.Stack>
  )
}

export default forwardRef(FormGroup)
