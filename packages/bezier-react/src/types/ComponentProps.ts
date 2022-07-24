/* External dependencies */
import React, {
  type CSSProperties,
  type ElementType,
  type JSXElementConstructor,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
} from 'react'

/* Internal dependencies */
import type { SemanticNames } from 'Foundation'
import type { InjectedInterpolation } from './Foundation'

/* Component Base Props */
export interface RenderConfigProps<T extends ElementType> {
  as?: T
  testId?: string
}

export interface StylableComponentProps {
  style?: CSSProperties
  className?: string
  interpolation?: InjectedInterpolation
}

type PropsOf<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> = JSX.LibraryManagedAttributes<C, ComponentPropsWithoutRef<C>>

type ExtendableProps<
  ExtendedProps = Record<string, unknown>,
  OverrideProps = Record<string, unknown>,
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>

type InheritableElementProps<
  C extends ElementType,
  Props = Record<string, unknown>,
> = ExtendableProps<PropsOf<C>, Props>

type PolymorphicComponentProps<
  C extends ElementType,
  Props = Record<string, unknown>,
> = InheritableElementProps<C, Props & RenderConfigProps<C> & StylableComponentProps>

type PolymorphicComponentRef<C extends ElementType> = ComponentPropsWithRef<C>['ref']

type PolymorphicComponentPropsWithRef<
  C extends ElementType,
  Props = Record<string, unknown>,
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicComponentRef<C> }

interface PolymorphicComponentWithRef<
  DefaultTag extends ElementType,
  Props = Record<string, unknown>,
> {
  <C extends ElementType = DefaultTag>(
    props: PolymorphicComponentPropsWithRef<C, Props>
  ): JSX.Element | null
  propTypes?:
  | React.WeakValidationMap<
  PolymorphicComponentPropsWithRef<DefaultTag, Props>
  >
  | undefined
  contextTypes?: React.ValidationMap<any> | undefined
  defaultProps?:
  | Partial<PolymorphicComponentPropsWithRef<DefaultTag, Props>>
  | undefined
  displayName?: string | undefined
}

export type BezierComponentProps = RenderConfigProps<'div'> & StylableComponentProps

export type PolymorphicBezierComponent<
  DefaultTag extends ElementType,
  Props = Record<string, unknown>,
> = PolymorphicComponentWithRef<DefaultTag, Props>

export type PolymorphicBezierComponentProps<
  DefaultTag extends ElementType,
  Props = Record<string, unknown>,
> = PolymorphicComponentProps<DefaultTag, Props>

export type PolymorphicBezierComponentRef<
  DefaultTag extends ElementType,
> = PolymorphicComponentRef<DefaultTag>

/* Component Additional Props */
export interface ContentProps<Content = React.ReactNode> {
  content?: Content
}

export interface ChildrenProps<Children = React.ReactNode> {
  children?: Children
}

export interface VariantProps<Variant extends string | number> {
  variant?: Variant
}

export interface SizeProps<Size extends string | number> {
  size?: Size
}

export interface SideContentProps<LeftContent = React.ReactNode, RightContent = React.ReactNode> {
  leftContent?: LeftContent
  rightContent?: RightContent
}

export interface DisableProps {
  disabled?: boolean
}

export interface ColorProps {
  color?: SemanticNames
}

export interface IdentifierProps {
  id: string
}

export interface OptionItemProps {
  optionKey?: string
}

export interface OptionItemHostProps<OptionKeyType = string> {
  selectedOptionIndex?: number
  onChangeOption?: (optionIndex: number, optionKey?: OptionKeyType) => void
}

type PropNameType = string | string[]

type AdditionalProps<PropName extends PropNameType, Suffix extends string, PropType> = {
  [Key in `${PropName extends string
    ? PropName
    : PropName[number]
  }${Capitalize<Suffix>}`]?: PropType
}

type AdditionalStyleProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'style', CSSProperties>

type AdditionalClassNameProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'className', string>

type AdditionalInterpolationProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'interpolation', InjectedInterpolation>

export type AdditionalStylableProps<ElementName extends PropNameType> =
  AdditionalStyleProps<ElementName> &
  AdditionalClassNameProps<ElementName> &
  AdditionalInterpolationProps<ElementName>

export type AdditionalTestIdProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'testId', string>

export type AdditionalColorProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'color', SemanticNames>

export interface ActivatableProps extends AdditionalStylableProps<'active'> {
  active?: boolean
  allowActive?: boolean
}

export interface LinkProps {
  href?: string
}
