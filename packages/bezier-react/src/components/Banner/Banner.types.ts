import type { JSX, ReactNode } from 'react'

import { type BezierIcon, type IconName } from '@channel.io/bezier-icons'

import type {
  AdditionalColorProps,
  BezierComponentProps,
  ContentProps,
  VariantProps,
} from '~/src/types/props'

import type { ButtonProps } from '~/src/components/Button'

export type BannerVariant =
  | 'default'
  | 'blue'
  | 'cobalt'
  | 'green'
  | 'orange'
  | 'red'
  | 'alt'

export type RenderLinkFunc = (props: {
  content: ReactNode
  linkTo?: string
}) => JSX.Element

interface BannerOwnProps {
  /**
   * The name of icon to display at the top left of the banner.
   *
   * If `null` is given, no icon will be displayed.
   */
  icon: BezierIcon | IconName | null

  /**
   * Whether to display link at the end of banner content.
   * @default false
   */
  hasLink?: boolean

  /**
   * The link content.
   *
   * This will be displayed as bold, underline text at the end of content.
   *
   * `hasLink` props should be given `true` to enable the link.
   */
  linkText?: string

  /**
   * The location (href) of the link.
   *
   * By default, the link will be opened in a new tab. (`target="_blank"`)
   * To specify a different behavior, use `renderLink` prop to render the link as a custom component.
   *
   * `hasLink` props should be given `true` to enable the link.
   */
  linkTo?: string

  /**
   * Specifies how to render the link.
   * @default
   * renders link as an `<a>` tag with `target="_blank"` attribute.
   */
  renderLink?: RenderLinkFunc

  /**
   * Specifies which icon button to display at the top right of the banner.
   */
  actionIcon?: BezierIcon | IconName

  /**
   * Handler to be executed when the action icon button is clicked.
   */
  onClickAction?: ButtonProps['onClick']
}

export interface BannerProps
  extends Omit<BezierComponentProps<'div'>, keyof ContentProps>,
    ContentProps,
    VariantProps<BannerVariant>,
    AdditionalColorProps<'icon'>,
    BannerOwnProps {}
