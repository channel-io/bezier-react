import { type tokens } from '@channel.io/bezier-tokens'

import {
  type ExtractKeys,
  type RemovePrefix,
  type StartsWithPrefix,
} from './utils'

// TODO: Change theme name constant to import from bezier-tokens
export type ThemeName = 'light' | 'dark'

export type GlobalToken = typeof tokens.global
export type SemanticToken = typeof tokens.lightTheme | typeof tokens.darkTheme

export type FlattenGlobalToken = ExtractKeys<GlobalToken[keyof GlobalToken]>
export type FlattenSemanticToken = ExtractKeys<
  SemanticToken[keyof SemanticToken]
>
export type FlattenAllToken = FlattenGlobalToken | FlattenSemanticToken

/**
 * Global color tokens (internal use only, not for props)
 */
export type GlobalColor = RemovePrefix<'color', keyof GlobalToken['color']>

/**
 * Global typography font weight tokens
 */
export type TypographyFontWeight = RemovePrefix<
  'typography-font-weight',
  Extract<keyof GlobalToken['typography'], string>
>

/**
 * Semantic color tokens (for props)
 */
export type SemanticColor = RemovePrefix<
  'color',
  keyof SemanticToken['color']
>

/**
 * Text semantic color tokens
 */
export type TextSemanticColor = StartsWithPrefix<'text', SemanticColor>

/**
 * Icon semantic color tokens
 */
export type IconSemanticColor = StartsWithPrefix<'icon', SemanticColor>

/**
 * Fill semantic color tokens (for background)
 */
type FillSemanticColor = StartsWithPrefix<'fill', SemanticColor>
/**
 * Surface semantic color tokens (for background)
 */
type SurfaceSemanticColor = StartsWithPrefix<'surface', SemanticColor>
/**
 * Dim semantic color tokens (for background)
 */
type DimSemanticColor = StartsWithPrefix<'dim', SemanticColor>
/**
 * Background semantic color tokens (for props)
 */
export type BackgroundSemanticColor =
  | FillSemanticColor
  | SurfaceSemanticColor
  | DimSemanticColor
/**
 * Border semantic color tokens
 */
export type BorderSemanticColor = StartsWithPrefix<'border', SemanticColor>

/**
 * State semantic color tokens
 */
export type StateSemanticColor = StartsWithPrefix<'state', SemanticColor>

/**
 * Elevation semantic color tokens
 */
export type ElevationSemanticColor = StartsWithPrefix<
  'elevation',
  SemanticColor
>

/**
 * Semantic radius tokens (for props)
 */
export type Radius = RemovePrefix<'radius', keyof SemanticToken['radius']>

/**
 * Semantic opacity tokens (for props)
 */
export type Opacity = RemovePrefix<'opacity', keyof SemanticToken['opacity']>

/**
 * Semantic elevation tokens (for props)
 */
export type Elevation = RemovePrefix<
  'elevation',
  keyof SemanticToken['elevation']
>

/**
 * Semantic z-index tokens (for props)
 */
export type ZIndex = RemovePrefix<
  'layer-z-index',
  keyof SemanticToken['layer']
>
