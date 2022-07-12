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
  withoutSideIndent = false,
  withoutParallelIndent = false,
  ...rest
}: DividerProps,
forwardedRef: Ref<ElementRef<typeof SeparatorPrimitive.Root>>,
) {
  return (
    <SeparatorPrimitive.Root asChild>
      <Styled.Wrapper
        ref={forwardedRef}
        data-testid={testId}
        orientation={orientation}
        decorative={decorative}
        withoutSideIndent={withoutSideIndent}
        withoutParallelIndent={withoutParallelIndent}
        {...rest}
      >
        <Styled.Divider />
      </Styled.Wrapper>
    </SeparatorPrimitive.Root>
  )
}

export default forwardRef(Divider)
