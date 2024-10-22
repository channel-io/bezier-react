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

export interface LoaderProps
  extends Omit<BezierComponentProps<'span'>, keyof ColorProps>,
    Required<SizeProps<LoaderSize>>,
    ColorProps,
    LoaderOwnProps {}
