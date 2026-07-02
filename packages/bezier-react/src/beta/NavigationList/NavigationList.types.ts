import type { MouseEventHandler, ReactNode } from 'react'

import type { BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  DisableProps,
} from '~/src/types/props'

export type NavigationListContent = BezierIcon | ReactNode

interface NavigationContentProps extends ContentProps<ReactNode> {
  /**
   * Primary visible content of the navigation item.
   */
  content: ReactNode
}

interface NavigationItemOwnProps
  extends NavigationContentProps,
    DisableProps,
    ActivatableProps {
  /**
   * Icon to be shown before the content.
   */
  leadingContent?: BezierIcon
  /**
   * Content to be shown in the right content area.
   */
  trailingContent?: NavigationListContent
}

interface NavigationGroupOwnProps
  extends NavigationContentProps,
    DisableProps {
  /**
   * Icon to be shown before the content.
   */
  leadingContent?: BezierIcon
  /**
   * Content to be shown in the right content area.
   */
  trailingContent?: NavigationListContent
}

type NavigationItemBaseProps =
  | (Omit<
      BezierComponentProps<'a'>,
      keyof NavigationItemOwnProps | 'children' | 'onClick'
    > & {
      href: string
      onClick?: never
    })
  | (Omit<
      BezierComponentProps<'button'>,
      keyof NavigationItemOwnProps | 'children'
    > & {
      href?: never
      onClick: MouseEventHandler<HTMLButtonElement>
    })

export interface NavigationListProps
  extends Omit<BezierComponentProps<'nav'>, 'children'>,
    ChildrenProps {}

/**
 * Leaf navigation item.
 *
 * `href` renders a native anchor, and `onClick` renders a native button. Use
 * `NavigationGroup` for items that own child navigation disclosure.
 */
export type NavigationItemProps = NavigationItemOwnProps & NavigationItemBaseProps

export interface NavigationGroupProps
  extends Omit<
      BezierComponentProps<'button'>,
      | keyof NavigationGroupOwnProps
      | 'children'
      | 'aria-controls'
      | 'aria-expanded'
    >,
    NavigationGroupOwnProps,
    ChildrenProps {
  /**
   * The controlled open state.
   */
  open?: boolean
  /**
   * The open state when initially rendered.
   * @default false
   */
  defaultOpen?: boolean
  /**
   * Callback function to be called when the open state changes.
   */
  onOpenChange?: (open: boolean) => void
}
