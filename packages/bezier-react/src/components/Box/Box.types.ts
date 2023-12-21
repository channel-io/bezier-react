import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type LayoutProps,
  type MarginProps,
  type PolymorphicProps,
} from '~/src/types/ComponentProps'

type Display = 'block' | 'inline' | 'inline-block'

type BoxElementType = 'div' | 'span' | 'section' | 'legend' | 'ul' | 'ol' | 'li'

interface BoxOwnProps {
  /**
   * Display type of the box.
   */
  display?: Display
}

// TODO: Make the polymorphic property stricter
export interface BoxProps extends
  AlphaBezierComponentProps,
  React.HTMLAttributes<HTMLElement>,
  PolymorphicProps<BoxElementType>,
  ChildrenProps,
  LayoutProps,
  MarginProps,
  BoxOwnProps {}
