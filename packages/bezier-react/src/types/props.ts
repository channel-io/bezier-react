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
 * Props for overriding default styles of components. Intended for exceptional use cases where default styles need customization.
 */
interface OverridableStyleProps {
  /**
   * Custom inline CSS styles for the component.
   * Intended for specific styling that overrides the component's default styles.
   *
   * **🚨 Caution:** Overuse can break the consistency of the overall design. Use only when absolutely necessary.
   */
  style?: React.CSSProperties
  /**
   * Custom CSS class name for the component.
   * Intended to apply external styles or override default styles with higher specificity.
   *
   * **🚨 Caution:** Overuse can break the consistency of the overall design. Use only when absolutely necessary.
   */
  className?: string
}

/**
 * Retrieves the prop types for a given HTML element specified by its tag name.
 * This utility type uses JSX.IntrinsicElements to obtain the props associated with standard HTML elements.
 * @template Tag The tag name of the HTML element (e.g., 'div', 'a', 'button').
 * @returns The prop types for the HTML element corresponding to the tag name.
 * @example
 * type DivProps = ElementProps<'div'>; // React.HTMLAttributes<HTMLDivElement>
 * type AnchorProps = ElementProps<'a'>; // React.AnchorHTMLAttributes<HTMLAnchorElement>
 */
type HTMLElementProps<Tag extends keyof JSX.IntrinsicElements> =
  React.ComponentPropsWithoutRef<Tag>

/**
 * Extends base configuration and overridable style properties with standard HTML attributes.
 * Designed for components requiring both custom and standard HTML properties.
 * @template Tag The tag name of the HTML element (e.g., 'div', 'a', 'button'). If null, returns contains `React.HTMLAttributes<HTMLElement>`.
 */
export type BezierComponentProps<
  Tag extends keyof JSX.IntrinsicElements | null = null,
> = (Tag extends keyof JSX.IntrinsicElements
  ? HTMLElementProps<Tag>
  : React.HTMLAttributes<HTMLElement>) &
  OverridableStyleProps

/**
 * Props for polymorphic components that can render as different element types.
 * @todo Generic type for `as` prop.
 */
export interface PolymorphicProps {
  /**
   * Element type to render.
   */
  as?: React.ElementType
}

/**
 * Props for components that include content.
 */
export interface ContentProps<Content = React.ReactNode> {
  /**
   * Content to be rendered within the component.
   */
  content?: Content
}

/**
 * Props for components that include children elements.
 */
