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
  decorative,
  ...rest
}: DividerProps,
forwardedRef: React.Ref<typeof Styled.Divider>,
) {
  return (
    <Styled.Divider
      {...rest}
      forwardedAs={as}
      ref={forwardedRef}
      data-testid={testId}
      orientation={orientation}
      decorative={decorative}
    />
  )
}

export default forwardRef(Divider)
