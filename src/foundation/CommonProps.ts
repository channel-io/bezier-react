/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { CSSInJsStyle, ComponentProps } from './types'

export type ReactChildren = React.ReactNodeArray | React.ReactNode

export interface StylableComponentProps extends ComponentProps {
  styles?: CSSInJsStyle
}

export interface UIComponentProps extends StylableComponentProps {
  className?: string
}

export interface ContentComponentProps<Content = React.ReactNode> extends UIComponentProps {
  content?: Content
}

export interface ChildrenComponentProps<Children = ReactChildren> extends UIComponentProps {
  children?: Children
}
