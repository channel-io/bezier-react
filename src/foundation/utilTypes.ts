/* External dependencies */
import React from 'react'

type CSSProperties = React.CSSProperties

export interface CSSPseudoElementStyle extends CSSInJsStyle {
  content?: string
}

export type CSSInJsStyle = Omit<CSSProperties, 'display'> & {
  [key: string]: any
  display?: CSSProperties['display'] | CSSProperties['display'][]

  // CSS in JS Properties
  '::before'?: CSSPseudoElementStyle
  '::after'?: CSSPseudoElementStyle
  ':hover'?: CSSInJsStyle
  ':active'?: CSSInJsStyle
  ':focus'?: CSSInJsStyle
  ':visited'?: CSSInJsStyle

  // TODO Questionable: avoid order specific styles
  ':first-child'?: CSSInJsStyle
  ':last-child'?: CSSInJsStyle
  ':nth-child(n+2)'?: CSSInJsStyle
}

export type ObjectOf<T> = {
  [key: string]: T
}

export type Extendable<T, V = any> = T & {
  [key: string]: V
}
