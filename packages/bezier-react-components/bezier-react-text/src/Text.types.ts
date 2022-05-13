/* External dependencies */
import { css } from 'styled-components'
import type { BezierComponentProps, ChildrenProps, ColorProps, IdentifierProps } from '@channel.io/bezier-react-system'

interface TextOptions {
  bold?: boolean
  italic?: boolean
  typo?: ReturnType<typeof css>
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
