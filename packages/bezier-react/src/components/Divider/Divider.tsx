/* External dependencies */
import React, { forwardRef } from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

/* Internal dependencies */
import DividerProps from './Divider.types'
import * as Styled from './Divider.styled'

export const DIVIDER_TEST_ID = 'bezier-react-divider'

const Divider = forwardRef((
  {
    testId = DIVIDER_TEST_ID,
    orientation = 'horizontal',
    decorative,
    withoutSideIndent = false,
    withoutParallelIndent = false,
    ...rest
  }: DividerProps,
  forwardedRef: React.Ref<HTMLElement>,
) => (
  <SeparatorPrimitive.Root asChild>
    <Styled.Divider
      ref={forwardedRef}
      data-testid={testId}
      orientation={orientation}
      decorative={decorative}
      withoutSideIndent={withoutSideIndent}
      withoutParallelIndent={withoutParallelIndent}
      {...rest}
    />
  </SeparatorPrimitive.Root>
))

export default Divider
