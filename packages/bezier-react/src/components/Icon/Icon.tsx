import React, {
  forwardRef,
  memo,
} from 'react'

import {
  type IconProps,
  IconSize,
} from './Icon.types'

import Styled from './Icon.styled'

export const ICON_TEST_ID = 'bezier-react-icon'

export const Icon = memo(forwardRef<SVGSVGElement, IconProps>(function Icon({
  source,
  className,
  color,
  testId = ICON_TEST_ID,
  size = IconSize.Normal,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,
  ...rest
}, forwardedRef) {
  return (
    <Styled
      ref={forwardedRef}
      as={source}
      className={className}
      data-testid={testId}
      color={color}
      width={size}
      height={size}
      margintop={marginTop}
      marginright={marginRight}
      marginbottom={marginBottom}
      marginleft={marginLeft}
      {...rest}
    />
  )
}))
