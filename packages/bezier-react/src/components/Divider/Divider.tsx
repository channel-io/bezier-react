import React, { forwardRef } from 'react'

import * as SeparatorPrimitive from '@radix-ui/react-separator'

import type DividerProps from './Divider.types'

import * as Styled from './Divider.styled'

export const DIVIDER_TEST_ID = 'bezier-react-divider'

const Divider = forwardRef((
  {
    testId = DIVIDER_TEST_ID,
    orientation = 'horizontal',
    decorative,
    withoutSideIndent = false,
    withoutParallelIndent = false,
    withoutIndent = false,
    ...rest
  }: DividerProps,
  forwardedRef: React.Ref<HTMLElement>,
) => (
  <SeparatorPrimitive.Root
    asChild
    orientation={orientation}
    decorative={decorative}
  >
    <Styled.Divider
      ref={forwardedRef}
      data-testid={testId}
      orientation={orientation}
      decorative={decorative}
      withoutSideIndent={withoutSideIndent}
      withoutParallelIndent={withoutParallelIndent}
      withoutIndent={withoutIndent}
      {...rest}
    />
  </SeparatorPrimitive.Root>
))

export default Divider
