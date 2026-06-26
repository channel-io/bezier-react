import type { JSX, MouseEventHandler, ReactNode } from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  BezierComponentProps,
  ContentProps,
  VariantProps,
} from '~/src/types/props'

export type BannerVariant =
  | 'default'
  | 'blue'
  | 'cobalt'
  | 'green'
  | 'orange'
  | 'red'

export type RenderLinkFunc = (props: {
  content: ReactNode
  linkTo?: string
}) => JSX.Element

interface BannerOwnProps {
  /**
   * Icon to display at the top left of the banner.
   *
   * If `null` is given, no icon will be displayed.
   */
  leadingIcon: BezierIcon | null
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
  actionIcon?: BezierIcon
  /**
   * Accessible name for the action icon button.
   * @default 'Close'
   */
  actionAriaLabel?: string
  /**
   * Handler to be executed when the action icon button is clicked.
   */
  onClickAction?: MouseEventHandler<HTMLButtonElement>
}

export interface BannerProps
  extends Omit<BezierComponentProps<'div'>, keyof ContentProps>,
    ContentProps,
    VariantProps<BannerVariant>,
    BannerOwnProps {}
