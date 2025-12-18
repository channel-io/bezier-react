import { type tokens } from '@channel.io/bezier-tokens/beta'

import {
  type ExtractKeys,
  type RemovePrefix,
  type StartsWithPrefix,
} from './utils'

// TODO: Change theme name constant to import from bezier-tokens
export type ThemeName = 'light' | 'dark'

export type GlobalToken = typeof tokens.global
export type SemanticToken = typeof tokens.lightTheme | typeof tokens.darkTheme

// NOTE: (@timo) Do not remove beta- prefix to match CSS variable names
export type FlattenGlobalToken = ExtractKeys<GlobalToken[keyof GlobalToken]>
export type FlattenSemanticToken = ExtractKeys<
  SemanticToken[keyof SemanticToken]
>
export type FlattenAllToken = FlattenGlobalToken | FlattenSemanticToken

/**
 * Global color tokens (internal use only, not for props)
 */
export type GlobalColor = RemovePrefix<'beta-color', keyof GlobalToken['color']>

/**
 * Semantic color tokens (for props)
 */
export type SemanticColor = RemovePrefix<
  'beta-color',
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
 * Background semantic color tokens (for props)
 */
export type BackgroundSemanticColor = FillSemanticColor | SurfaceSemanticColor

/**
 * Border semantic color tokens
 */
export type BorderSemanticColor = StartsWithPrefix<'border', SemanticColor>

/**
 * Dim semantic color tokens
 */
export type DimSemanticColor = StartsWithPrefix<'dim', SemanticColor>

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
export type Radius = RemovePrefix<'beta-radius', keyof SemanticToken['radius']>

/**
 * Semantic opacity tokens (for props)
 */
export type Opacity = RemovePrefix<
  'beta-opacity',
  keyof SemanticToken['opacity']
>

/**
 * Semantic elevation tokens (for props)
 */
export type Elevation = RemovePrefix<
  'beta-elevation',
  keyof SemanticToken['elevation']
>

/**
 * Semantic z-index tokens (for props)
 */
export type ZIndex = RemovePrefix<
  'beta-layer-z-index',
  keyof SemanticToken['layer']
>
