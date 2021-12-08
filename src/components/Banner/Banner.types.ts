/* External dependencies */
import type { ReactNode } from 'react'

/* Internal dependencies */
import type { SemanticNames } from 'Foundation'
import type { BezierComponentProps } from 'Types/ComponentProps'
import type { IconName } from 'Components/Icon'

export enum BannerColorVariant {
  Default = 'default',
  Blue = 'blue',
  Cobalt = 'cobalt',
  Green = 'green',
  Orange = 'orange',
  Red = 'red',
  Alt = 'alt',
}

export type RenderLinkFunc = (props: {
  content: ReactNode
  linkTo?: string
}) => JSX.Element

export interface BannerProps extends BezierComponentProps {
  colorVariant?: BannerColorVariant
  icon: IconName | null
  iconColor?: SemanticNames
  content: string | ReactNode

  hasLink?: boolean
  linkText?: string
  linkTo?: string
  renderLink?: RenderLinkFunc

  dismissible?: boolean
  onDismiss?: () => void
}
