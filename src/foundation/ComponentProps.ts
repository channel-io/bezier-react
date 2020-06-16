/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Extendable, CSSInJsStyle } from './utilTypes'

export type ReactChildren = React.ReactNodeArray | React.ReactNode

export type ComponentProps = Extendable<{
  styles?: CSSInJsStyle
}>

export interface UIComponentProps extends ComponentProps {
  className?: string
}

export interface ContentComponentProps<Content = React.ReactNode> extends UIComponentProps {
  content?: Content
}

export interface ChildrenComponentProps<Children = ReactChildren> extends UIComponentProps {
  children?: Children
}
