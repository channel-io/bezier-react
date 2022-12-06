/* External dependencies */
import { css } from 'styled-components'

/* Internal dependencies */
import { BezierComponentProps, ChildrenProps, ColorProps } from 'Types/ComponentProps'

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
}

export interface TextProps extends
  BezierComponentProps,
  ChildrenProps,
  ColorProps,
  Omit<React.HTMLAttributes<HTMLElement>, keyof ColorProps>,
  TextOptions {}
