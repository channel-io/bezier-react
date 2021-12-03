/* External dependencies */
import React, { CSSProperties } from 'react'

/* Internal dependencies */
import type InjectedInterpolation from './InjectedInterpolation'

/* Component Base Props */
interface RenderConfigProps {
  as?: React.ElementType
  testId?: string
}

interface StylableComponentProps {
  style?: CSSProperties
  className?: string
  interpolation?: InjectedInterpolation
}

export type BezierComponentProps = RenderConfigProps & StylableComponentProps

export interface ContentComponentProps<Content = React.ReactNode> extends BezierComponentProps {
  content?: Content
}

export interface SideContentComponentProps<
  Content = React.ReactNode,
  LeftContent = React.ReactNode,
  RightContent = React.ReactNode,
> extends ContentComponentProps<Content> {
  leftContent?: LeftContent
  rightContent?: RightContent
}

export interface ChildrenComponentProps<Children = React.ReactNode> extends BezierComponentProps {
  children?: Children
}

/* Component Additional Props */
export interface IdentifierProps {
  id: string
}

export interface TypeProps<Type> {
  type?: Type
}

export interface VariantProps<Variant> {
  variant?: Variant
}

export interface DisableProps {
  disabled?: boolean
}

export interface OptionItemProps {
  optionKey?: string
}

export interface OptionItemHostProps<OptionKeyType = string> {
  selectedOptionIndex?: number
  onChangeOption?: (optionIndex: number, optionKey?: OptionKeyType) => void
}

type ElementNameType = string | string[]

type AdditionalComponentProps<
  ElementName extends ElementNameType,
  Suffix extends string,
  PropType,
> = {
  [Key in `${ElementName extends string
    ? ElementName
    : ElementName[number]}${Capitalize<Suffix>}`
  ]: PropType
}

type AdditionalClassNameProps<ElementName extends ElementNameType> =
  AdditionalComponentProps<ElementName, 'className', string>

type AdditionalInterpolationProps<ElementName extends ElementNameType> =
  AdditionalComponentProps<ElementName, 'interpolation', InjectedInterpolation>

export type AdditionalStyleProps<ElementName extends ElementNameType> =
  Partial<AdditionalClassNameProps<ElementName> & AdditionalInterpolationProps<ElementName>>

export type AdditionalTestIdProps<ElementName extends ElementNameType> =
  Partial<AdditionalComponentProps<ElementName, 'testId', InjectedInterpolation>>

export interface ActivatableProps extends AdditionalStyleProps<'active'> {
  active?: boolean
  allowActive?: boolean
}
