'use client'

import { forwardRef } from 'react'


import { BaseStack } from '~/src/beta/BaseStack/BaseStack'
import useMergeRefs from '~/src/hooks/useMergeRefs'
import { noop } from '~/src/utils/function'

import { useFormFieldContext } from './Form'
import { type FormGroupProps } from './Form.types'


export const FORM_GROUP_TEST_ID = 'bezier-beta-form-group'

/**
 * `FormGroup` groups multiple controls under one `FormLabel`.
 */
export const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  function FormGroup(
    { spacing, direction = 'vertical', role = 'group', children, ...rest },
    forwardedRef
  ) {
    const contextValue = useFormFieldContext()
    const defaultSpacing = direction === 'horizontal' ? 20 : 0
    const resolvedSpacing = spacing ?? defaultSpacing

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
        spacing={resolvedSpacing}
        direction={direction}
        role={role}
        {...ownProps}
      >
        {children}
      </BaseStack>
    )
  }
)
