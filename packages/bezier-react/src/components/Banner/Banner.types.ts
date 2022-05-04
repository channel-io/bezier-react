/* External dependencies */
import type { ReactNode } from 'react'

/* Internal dependencies */
import type { BezierComponentProps, VariantProps, ContentProps, AdditionalColorProps } from 'Types/ComponentProps'
import type { IconName } from 'Components/Icon'

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
