/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Extendable, CSSInJsStyle } from './utilTypes'

export type ReactChildren = React.ReactNodeArray | React.ReactNode

export interface RenderConfigProps {
  as?: React.ElementType
  testId?: string
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
