/* External dependencies */
import React, { CSSProperties } from 'react'

/* Internal dependencies */
import type InjectedInterpolation from './InjectedInterpolation'

export interface IdentifierProps {
  id: string
}

export interface Type<ComponentType> {
  type?: ComponentType
}

export interface Variant<ComponentVariant> {
  variant?: ComponentVariant
}

export interface Disable {
  disabled?: boolean
}

interface RenderConfigProps {
  as?: React.ElementType
  testId?: string
}

interface StylableComponentProps {
  style?: CSSProperties
  className?: string
  interpolation?: InjectedInterpolation
}

type ElementNameType = string | string[]

type AdditionalComponentProps<
  ElementName extends ElementNameType,
  Suffix extends string,
  PropType,
> = {
  [Key in `${ElementName extends string ? ElementName : ElementName[number]}${Capitalize<Suffix>}`]: PropType
}

type AdditionalClassName<ElementName extends ElementNameType> =
  AdditionalComponentProps<ElementName, 'className', string>

type AdditionalInterpolation<ElementName extends ElementNameType> =
  AdditionalComponentProps<ElementName, 'interpolation', InjectedInterpolation>

export type AdditionalStyle<ElementName extends ElementNameType> =
  Partial<AdditionalClassName<ElementName> & AdditionalInterpolation<ElementName>>

export type AdditionalTestId<ElementName extends ElementNameType> =
  Partial<AdditionalComponentProps<ElementName, 'testId', InjectedInterpolation>>

export interface AdditionalContent<LeftContent extends React.ReactNode, RightContent extends React.ReactNode> {
  leftContent?: LeftContent
  rightContent?: RightContent
}

export type UIComponentProps = RenderConfigProps & StylableComponentProps

export interface ContentComponentProps<Content = React.ReactNode> extends UIComponentProps {
  content?: Content
}

export interface ChildrenComponentProps<Children = React.ReactNode> extends UIComponentProps {
  children?: Children
}
