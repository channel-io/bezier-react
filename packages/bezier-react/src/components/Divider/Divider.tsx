/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import DividerProps from './Divider.types'
import * as Styled from './Divider.styled'

export const DIVIDER_TEST_ID = 'bezier-react-divider'

function Divider({
  as,
  testId = DIVIDER_TEST_ID,
  orientation = 'horizontal',
  withoutSideIndent = false,
  ...rest
}: DividerProps,
forwardedRef: React.Ref<HTMLHRElement>,
) {
  const DividerComponent = orientation === 'horizontal'
    ? Styled.HorizontalDivider
    : Styled.VerticalDivider

  return (
    <DividerComponent
      {...rest}
      forwardedAs={as}
      ref={forwardedRef}
      data-testid={testId}
      aria-orientation={orientation}
      withoutSideIndent={withoutSideIndent}
    />
  )
}

export default forwardRef(Divider)
