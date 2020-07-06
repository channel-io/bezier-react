/* External dependencies */
import React, { CSSProperties } from 'react'

/* Internal dependencies */
import { Extendable } from './utilTypes'

export type ReactChildren = React.ReactNodeArray | React.ReactNode

export interface RenderConfigProps {
  as?: React.ElementType
  testId?: string
}

export type StylableComponentProps = Extendable<{
  style?: CSSProperties
  className?: string
}>

export type UIComponentProps = RenderConfigProps & StylableComponentProps

export interface ContentComponentProps<Content = React.ReactNode> extends UIComponentProps {
  content?: Content
}

export interface ChildrenComponentProps<Children = ReactChildren> extends UIComponentProps {
  children?: Children
}
