/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { Typography, getTypographyStyleFromInterpolation } from 'Foundation'
import { TextProps } from './Text.types'
import * as Styled from './Text.styled'

export const Text = forwardRef(function Text(
  {
    typo = Typography.Size15,
    bold = false,
    italic = false,
    color,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    marginVertical = 0,
    marginHorizontal = 0,
    marginAll = 0,
    testId,
    style,
    children,
    ...rest
  }: TextProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const { fontSize, lineHeight, letterSpacing } = getTypographyStyleFromInterpolation(typo)

  return (
    <Styled.Text
      ref={forwardedRef}
      style={{
        ...style,
        '--bezier-text-font-size': fontSize,
        '--bezier-text-line-height': lineHeight,
        '--bezier-text-letter-spacing': letterSpacing,
        '--bezier-text-font-style': italic ? 'italic' : 'normal',
        '--bezier-text-font-weight': bold ? 'bold' : 'normal',
        '--bezier-text-font-color': color ? `var(--${color})` : 'inherit',
        '--bezier-text-margin-top': `${marginTop || marginVertical || marginAll || 0}px`,
        '--bezier-text-margin-right': `${marginRight || marginHorizontal || marginAll || 0}px`,
        '--bezier-text-margin-bottom': `${marginBottom || marginVertical || marginAll || 0}px`,
        '--bezier-text-margin-left': `${marginLeft || marginHorizontal || marginAll || 0}px`,
      }}
      data-testid={testId}
      {...rest}
    >
      { children }
    </Styled.Text>
  )
})
