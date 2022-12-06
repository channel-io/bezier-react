/* Internal dependencies */
import React from 'react'
import { BezierComponentProps, DisableProps, LinkProps, ChildrenProps } from 'Types/ComponentProps'

export enum TabSize {
  L = 53,
  Normal = 45,
  XS = 33,
}

export interface TabsListContextValue {
  height: TabSize
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

interface TabsListOptions {
  /**
   * Tab size whose value is TabsSize enum.
   */
  height?: TabSize
}

export interface TabActionOptions {
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

export interface TabItemProps extends
  ChildrenProps,
  BezierComponentProps,
  DisableProps,
  TabItemOptions {}

export interface TabListProps extends
  ChildrenProps,
  BezierComponentProps,
  TabsListOptions,
  TabsOptions {}

export interface TabsProps extends
  ChildrenProps,
  TabsOptions {}

export interface TabActionProps extends
  ChildrenProps,
  BezierComponentProps,
  LinkProps,
  DisableProps,
  TabActionOptions {}

export interface TabContentProps extends
  ChildrenProps,
  BezierComponentProps,
  TabContentOptions {}
