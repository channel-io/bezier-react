import React, { forwardRef } from 'react'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { noop } from '~/src/utils/function'

import { useFormControlContext } from '~/src/components/FormControl'
import { Stack } from '~/src/components/Stack'

import { type FormGroupProps } from './FormGroup.types'

const FORM_GROUP_TEST_ID = 'bezier-form-group'

export const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  function FormGroup(
    { spacing = 6, direction = 'vertical', role = 'group', children, ...rest },
    forwardedRef
  ) {
    const contextValue = useFormControlContext()

    const { ref, ...ownProps } = contextValue?.getGroupProps(rest) ?? {
      ref: noop,
      ...rest,
    }

    const mergedRef = useMergeRefs(ref, forwardedRef)

    return (
      <Stack
        data-testid={FORM_GROUP_TEST_ID}
        ref={mergedRef}
        wrap
        justify="start"
        align="stretch"
        spacing={spacing}
        direction={direction}
        role={role}
        {...ownProps}
      >
        {children}
      </Stack>
    )
  }
)
