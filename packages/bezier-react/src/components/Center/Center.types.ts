import {
  type BezierComponentProps,
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

export interface CenterProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    LayoutProps,
    MarginProps,
    CenterOwnProps {}
