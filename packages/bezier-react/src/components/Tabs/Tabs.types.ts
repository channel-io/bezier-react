import type React from 'react'

import {
  type BezierComponentProps,
  type ChildrenProps,
  type DisableProps,
  type SizeProps,
} from '~/src/types/props'

export enum TabSize {
  L = 'l',
  M = 'm',
  S = 's',
}

export interface TabListContextValue {
  size: TabSize
}

interface TabsOwnProps {
  /**
   * When automatic, tabs are activated when receiving focus.
   * When manual, tabs are activated when clicked.
   * @default automatic
   */
  activationMode?: 'automatic' | 'manual'
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

interface TabActionOwnProps<Link extends string | undefined> {
  /**
   * TabAction acts as a link when href is given, otherwise as a button.
   */
  href?: Link
  /**
   * Event handler called when tab action is clicked.
   */
  onClick?: Link extends string ? never : React.MouseEventHandler<HTMLButtonElement>
}

interface TabItemOwnProps {
  /**
   * A unique value that associates the trigger with a content.
   */
  value: string
}

interface TabContentOwnProps {
  /**
   * A unique value that associates the trigger with a content.
   */
  value: string
}

export interface TabsProps extends
  Omit<BezierComponentProps<'div'>, keyof TabsOwnProps>,
  ChildrenProps,
  TabsOwnProps {}

export interface TabListProps extends
  BezierComponentProps<'div'>,
  ChildrenProps,
  SizeProps<TabSize> {}

export interface TabItemsProps extends
  BezierComponentProps<'div'>,
  ChildrenProps {}

export interface TabItemProps extends
  Omit<BezierComponentProps<'button'>, keyof TabItemOwnProps>,
  ChildrenProps,
  DisableProps,
  TabItemOwnProps {}

export interface TabActionsProps extends
  BezierComponentProps<'div'>,
  ChildrenProps {}

export type TabActionElement<Link> = [Link] extends [string] ? HTMLAnchorElement : HTMLButtonElement

export interface TabActionProps<Link extends string | undefined> extends
  Omit<BezierComponentProps, keyof React.HTMLAttributes<HTMLElement>>,
  ChildrenProps,
  TabActionOwnProps<Link>,
  Omit<React.HTMLAttributes<TabActionElement<Link>>, 'onClick'> {}

export interface TabContentProps extends
  BezierComponentProps<'div'>,
  ChildrenProps,
  TabContentOwnProps {}
