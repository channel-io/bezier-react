import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type LayoutProps,
  type MarginProps,
  type PolymorphicProps,
} from '~/src/types/ComponentProps'

type Display = 'flex' | 'inline-flex'

type Direction = 'horizontal' | 'vertical'

type BaseAlignment = 'start' | 'center' | 'end' | 'stretch'
type Align = BaseAlignment | 'baseline'
type Justify = BaseAlignment | 'between'

type StackElementType = 'div' | 'section' | 'ul' | 'ol'

interface StackOwnProps {
  /**
   * Display type of the stack.
   * @default 'flex'
   */
  display?: Display
  /**
   * Direction of the stack.
   */
  direction: Direction
  /**
   * Determines the default aligning of children along the main axis.
   */
  justify?: Justify
  /**
   * Determines the default aligning of children along the cross axis.
   */
  align?: Align
  /**
   * Spacing between children.
   */
  gap?: string | number
  /**
   * Whether to reverse the order of children.
   */
  reverse?: boolean
  /**
   * Whether to wrap children to additional rows as needed on small screens.
   */
  wrap?: boolean
}

export interface StackProps extends
  AlphaBezierComponentProps,
  React.HTMLAttributes<HTMLElement>,
  PolymorphicProps<StackElementType>,
  ChildrenProps,
  LayoutProps,
  MarginProps,
  StackOwnProps {}

export interface HStackProps extends
  Omit<StackProps, 'direction'> {}

export interface VStackProps extends
  Omit<StackProps, 'direction'> {}
