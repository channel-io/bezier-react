/* Internal dependencies */
import { BezierComponentProps, DisableProps, LinkProps, ChildrenProps } from 'Types/ComponentProps'

export enum TabsSize {
  L = 53,
  Normal = 45,
  XS = 33,
}

export interface TabsListContextValue {
  height: TabsSize
}

export interface TabsOptions {
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

export interface TabsListOptions {
  /**
   * Tab size whose value is TabsSize enum.
   */
  height?: TabsSize
}

export interface TabActionOptions {
  /**
   * Event handler called when tab action is clicked.
   */
  onClick?: React.MouseEventHandler
}

export interface TabsContentOptions {
  /**
   * A unique value that associates the content with a trigger.
   */
  value: string
}

export interface TabItemOptions {
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

export interface TabsListProps extends
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

export interface TabsContentProps extends
  ChildrenProps,
  TabsContentOptions {}
