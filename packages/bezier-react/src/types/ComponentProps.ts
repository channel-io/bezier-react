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

/**
 * @deprecated Migration to `AlphaBezierComponentProps` is in progress.
 */
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

/**
 * @deprecated Unnecessary property.
 */
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

/**
 * @deprecated Migration to `AdditionalStylableProps` is in progress.
 */
export type AdditionalStylableProps<ElementName extends PropNameType> =
  AdditionalStyleProps<ElementName> &
  AdditionalClassNameProps<ElementName> &
  AdditionalInterpolationProps<ElementName>

export type AdditionalTestIdProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'testId', string>

export type AdditionalColorProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'color', SemanticNames>

export interface ActivatableProps {
  active?: boolean
}

export interface LinkProps {
  href?: string
}

/**
 * TODO: Remove Alpha prefix after removing styled-components dependency.
 */
export type AlphaAdditionalStylableProps<ElementName extends PropNameType> =
  AdditionalStyleProps<ElementName> &
  AdditionalClassNameProps<ElementName>

/**
 * TODO: Remove Alpha prefix after removing styled-components dependency.
 */
export interface AlphaBezierComponentProps extends
  Omit<RenderConfigProps, 'as'>,
  Omit<StylableComponentProps, 'interpolation'> {}

export interface PolymorphicProps {
  /**
   * Element type to render.
   */
  as?: React.ElementType
}

export interface MarginProps {
  /**
   * the margin area on all four sides of an element.
   * @default 0
   */
  margin?: CSSProperties['margin']
  /**
   * the margin area on the left and right sides of an element.
   * @default 0
   */
  marginHorizontal?: CSSProperties['margin']
  /**
   * the margin area on the top and bottom sides of an element.
   * @default 0
   */
  marginVertical?: CSSProperties['margin']
  /**
   * the margin area on the top side of an element.
   * @default 0
   */
  marginTop?: CSSProperties['marginTop']
  /**
   * the margin area on the right side of an element.
   * @default 0
   */
  marginRight?: CSSProperties['marginRight']
  /**
   * the margin area on the bottom side of an element.
   * @default 0
   */
  marginBottom?: CSSProperties['marginBottom']
  /**
   * the margin area on the left side of an element.
   * @default 0
   */
  marginLeft?: CSSProperties['marginLeft']
}

type Position = 'absolute' | 'fixed' | 'relative' | 'sticky'
type Overflow = 'auto' | 'hidden' | 'scroll' | 'visible'

export interface LayoutProps {
  /**
   * the padding area on all four sides of an element.
   * @default 0
   */
  padding?: CSSProperties['padding']
  /**
   * the padding area on the left and right sides of an element.
   * @default 0
   */
  paddingHorizontal?: CSSProperties['padding']
  /**
   * the padding area on the top and bottom sides of an element.
   * @default 0
   */
  paddingVertical?: CSSProperties['padding']
  /**
   * the padding area on the top side of an element.
   * @default 0
   */
  paddingTop?: CSSProperties['paddingTop']
  /**
   * the padding area on the right side of an element.
   * @default 0
   */
  paddingRight?: CSSProperties['paddingRight']
  /**
   * the padding area on the bottom side of an element.
   * @default 0
   */
  paddingBottom?: CSSProperties['paddingBottom']
  /**
   * the padding area on the left side of an element.
   * @default 0
   */
  paddingLeft?: CSSProperties['paddingLeft']
  /**
   * the width of an element.
   * @default initial
   */
  width?: CSSProperties['width']
  /**
   * the height of an element.
   * @default initial
   */
  height?: CSSProperties['height']
  /**
   * the maximum width of an element.
   * @default initial
   */
  maxWidth?: CSSProperties['maxWidth']
  /**
   * the minimum width of an element.
   * @default initial
   */
  minWidth?: CSSProperties['minWidth']
  /**
   * the maximum height of an element.
   * @default initial
   */
  maxHeight?: CSSProperties['maxHeight']
  /**
   * the minimum height of an element.
   * @default initial
   */
  minHeight?: CSSProperties['minHeight']
  /**
   * how an element is positioned in a document.
   * @default initial
   */
  position?: Position
  /**
   * the distance between the edges of an element and its containing element.
   * @default auto
   */
  inset?: CSSProperties['inset']
  /**
   * the distance between the top edge of an element and the top edge of its containing element.
   * @default auto
   */
  top?: CSSProperties['top']
  /**
   * the distance between the right edge of an element and the right edge of its containing element.
   * @default auto
   */
  right?: CSSProperties['right']
  /**
   * the distance between the bottom edge of an element and the bottom edge of its containing element.
   * @default auto
   */
  bottom?: CSSProperties['bottom']
  /**
   * the distance between the left edge of an element and the left edge of its containing element.
   * @default auto
   */
  left?: CSSProperties['left']
  /**
   * the flex-shrink factor of a flex item.
   * @default initial
   */
  shrink?: CSSProperties['flexShrink']
  /**
   * the flex-grow factor of a flex item.
   * @default initial
   */
  grow?: CSSProperties['flexGrow']
  /**
   * the background color of an element.
   * @default initial
   */
  backgroundColor?: BackgroundSemanticColor | BackgroundTextSemanticColor
  /**
   * the border color of an element.
   * @default initial
   */
  borderColor?: BorderSemanticColor
  /**
   * the border radius of an element.
   * @default initial
   */
  borderRadius?: Radius
  /**
   * the border width of an element.
   * @default 0
   */
  borderWidth?: CSSProperties['borderWidth']
  /**
   * the border width of the top side of an element.
   * @default 0
   */
  borderTopWidth?: CSSProperties['borderTopWidth']
  /**
   * the border width of the right side of an element.
   * @default 0
   */
  borderRightWidth?: CSSProperties['borderRightWidth']
  /**
   * the border width of the bottom side of an element.
   * @default 0
   */
  borderBottomWidth?: CSSProperties['borderBottomWidth']
  /**
   * the border width of the left side of an element.
   * @default 0
   */
  borderLeftWidth?: CSSProperties['borderLeftWidth']
  /**
   * the elevation of an element. (box-shadow)
   * @default initial
   */
  elevation?: Elevation
  /**
   * the z-index of an element.
   * @default initial
   */
  zIndex?: ZIndex
  /**
   * the overflow of an element.
   * @default initial
   */
  overflow?: Overflow
  /**
   * the overflow of the x-axis of an element.
   * @default initial
   */
  overflowX?: Overflow
  /**
   * the overflow of the y-axis of an element.
   * @default initial
   */
  overflowY?: Overflow
}
