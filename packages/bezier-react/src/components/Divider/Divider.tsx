/* External dependencies */
import React, {
  forwardRef,
  type Ref,
  type ElementRef,
} from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

/* Internal dependencies */
import DividerProps from './Divider.types'
import * as Styled from './Divider.styled'

export const DIVIDER_TEST_ID = 'bezier-react-divider'

function Divider({
  testId = DIVIDER_TEST_ID,
  orientation = 'horizontal',
  decorative,
  ...rest
}: DividerProps,
forwardedRef: Ref<ElementRef<typeof SeparatorPrimitive.Root>>,
) {
  return (
    <SeparatorPrimitive.Root asChild>
      <Styled.Divider
        ref={forwardedRef}
        data-testid={testId}
        orientation={orientation}
        decorative={decorative}
        {...rest}
      />
    </SeparatorPrimitive.Root>
  )
}

export default forwardRef(Divider)
