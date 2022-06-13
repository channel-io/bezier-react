/* External dependencies */
import type { ReactNode } from 'react'

/* Internal dependencies */
import type { BezierComponentProps, VariantProps, ContentProps, AdditionalColorProps } from 'Types/ComponentProps'
import type { IconName } from 'Components/Icon'
import type { ButtonProps } from 'Components/Button'

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

  /**
   * FIXME(@ed): 새로운 아이콘 방식으로 변경
   */
  actionIcon?: IconName
  onClickAction?: ButtonProps['onClick']
}

export interface BannerProps extends
  BezierComponentProps,
  VariantProps<BannerVariant>,
  ContentProps<string | ReactNode>,
  AdditionalColorProps<'icon'>,
  BannerOptions {}