export interface ChildrenProps<Children = React.ReactNode> {
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
export interface SideContentProps<
  LeftContent = React.ReactNode,
  RightContent = React.ReactNode,
> {
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
 * Props for components that use color from the design system.
 */
export interface ColorProps {
  /**
   * Color from the design system's semantic color.
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
type AdditionalProps<
  PropName extends PropNameType,
  Suffix extends string,
  PropType,
> = {
  [Key in `${PropName extends string
    ? PropName
    : PropName[number]}${Capitalize<Suffix>}`]?: PropType
}

/**
 * Props for adding additional overridable style properties to named elements within a component.
 */
export type AdditionalOverridableStyleProps<ElementName extends PropNameType> =
  AdditionalProps<ElementName, 'style', React.CSSProperties> &
    AdditionalProps<ElementName, 'className', string>

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
 * Props for specifying margins around a component.
 */
export interface MarginProps {
  /**
   * the margin area on all four sides of an element.
   * @default 0
   */
  margin?: React.CSSProperties['margin']
  /**
   * the margin area on the left and right sides of an element.
   * @default 0
   */
  marginHorizontal?: React.CSSProperties['margin']
  /**
   * the margin area on the top and bottom sides of an element.
   * @default 0
   */
  marginVertical?: React.CSSProperties['margin']
  /**
   * the margin area on the top side of an element.
   * @default 0
   */
  marginTop?: React.CSSProperties['marginTop']
  /**
   * the margin area on the right side of an element.
   * @default 0
   */
  marginRight?: React.CSSProperties['marginRight']
  /**
   * the margin area on the bottom side of an element.
   * @default 0
   */
  marginBottom?: React.CSSProperties['marginBottom']
  /**
   * the margin area on the left side of an element.
   * @default 0
   */
  marginLeft?: React.CSSProperties['marginLeft']
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
  padding?: React.CSSProperties['padding']
  /**
   * the padding area on the left and right sides of an element.
   * @default 0
   */
  paddingHorizontal?: React.CSSProperties['padding']
  /**
   * the padding area on the top and bottom sides of an element.
   * @default 0
   */
  paddingVertical?: React.CSSProperties['padding']
  /**
   * the padding area on the top side of an element.
   * @default 0
   */
  paddingTop?: React.CSSProperties['paddingTop']
  /**
   * the padding area on the right side of an element.
   * @default 0
   */
  paddingRight?: React.CSSProperties['paddingRight']
  /**
   * the padding area on the bottom side of an element.
   * @default 0
   */
  paddingBottom?: React.CSSProperties['paddingBottom']
  /**
   * the padding area on the left side of an element.
   * @default 0
   */
  paddingLeft?: React.CSSProperties['paddingLeft']
  /**
   * the width of an element.
   * @default initial
   */
  width?: React.CSSProperties['width']
  /**
   * the height of an element.
   * @default initial
   */
  height?: React.CSSProperties['height']
  /**
   * the maximum width of an element.
   * @default initial
   */
  maxWidth?: React.CSSProperties['maxWidth']
  /**
   * the minimum width of an element.
   * @default initial
   */
  minWidth?: React.CSSProperties['minWidth']
  /**
   * the maximum height of an element.
   * @default initial
   */
  maxHeight?: React.CSSProperties['maxHeight']
  /**
   * the minimum height of an element.
   * @default initial
   */
  minHeight?: React.CSSProperties['minHeight']
  /**
   * how an element is positioned in a document.
   * @default initial
   */
  position?: Position
  /**
   * the distance between the edges of an element and its containing element.
   * @default auto
   */
  inset?: React.CSSProperties['inset']
  /**
   * the distance between the top edge of an element and the top edge of its containing element.
   * @default auto
   */
  top?: React.CSSProperties['top']
  /**
   * the distance between the right edge of an element and the right edge of its containing element.
   * @default auto
   */
  right?: React.CSSProperties['right']
  /**
   * the distance between the bottom edge of an element and the bottom edge of its containing element.
   * @default auto
   */
  bottom?: React.CSSProperties['bottom']
  /**
   * the distance between the left edge of an element and the left edge of its containing element.
   * @default auto
   */
  left?: React.CSSProperties['left']
  /**
   * the flex-basis value of a flex item.
   * @default initial
   */
  basis?: React.CSSProperties['flexBasis']
  /**
   * the flex-shrink value of a flex item.
   * @default initial
   */
  shrink?: React.CSSProperties['flexShrink']
  /**
   * the flex-grow value of a flex item.
   * @default initial
   */
  grow?: React.CSSProperties['flexGrow']
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
  borderWidth?: React.CSSProperties['borderWidth']
  /**
   * the border width of the top side of an element.
   * @default 0
   */
  borderTopWidth?: React.CSSProperties['borderTopWidth']
  /**
   * the border width of the right side of an element.
   * @default 0
   */
  borderRightWidth?: React.CSSProperties['borderRightWidth']
  /**
   * the border width of the bottom side of an element.
   * @default 0
   */
  borderBottomWidth?: React.CSSProperties['borderBottomWidth']
  /**
   * the border width of the left side of an element.
   * @default 0
   */
  borderLeftWidth?: React.CSSProperties['borderLeftWidth']
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
export interface FormFieldProps extends DisableProps, Partial<IdentifierProps> {
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
