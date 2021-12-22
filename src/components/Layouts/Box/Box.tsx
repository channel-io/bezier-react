/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { BoxProps } from './Box.types'
import * as Styled from './Box.styled'

const BOX_TEST_ID = 'bezier-react-box'

function Box({
  testId = BOX_TEST_ID,
  as,
  children,
  ...rest
}: BoxProps) {
  return (
    <Styled.Box
      {...rest}
      forwardedAs={as}
      data-testid={testId}
    >
      { children }
    </Styled.Box>
  )
}

export default Box
