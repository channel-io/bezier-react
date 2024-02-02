import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type LayoutProps,
  type MarginProps,
} from '~/src/types/props'

type Display = 'flex' | 'inline-flex'

interface CenterOwnProps {
  /**
   * Display type of the center.
   * @default 'flex'
   */
  display?: Display
}

export interface CenterProps extends
  AlphaBezierComponentProps,
  React.HTMLAttributes<HTMLDivElement>,
  ChildrenProps,
  LayoutProps,
  MarginProps,
  CenterOwnProps {}
