import type { MouseEventHandler, ReactNode } from 'react'

import type { BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  BezierComponentProps,
  ChildrenProps,
  ContentProps,
  DisableProps,
  LeadingTrailingContentProps,
  MarginProps,
} from '~/src/types/props'

export type SectionItemSideContent = BezierIcon | ReactNode

export type SectionLabelSideContent = BezierIcon | ReactNode

interface SectionLabelOwnProps
  extends ContentProps<ReactNode>,
    LeadingTrailingContentProps<SectionLabelSideContent> {
  /**
   * Primary visible content of the section label.
   */
  content: ReactNode
  /**
   * Tooltip content rendered next to the section label.
   */
  help?: ReactNode
}

interface SectionItemContentProps extends ContentProps<ReactNode> {
  /**
   * Primary visible content of the item.
   *
   * Prefer a plain string when possible. ReactNode is supported for inline rich
   * text, but consumers should verify that the item still has a useful
   * accessible name when it becomes a button or link.
   */
  content: ReactNode
}

interface SectionItemOwnProps
  extends SectionItemContentProps,
    DisableProps,
    ActivatableProps,
    LeadingTrailingContentProps<SectionItemSideContent> {
  /**
   * Content below the main content.
   */
  description?: ReactNode
}

export interface SectionProps
  extends Omit<BezierComponentProps<'section'>, 'children'>,
    ChildrenProps,
    MarginProps {}

export interface SectionLabelProps
  extends Omit<
      BezierComponentProps<'div'>,
      keyof SectionLabelOwnProps | 'children'
    >,
    SectionLabelOwnProps {}

type SectionItemBaseProps =
  | (Omit<
      BezierComponentProps<'div'>,
      keyof SectionItemOwnProps | 'children' | 'onClick'
    > & {
      href?: never
      onClick?: never
    })
  | (Omit<
      BezierComponentProps<'button'>,
      keyof SectionItemOwnProps | 'children'
    > & {
      href?: never
      onClick: MouseEventHandler<HTMLButtonElement>
    })
  | (Omit<
      BezierComponentProps<'a'>,
      keyof SectionItemOwnProps | 'children' | 'onClick'
    > & {
      href: string
      onClick?: never
    })

/**
 * General row inside `Section`.
 *
 * `href` renders a native anchor, `onClick` renders a native button, and an
 * item with neither renders a non-interactive div. Use `DropdownMenuItem` for
 * command-menu behavior and `Select`-like components for owned value selection.
 */
export type SectionItemProps = SectionItemOwnProps & SectionItemBaseProps
