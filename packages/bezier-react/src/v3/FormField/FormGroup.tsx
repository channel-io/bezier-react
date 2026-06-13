'use client'

import { forwardRef } from 'react'

import useMergeRefs from '~/src/hooks/useMergeRefs'
import { noop } from '~/src/utils/function'
import { BaseStack } from '~/src/v3/BaseStack/BaseStack'

import { useFormFieldContext } from './FormField'
import { type FormGroupProps } from './FormGroup.types'

export const FORM_GROUP_TEST_ID = 'bezier-v3-form-group'

/**
 * `FormGroup` groups multiple controls under one `FormLabel`.
 */
export const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  function FormGroup(
    { spacing = 6, direction = 'vertical', role = 'group', children, ...rest },
    forwardedRef
  ) {
    const contextValue = useFormFieldContext()

    const { ref, ...ownProps } = contextValue?.getGroupProps(rest) ?? {
      ref: noop,
      ...rest,
    }

    const mergedRef = useMergeRefs(ref, forwardedRef)

    return (
      <BaseStack
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
      </BaseStack>
    )
  }
)
