import type React from 'react'
import { type CSSProperties, type MouseEventHandler, type ReactNode } from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'
import type * as TabsPrimitive from '@radix-ui/react-tabs'

import {
  type BezierComponentProps,
  type ChildrenProps,
  type DisableProps,
  type LeadingTrailingContentProps,
  type SizeProps,
} from '~/src/types/props'

export type TabSize = 's' | 'm'

export type TabItemLeadingContent = BezierIcon | ReactNode

export type TabItemTrailingContent = BezierIcon | ReactNode

export type TabActionElement<Link> = [Link] extends [string]
  ? HTMLAnchorElement
  : HTMLButtonElement

export interface TabsContextValue {
  size: TabSize
}

interface TabsOwnProps {
  /**
   * Size of the tabs.
   * @default 'm'
   */
  size?: TabSize
  /**
   * When automatic, tabs are activated when receiving focus.
   * When manual, tabs are activated when clicked.
   * @default 'automatic'
   */
  activationMode?: TabsPrimitive.TabsProps['activationMode']
  /**
   * Use when you do not need to control the state of the component.
   */
  defaultValue?: string
  /**
   * The controlled value of the tab to activate.
   */
  value?: string
  /**
   * Event handler called when value is changed.
   */
  onValueChange?: (value: string) => void
}

interface TabItemOwnProps
  extends LeadingTrailingContentProps<
    TabItemLeadingContent,
    TabItemTrailingContent
  > {
  /**
   * A unique value that associates the trigger with a content.
   */
  value: string
  maxWidth?: CSSProperties['maxWidth']
}

interface TabActionOwnProps<Link extends string | undefined> {
  /**
   * TabAction acts as a link when href is given, otherwise as a button.
   */
  href?: Link
  /**
   * Event handler called when tab action is clicked.
   */
  onClick?: Link extends string
    ? never
    : MouseEventHandler<HTMLButtonElement>
}

interface TabContentOwnProps {
  /**
   * A unique value that associates the trigger with a content.
   */
  value: string
}

export interface TabsProps
  extends Omit<BezierComponentProps<'div'>, keyof TabsOwnProps>,
    ChildrenProps,
    SizeProps<TabSize>,
    TabsOwnProps {}

export interface TabListProps
  extends Omit<BezierComponentProps<'div'>, 'children'>,
    ChildrenProps {}

export interface TabItemProps
  extends Omit<
      BezierComponentProps<'button'>,
      keyof TabItemOwnProps | 'color'
    >,
    ChildrenProps,
    DisableProps,
    TabItemOwnProps {}

export interface TabActionsProps extends ChildrenProps {}

export interface TabActionProps<Link extends string | undefined>
  extends Omit<BezierComponentProps, keyof React.HTMLAttributes<HTMLElement>>,
    ChildrenProps,
    TabActionOwnProps<Link>,
    Omit<React.HTMLAttributes<TabActionElement<Link>>, 'onClick'> {}

export interface TabContentProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    TabContentOwnProps {}
