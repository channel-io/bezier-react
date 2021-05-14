/* External dependencies */
import React from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { Typography } from '../../foundation'
import TextProps from './Text.types'
import TextView from './Text.styled'

export const TEXT_TEST_ID = 'bezier-react-text'

function Text({
  as,
  testId = TEXT_TEST_ID,
  bold = false,
  italic = false,
  color,
  typo = Typography.Size15,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginVertical = 0,
  marginHorizontal = 0,
  marginAll = 0,
  style,
  className,
  children,
  onClick = noop,
}: TextProps) {
  return (
    <TextView
      as={as}
      style={style}
      className={className}
      bold={bold}
      italic={italic}
      color={color}
      typo={typo}
      data-testid={testId}
      margintop={marginTop || marginVertical || marginAll}
      marginright={marginRight || marginHorizontal || marginAll}
      marginbottom={marginBottom || marginVertical || marginAll}
      marginleft={marginLeft || marginHorizontal || marginAll}
      onClick={onClick}
    >
      { children }
    </TextView>
  )
}

export default Text
