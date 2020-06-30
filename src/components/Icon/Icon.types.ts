/* Internal dependencies */
import { StylableComponentProps } from '../../types/ComponentProps'
import { IconName } from './generated'

export enum IconSize {
  L = 34,
  Normal = 24,
  S = 20,
  XS = 16,
  XXS = 12,
}

export interface IconStyledProps {
  color?: string
  marginTop: number
  marginRight: number
  marginBottom: number
  marginLeft: number
}

export default interface IconProps extends StylableComponentProps {
  name: IconName
  color?: string
  size?: IconSize
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
}
