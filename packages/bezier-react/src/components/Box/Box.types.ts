import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type LayoutProps,
  type MarginProps,
  type PolymorphicProps,
} from '~/src/types/ComponentProps'

type Display = 'block' | 'inline' | 'inline-block'

interface BoxOwnProps {
  /**
   * Display type of the box.
   */
  display?: Display
}

export interface BoxProps extends
  AlphaBezierComponentProps,
  React.HTMLAttributes<HTMLElement>,
  PolymorphicProps,
  ChildrenProps,
  LayoutProps,
  MarginProps,
  BoxOwnProps {}
