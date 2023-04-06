/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { Typography } from '~/src/foundation'

import { noop } from '~/src/utils/functionUtils'

import type TextProps from './Text.types'

import TextView from './Text.styled'

export const TEXT_TEST_ID = 'bezier-react-text'

function Text(
  {
    as,
    testId = TEXT_TEST_ID,
    bold = false,
    italic = false,
    color,
    typo = Typography.Size15,
    truncated = false,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    marginVertical = 0,
    marginHorizontal = 0,
    marginAll = 0,
    style,
    id,
    className,
    children,
    onClick = noop,
    /** To receive various HTMLElement attributes */
    ...rest
  }: TextProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  return (
    <TextView
      {...rest}
      as={as}
      id={id}
      style={style}
      ref={forwardedRef}
      className={className}
      bold={bold}
      italic={italic}
      color={color}
      typo={typo}
      truncated={truncated}
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

export default forwardRef(Text)
