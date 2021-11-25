/* External dependencies */
import React from 'react'

/* Internal dependencies */
import DividerProps from './Divider.types'
import * as Styled from './Divider.styled'

const DIVIDER_TEST_ID = 'bezier-react-divider'

function Divider({
  orientation = 'horizontal',
  withoutSideIndent = false,
  testId = DIVIDER_TEST_ID,
}: DividerProps) {
  const DividerComponent = orientation === 'horizontal'
    ? Styled.HorizontalDivider
    : Styled.VerticalDivider

  return (
    <DividerComponent
      data-testid={testId}
      aria-orientation={orientation}
      withoutSideIndent={withoutSideIndent}
    />
  )
}

export default Divider
