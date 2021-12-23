/* Internal dependencies */
import { SemanticNames, Typography } from 'Foundation'
import type { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'

type CSSPropsAndSemanticNames<Key extends keyof React.CSSProperties> = SemanticNames | React.CSSProperties[Key]

interface BoxOptions extends React.CSSProperties {
  // Position
  t?: React.CSSProperties['top']
  top?: React.CSSProperties['top']
  r?: React.CSSProperties['right']
  right?: React.CSSProperties['right']
  b?: React.CSSProperties['bottom']
  bottom?: React.CSSProperties['bottom']
  l?: React.CSSProperties['left']
  left?: React.CSSProperties['left']

  // Padding
  p?: React.CSSProperties['padding']
  padding?: React.CSSProperties['padding']
  pv?: string | number
  paddingVertical?: string | number
  ph?: string | number
  paddingHorizontal?: string | number
  pt?: React.CSSProperties['paddingTop']
  paddingTop?: React.CSSProperties['paddingTop']
  pr?: React.CSSProperties['paddingRight']
  paddingRight?: React.CSSProperties['paddingRight']
  pb?: React.CSSProperties['paddingBottom']
  paddingBottom?: React.CSSProperties['paddingBottom']
  pl?: React.CSSProperties['paddingLeft']
  paddingLeft?: React.CSSProperties['paddingLeft']

  // Margin
  m?: React.CSSProperties['margin']
  margin?: React.CSSProperties['margin']
  mv?: string | number
  marginVertical?: string | number
  mh?: string | number
  marginHorizontal?: string | number
  mt?: React.CSSProperties['marginTop']
  marginTop?: React.CSSProperties['marginTop']
  mr?: React.CSSProperties['marginRight']
  marginRight?: React.CSSProperties['marginRight']
  mb?: React.CSSProperties['marginBottom']
  marginBottom?: React.CSSProperties['marginBottom']
  ml?: React.CSSProperties['marginLeft']
  marginLeft?: React.CSSProperties['marginLeft']

  // Width & Height
  w?: React.CSSProperties['width']
  maxW?: React.CSSProperties['maxWidth']
  minW?: React.CSSProperties['minWidth']
  h?: React.CSSProperties['height']
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
