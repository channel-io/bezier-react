/* External dependencies */
import type { ReactNode } from 'react'

/* Internal dependencies */
import type { BezierComponentProps, VariantProps, ContentProps, AdditionalColorProps } from '~/src/types/ComponentProps'
import type { IconName } from '~/src/components/Icon'
import type { ButtonProps } from '~/src/components/Button'

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
  /**
   * The name of icon to display at the top left of the banner.
   *
   * If `null` is given, no icon will be displayed.
   */
  icon: IconName | null

  /**
   * Whether to display link at the end of banner content.
   *
   * @default false
   */
  hasLink?: boolean

  /**
   * The link content.
   *
   * This will be displayed as bold, underline text at the end of content.
   *
   * @remarks
   * `hasLink` props should be given `true` to enable the link.
   */
  linkText?: string

  /**
   * The location (href) of the link.
   *
   * By default, the link will be opened in a new tab. (`target="_blank"`)
   * To specify a different behavior, use `renderLink` prop to render the link as a custom component.
   *
   * @remarks
   * `hasLink` props should be given `true` to enable the link.
   */
  linkTo?: string

  /**
   * Specifies how to render the link.
   *
   * @default
   * renders link as an `<a>` tag with `target="_blank"` attribute.
   */
  renderLink?: RenderLinkFunc

  /**
   * Specifies which icon button to display at the top right of the banner.
   *
   * FIXME(@ed): 새로운 아이콘 방식으로 변경
   */
  actionIcon?: IconName

  /**
   * Handler to be executed when the action icon button is clicked.
   */
  onClickAction?: ButtonProps['onClick']
}

export interface BannerProps extends
  BezierComponentProps,
  VariantProps<BannerVariant>,
  ContentProps<string | ReactNode>,
  AdditionalColorProps<'icon'>,
  BannerOptions {}
