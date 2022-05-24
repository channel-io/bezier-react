/* External dependencies */
import type { ReactNode } from 'react'
import type { IconName } from '@channel.io/bezier-react-icons'

/* Internal dependencies */
import type { BezierComponentProps, VariantProps, ContentProps, AdditionalColorProps } from 'Types/ComponentProps'

export enum BannerVariant {
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

interface BannerOptions {
  icon: IconName | null

  hasLink?: boolean
  linkText?: string
  linkTo?: string
  renderLink?: RenderLinkFunc

  dismissible?: boolean
  onDismiss?: () => void
}

export interface BannerProps extends
  BezierComponentProps,
  VariantProps<BannerVariant>,
  ContentProps<string | ReactNode>,
  AdditionalColorProps<'icon'>,
  BannerOptions {}
