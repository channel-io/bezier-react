import {
  type BezierComponentProps,
  type ColorProps,
  type SizeProps,
} from '~/src/types/props'

type LoaderSize = 's' | 'm'

interface LoaderOwnProps {
  /**
   * The style variant of Loader.
   * @default 'secondary'
   */
  variant?: 'primary' | 'secondary' | 'on-overlay'
}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface LoaderProps
  extends Omit<BezierComponentProps<'span'>, keyof ColorProps>,
    Required<SizeProps<LoaderSize>>,
    ColorProps,
    LoaderOwnProps {}
