/* Internal dependencies */
import React from 'react'
import { BezierComponentProps, DisableProps, LinkProps, ChildrenProps, SizeProps } from 'Types/ComponentProps'

export enum TabSize {
  L = 53,
  Normal = 45,
  XS = 33,
}

export interface TabsListContextValue {
  size: TabSize
}

interface TabsOptions {
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

interface TabActionOptions {
  /**
   * Event handler called when tab action is clicked.
   */
  onClick?: React.MouseEventHandler
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

export interface TabActionProps extends
  ChildrenProps,
  BezierComponentProps,
  LinkProps,
  Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick'>,
  TabActionOptions {}

export interface TabContentProps extends
  ChildrenProps,
  BezierComponentProps,
  TabContentOptions {}
