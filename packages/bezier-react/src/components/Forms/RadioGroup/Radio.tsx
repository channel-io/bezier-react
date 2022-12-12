/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import useId from 'Hooks/useId'
import { RadioProps } from './RadioGroup.types'
import * as Styled from './RadioGroup.styled'

/**
 * `Radio` is a checkable button, known as a radio button.
 * It is must be a child of `RadioGroup`.
 */
export const Radio = forwardRef(function Radio({
  children,
  id: idProp,
  ...rest
}: RadioProps, forwardedRef: React.Ref<HTMLButtonElement>) {
  const id = useId(idProp, 'bezier-radio')

  return (
    <Styled.RadioGroupPrimitiveItem
      ref={forwardedRef}
      id={id}
      {...rest}
    >
      { /* @ts-ignore FIXME(@ed): Delete after applying polymorphic props */ }
      <Styled.Label htmlFor={id}>
        { children }
      </Styled.Label>
    </Styled.RadioGroupPrimitiveItem>
  )
})
