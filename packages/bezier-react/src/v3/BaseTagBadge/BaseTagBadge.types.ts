import {
  type BezierComponentProps,
  type ChildrenProps,
  type SizeProps,
  type VariantProps,
} from '~/src/types/props'
import { type TextProps } from '~/src/v3/Text'

export type BaseTagBadgeSize = 'xs' | 's' | 'm' | 'l'

export type BaseTagBadgeVariant =
  | 'default'
  | 'neutral-light'
  | 'neutral-dark'
  | 'blue'
  | 'cobalt'
  | 'teal'
  | 'green'
  | 'olive'
  | 'pink'
  | 'navy'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'purple'

export interface BaseTagBadgeProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    Required<SizeProps<BaseTagBadgeSize>>,
    Required<VariantProps<BaseTagBadgeVariant>> {}

export interface BaseTagBadgeTextProps
  extends Omit<TextProps, 'typo'>,
    Required<SizeProps<BaseTagBadgeSize>> {}
