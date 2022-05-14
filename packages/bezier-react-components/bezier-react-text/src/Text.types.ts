/* External dependencies */
import type {
  InjectedInterpolation,
  BezierComponentProps,
  ChildrenProps,
  ColorProps,
  IdentifierProps,
} from '@channel.io/bezier-react-system'

interface TextOptions {
  bold?: boolean
  italic?: boolean
  typo?: InjectedInterpolation
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  marginVertical?: number
  marginHorizontal?: number
  marginAll?: number
  onClick?: React.MouseEventHandler
}

export default interface TextProps extends
  TextOptions,
  BezierComponentProps,
  ChildrenProps,
  ColorProps,
  IdentifierProps {}
