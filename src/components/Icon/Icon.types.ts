/* External dependencies */
import { MouseEventHandler } from 'react'

/* Internal dependencies */
import { SemanticNames } from 'Foundation'
import { BezierComponentProps } from 'Types/ComponentProps'
import { IconName } from './generated'

export enum IconSize {
  XL = 44,
  L = 34,
  Normal = 24,
  S = 20,
  XS = 16,
  XXS = 12,
  XXXS = 10,
}

export default interface IconProps extends Omit<BezierComponentProps, 'as'> {
  name: IconName
  color?: SemanticNames
  size?: IconSize
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  onClick?: MouseEventHandler<SVGSVGElement>
  onMouseDown?: MouseEventHandler<SVGSVGElement>
}
