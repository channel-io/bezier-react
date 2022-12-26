/* External dependencies */
import { css } from 'styled-components'

/* Internal dependencies */
import { BezierComponentProps, ChildrenProps, ColorProps, IdentifierProps } from 'Types/ComponentProps'

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
  BezierComponentProps,
  ChildrenProps,
  ColorProps,
  Partial<IdentifierProps>,
  TextOptions {}
