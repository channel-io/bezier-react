import type {
  CSSProperties,
  ElementType,
  ReactNode,
} from 'react'

import type {
  BackgroundSemanticColor,
  BackgroundTextSemanticColor,
  BorderSemanticColor,
  Elevation,
  Radius,
  SemanticColor,
  ZIndex,
} from './tokens'

/**
 * Base configuration properties for components, including the HTML element type and test ID.
 */
export interface RenderConfigProps {
  /**
   * Specifies which HTML tag should be used to render this component.
   * This prop comes directly from the polymorphic "as" prop of `styled-components`.
   * @see https://styled-components.com/docs/api#as-polymorphic-prop
   */
  as?: ElementType

  /**
   * A test ID attribute compatible with `@testing-library/react`.
   */
  testId?: string
}

/**
 * Properties for styling components, including inline CSS and class names.
 */
export interface StylableComponentProps {
  /**
   * Custom inline CSS styles for the component.
   */
  style?: CSSProperties
  /**
   * Custom CSS class name for the component.
   */
  className?: string
}

/**
 * Props for components that include content.
 */
export interface ContentProps<Content = ReactNode> {
  /**
   * Content to be rendered within the component.
   */
  content?: Content
}

/**
 * Props for components that include children elements.
 */
export interface ChildrenProps<Children = ReactNode> {
  /**
   * Child elements to be rendered within the component.
   */
  children?: Children
}

/**
 * Props for components with variant styles or behaviors.
 */
export interface VariantProps<Variant extends string | number> {
  /**
   * Variant of the component to be used.
   */
  variant?: Variant
}

/**
 * Props for components with size variations.
 */
export interface SizeProps<Size extends string | number> {
  /**
   * Size of the component.
   */
  size?: Size
}

/**
 * Props for components that have content on their sides (left or right).
 */
export interface SideContentProps<LeftContent = ReactNode, RightContent = ReactNode> {
  /**
   * Content to be displayed on the left side of the component.
   */
  leftContent?: LeftContent
  /**
   * Content to be displayed on the right side of the component.
   */
  rightContent?: RightContent
}

/**
 * Props for components that can be disabled.
 */
export interface DisableProps {
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean
}

/**
 * Props for components that use color from the design system's palette.
 */
export interface ColorProps {
  /**
   * Color from the design system's semantic color palette.
   */
  color?: SemanticColor
}

/**
 * Props for components that require an identifier (ID).
 */
export interface IdentifierProps {
  /**
   * Unique identifier for the component.
   */
  id: string
}

type PropNameType = string | string[]
/**
 * Generic type for defining additional properties with a specific suffix.
 */
type AdditionalProps<PropName extends PropNameType, Suffix extends string, PropType> = {
  [Key in `${PropName extends string
    ? PropName
    : PropName[number]
  }${Capitalize<Suffix>}`]?: PropType
}

/**
 * Props for adding custom styles to named elements within a component.
 */
type AdditionalStyleProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'style', CSSProperties>

/**
 * Props for adding custom class names to named elements within a component.
 */
type AdditionalClassNameProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'className', string>

/**
 * Props for adding test IDs to named elements within a component, useful for testing purposes.
 */
export type AdditionalTestIdProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'testId', string>

/**
 * Props for adding color properties to named elements within a component.
 */
export type AdditionalColorProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'color', SemanticColor>

/**
 * Props for components that can be activated or deactivated.
 */
export interface ActivatableProps {
  /**
   * Whether the component is active.
   */
  active?: boolean
}

/**
 * Props for components that act as a link.
 */
export interface LinkProps {
  /**
   * URL or a URL fragment that the hyperlink points to.
   */
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

/**
 * Props for polymorphic components that can render as different element types.
 * @todo Generic type for `as` prop.
 */
export interface PolymorphicProps {
  /**
   * Element type to render.
   */
  as?: ElementType
}

/**
 * Props for specifying margins around a component.
 */
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

/**
 * Props for defining layout-related properties of a component, such as padding, size, and position.
 */
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

/**
 * Enumeration of form field sizes. (TextField, Select)
 */
export type FormFieldSize = 'xl' | 'l' | 'm' | 'xs'

/**
 * Props for form field components, including states like disabled, error, and required.
 */
export interface FormFieldProps extends
  DisableProps,
  Partial<IdentifierProps> {
  /**
   * Indicates whether the validation failed.
   */
  hasError?: boolean
  /**
   * Indicates that the user must specify a value for the input before the owning form can be submitted.
   */
  required?: boolean
  /**
   * Indicates that the user cannot modify the value of the input.
   */
  readOnly?: boolean
}
