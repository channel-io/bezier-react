/* Internal dependencies */
import { SemanticNames, Typography } from 'Foundation'
import type { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'

type CSSPropsAndSemanticNames<Key extends keyof React.CSSProperties> = SemanticNames | React.CSSProperties[Key]

interface BoxOptions extends React.CSSProperties {
  // Padding
  p?: React.CSSProperties['padding']
  pv?: string | number
  paddingVertical?: string | number
  ph?: string | number
  paddingHorizontal?: string | number
  pt?: React.CSSProperties['paddingTop']
  pr?: React.CSSProperties['paddingRight']
  pb?: React.CSSProperties['paddingBottom']
  pl?: React.CSSProperties['paddingLeft']

  // Margin
  m?: React.CSSProperties['margin']
  mv?: string | number
  marginVertical?: string | number
  mh?: string | number
  marginHorizontal?: string | number
  mt?: React.CSSProperties['marginTop']
  mr?: React.CSSProperties['marginRight']
  mb?: React.CSSProperties['marginBottom']
  ml?: React.CSSProperties['marginLeft']

  // Width & Height
  w?: React.CSSProperties['width']
  width?: React.CSSProperties['width']
  maxW?: React.CSSProperties['maxWidth']
  minW?: React.CSSProperties['minWidth']
  h?: React.CSSProperties['height']
  height?: React.CSSProperties['height']
  maxH?: React.CSSProperties['maxHeight']
  minH?: React.CSSProperties['minHeight']

  // Color
  bg?: CSSPropsAndSemanticNames<'backgroundColor'>
  backgroundColor?: CSSPropsAndSemanticNames<'backgroundColor'>
  color?: CSSPropsAndSemanticNames<'color'>

  // Font
  typo?: typeof Typography[keyof typeof Typography]
  bold?: boolean
  italic?: boolean

  // Mixin
  // TODO: ellipsis 믹스인 등 구현
  truncated?: boolean | number
}

export interface BoxProps extends
  BezierComponentProps,
  ChildrenProps,
  BoxOptions {}
