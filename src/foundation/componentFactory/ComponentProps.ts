/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Extendable, CSSInJsStyle } from '../utils/utilTypes'
import Theme from '../../styling/Theme'

export type ReactChildren = React.ReactNodeArray | React.ReactNode

export interface RenderConfigProps {
  as?: React.ElementType
  theme?: Theme
}

export type StylableComponentProps = Extendable<{
  styles?: CSSInJsStyle
  className?: string
}>

export type UIComponentProps = RenderConfigProps & StylableComponentProps

export interface ContentComponentProps<Content = React.ReactNode> extends UIComponentProps {
  content?: Content
}

export interface ChildrenComponentProps<Children = ReactChildren> extends UIComponentProps {
  children?: Children
}
