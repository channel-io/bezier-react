import type {
  MouseEventHandler,
  ReactElement,
  ReactNode,
  RefAttributes,
} from 'react'

import type { BezierIcon } from '@channel.io/bezier-icons'

import type { TextProps } from '~/src/beta/Text'
import type {
  ActivatableProps,
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  LeadingTrailingContentProps,
  LinkProps,
  SizeProps,
  VariantProps,
} from '~/src/types/props'

export type BaseItemSize = 'm'

export type BaseItemVariant = 'neutral' | 'destructive'

/**
 * Visual foundation for row-like components.
 *
 * `BaseItem` can render a semantic root through `as`, but it does not provide
 * menu, option, or button behavior by itself. Purpose-built components such as
 * `DropdownMenuItem` should own roles, keyboard interaction, and selection
 * behavior.
 */
interface BaseItemOwnProps
  extends ChildrenProps,
    DisableProps,
    ActivatableProps,
    SizeProps<BaseItemSize>,
    VariantProps<BaseItemVariant>,
    LeadingTrailingContentProps<BezierIcon | ReactNode> {
  /**
   * Additional content below the main content.
   */
  description?: ReactNode
  /**
   * Maximum number of lines for string children.
   *
   * When omitted, `BaseItem` does not apply text truncation. Components using
   * `BaseItem` should own their own text overflow policy.
   */
  contentMaxLines?: Extract<TextProps['truncated'], number>
  /**
   * Whether to apply interactive row surface styles such as cursor and hover.
   * Behavior such as click handling and keyboard interaction should be owned by
   * the purpose-built component using `BaseItem`.
   * @default false
   */
  interactive?: boolean
}

type BaseItemOmitKeys = keyof BaseItemOwnProps | 'as'

type BaseItemDefaultDivProps = BaseItemOwnProps &
  Omit<BezierComponentProps<'div'>, BaseItemOmitKeys | 'onClick'> & {
    as?: undefined
    href?: never
    onClick?: never
    type?: never
  }

type BaseItemExplicitDivProps = BaseItemOwnProps &
  Omit<BezierComponentProps<'div'>, BaseItemOmitKeys> & {
    as?: 'div'
    href?: never
    type?: never
  }

export type BaseItemDivProps =
  | BaseItemDefaultDivProps
  | BaseItemExplicitDivProps

export type BaseItemButtonProps = BaseItemOwnProps &
  Omit<BezierComponentProps<'button'>, BaseItemOmitKeys | 'onClick'> & {
    as?: 'button'
    href?: never
    onClick: MouseEventHandler<HTMLButtonElement>
  }

export type BaseItemAnchorProps = BaseItemOwnProps &
  Omit<BezierComponentProps<'a'>, BaseItemOmitKeys> & {
    as?: 'a'
    type?: never
  } & Required<LinkProps>

export type BaseItemProps =
  | BaseItemDivProps
  | BaseItemButtonProps
  | BaseItemAnchorProps

export type BaseItemComponent = {
  (
    props: BaseItemAnchorProps & RefAttributes<HTMLAnchorElement>
  ): ReactElement | null
  (
    props: BaseItemButtonProps & RefAttributes<HTMLButtonElement>
  ): ReactElement | null
  (props: BaseItemDivProps & RefAttributes<HTMLDivElement>): ReactElement | null
}
