/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Extendable, CSSInJsStyle } from '../utils/utilTypes'
import Theme from '../../styling/Theme'

export type ReactChildren = React.ReactNodeArray | React.ReactNode

export interface RenderConfigProps {
  as?: any
  theme?: Theme
}

export type StylableComponentProps = RenderConfigProps & Extendable<{
  styles?: CSSInJsStyle
  className?: string
}>

export interface ContentComponentProps<Content = React.ReactNode> extends StylableComponentProps {
  content?: Content
}

export interface ChildrenComponentProps<Children = ReactChildren> extends StylableComponentProps {
  children?: Children
}
