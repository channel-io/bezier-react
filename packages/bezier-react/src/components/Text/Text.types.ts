import { type css } from 'styled-components'

import {
  type BezierComponentProps,
  type ChildrenProps,
  type ColorProps,
  type IdentifierProps,
} from '~/src/types/ComponentProps'

interface TextOptions {
  bold?: boolean
  italic?: boolean
  typo?: ReturnType<typeof css>
  truncated?: boolean
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
  BezierComponentProps,
  ChildrenProps,
  ColorProps,
  Partial<IdentifierProps>,
  TextOptions {}
