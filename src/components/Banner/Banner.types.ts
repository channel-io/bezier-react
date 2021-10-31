/* Internal dependencies */
import type {
  InjectedInterpolation,
  UIComponentProps,
} from '../..'
import type { SemanticNames } from '../../foundation'
import type { IconName } from '../Icon/generated'

export enum BannerColorVariant {
  Default = 'default',
  Blue = 'blue',
  Cobalt = 'cobalt',
  Green = 'green',
  Orange = 'orange',
  Red = 'red',
  Alt = 'alt',
}

export interface BannerProps extends UIComponentProps {
  className?: string
  interpolation?: InjectedInterpolation

  colorVariant?: BannerColorVariant
  icon: IconName | null
  iconColor?: SemanticNames
  text: string

  hasLink?: boolean
  linkText?: string
  linkTo?: string

  dismissible?: boolean
  onDismiss?: () => void
}
