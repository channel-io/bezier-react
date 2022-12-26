/* Internal dependencies */
import React from 'react'
import { BezierComponentProps, DisableProps, ChildrenProps, SizeProps } from 'Types/ComponentProps'

export enum TabSize {
  L = 'L',
  M = 'M',
  S = 'S',
}

export interface TabListContextValue {
  size: TabSize
}

interface TabsOptions {
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

interface TabActionOptions<Link extends string | undefined> {
  /**
   * TabAction acts as a link when href is given, otherwise as a button.
   */
  href?: Link
  /**
   * Event handler called when tab action is clicked.
   */
  onClick?: Link extends string ? never : React.MouseEventHandler<HTMLButtonElement>
}

interface TabItemOptions {
  /**
   * A unique value that associates the trigger with a content.
   */
  value: string
}

interface TabContentOptions {
  /**
   * A unique value that associates the trigger with a content.
   */
  value: string
}

export interface TabsProps extends
  ChildrenProps,
  BezierComponentProps,
  TabsOptions {}

export interface TabListProps extends
  ChildrenProps,
  BezierComponentProps,
  SizeProps<TabSize>,
  React.HTMLAttributes<HTMLDivElement> {}

export interface TabItemsProps extends
  ChildrenProps,
  BezierComponentProps,
  React.HTMLAttributes<HTMLDivElement> {}

export interface TabItemProps extends
  ChildrenProps,
  BezierComponentProps,
  DisableProps,
  React.HTMLAttributes<HTMLButtonElement>,
  TabItemOptions {}

export interface TabActionsProps extends
  BezierComponentProps,
  ChildrenProps {}

export type TabActionElement<Link> = [Link] extends [string] ? HTMLAnchorElement : HTMLButtonElement

export interface TabActionProps<Link extends string | undefined> extends
  ChildrenProps,
  BezierComponentProps,
  TabActionOptions<Link>,
  Omit<React.HTMLAttributes<TabActionElement<Link>>, 'onClick'> {}

export interface TabContentProps extends
  ChildrenProps,
  BezierComponentProps,
  TabContentOptions {}
