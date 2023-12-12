import { type CSSProperties } from 'react'
import type React from 'react'

import type { SemanticNames } from '~/src/foundation'

import type { InjectedInterpolation } from './Foundation'
import type {
  BackgroundSemanticColor,
  BackgroundTextSemanticColor,
  BorderSemanticColor,
  Elevation,
  Radius,
  ZIndex,
} from './Token'

/* Component Base Props */
export interface RenderConfigProps {
  /**
   * Specifies which HTML tag should be used to render this component.
   *
   * `as` prop directly comes from the polymorphic "as" prop of `styled-components`.
   *
   * @see https://styled-components.com/docs/api#as-polymorphic-prop
   */
  as?: React.ElementType

  /**
   * The test id attribute compatible with `@testing-library/react`.
   */
  testId?: string
}

export interface StylableComponentProps {
  /**
   * Customized inline CSS style for this component.
   */
  style?: CSSProperties

  /**
   * Customized CSS classname for this component.
   */
  className?: string

  /**
   * @deprecated
   * Customized style interpolation for this component.
   */
  interpolation?: InjectedInterpolation
}

export type BezierComponentProps = RenderConfigProps & StylableComponentProps

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

export interface MarginProps {
  m?: CSSProperties['margin']
  mx?: CSSProperties['margin']
  my?: CSSProperties['margin']
  mt?: CSSProperties['marginTop']
  mr?: CSSProperties['marginRight']
  mb?: CSSProperties['marginBottom']
  ml?: CSSProperties['marginLeft']
}

interface PaddingProps {
  p?: CSSProperties['padding']
  px?: CSSProperties['padding']
  py?: CSSProperties['padding']
  pt?: CSSProperties['paddingTop']
  pr?: CSSProperties['paddingRight']
  pb?: CSSProperties['paddingBottom']
  pl?: CSSProperties['paddingLeft']
}

interface ContentAreaProps {
  w?: CSSProperties['width']
  h?: CSSProperties['height']
  maxW?: CSSProperties['maxWidth']
  minW?: CSSProperties['minWidth']
  maxH?: CSSProperties['maxHeight']
  minH?: CSSProperties['minHeight']
}

interface PositionProps {
  position?: CSSProperties['position']
  inset?: CSSProperties['inset']
  top?: CSSProperties['top']
  right?: CSSProperties['right']
  bottom?: CSSProperties['bottom']
  left?: CSSProperties['left']
}

interface FlexItemProps {
  shrink?: CSSProperties['flexShrink']
  grow?: CSSProperties['flexGrow']
}

interface BackgroundProps {
  bg?: BackgroundSemanticColor | BackgroundTextSemanticColor
}

interface BorderProps {
  bdrColor?: BorderSemanticColor
  bdrRadius?: Radius
  bdrWidth?: CSSProperties['borderWidth']
  bdrTopWidth?: CSSProperties['borderTopWidth']
  bdrRightWidth?: CSSProperties['borderRightWidth']
  bdrBottomWidth?: CSSProperties['borderBottomWidth']
  bdrLeftWidth?: CSSProperties['borderLeftWidth']
  bdrStyle?: CSSProperties['borderStyle']
}

interface ElevationProps {
  ev?: Elevation
}

interface ZIndexProps {
  zIndex?: ZIndex
}

interface OverflowProps {
  overflow?: CSSProperties['overflow']
  overflowX?: CSSProperties['overflowX']
  overflowY?: CSSProperties['overflowY']
}

export interface LayoutProps extends
  MarginProps,
  PaddingProps,
  ContentAreaProps,
  PositionProps,
  FlexItemProps,
  BackgroundProps,
  BorderProps,
  ElevationProps,
  ZIndexProps,
  OverflowProps {}
