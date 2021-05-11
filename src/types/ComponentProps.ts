/* External dependencies */
import React, { CSSProperties } from 'react'

/* Internal dependencies */
import type InjectedInterpolation from './InjectedInterpolation'

interface RenderConfigProps {
  as?: React.ElementType
  testId?: string
}

interface StylableComponentProps {
  style?: CSSProperties
  className?: string
  interpolation?: InjectedInterpolation
}

export type UIComponentProps = RenderConfigProps & StylableComponentProps

export interface ContentComponentProps<Content = React.ReactNode> extends UIComponentProps {
  content?: Content
}

export interface ChildrenComponentProps<Children = React.ReactNode> extends UIComponentProps {
  children?: Children
}
