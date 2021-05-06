/* External dependencies */
import { MouseEventHandler } from 'react'

/* Internal dependencies */
import { SemanticNames } from '../../foundation'
import { StylableComponentProps } from '../../types/ComponentProps'
import { IconName } from './generated'

export enum IconSize {
  L = 34,
  Normal = 24,
  S = 20,
  XS = 16,
  XXS = 12,
}

export default interface IconProps extends StylableComponentProps {
  name: IconName
  color?: SemanticNames
  size?: IconSize
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  onClick?: MouseEventHandler<SVGSVGElement>
}
