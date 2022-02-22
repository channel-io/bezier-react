/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { BezierComponentProps, SizeProps, ColorProps } from 'Types/ComponentProps'

export enum IconSize {
  XL = 44,
  L = 34,
  Normal = 24,
  S = 20,
  XS = 16,
  XXS = 12,
  XXXS = 10,
}

type MouseEventHandler = React.MouseEventHandler<SVGSVGElement>

interface IconOptions {
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  onClick?: MouseEventHandler
  onMouseDown?: MouseEventHandler
}

export default interface IconProps extends
  Omit<BezierComponentProps, 'as'>,
  SizeProps<IconSize>,
  ColorProps,
  IconOptions {}
