/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import useId from '~/src/hooks/useId'

import { type RadioProps } from './RadioGroup.types'

import * as Styled from './RadioGroup.styled'

function RadioImpl<Value extends string>({
  children,
  id: idProp,
  ...rest
}: RadioProps<Value>, forwardedRef: React.Ref<HTMLButtonElement>) {
  const id = useId(idProp, 'bezier-radio')

  return (
    <Styled.RadioGroupPrimitiveItem
      ref={forwardedRef}
      id={id}
      {...rest}
    >
      { children && (
        /* FIXME(@ed): Delete after applying polymorphic props */
        /* @ts-ignore */
        <Styled.Label htmlFor={id}>
          { children }
        </Styled.Label>
      ) }
    </Styled.RadioGroupPrimitiveItem>
  )
}

/**
 * `Radio` is a checkable button, known as a radio button.
 * It should be a child of `RadioGroup`.
 */
export const Radio = forwardRef(RadioImpl) as <Value extends string>(
  props: RadioProps<Value> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => ReturnType<typeof RadioImpl<Value>>
