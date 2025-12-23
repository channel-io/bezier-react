import { type tokens } from '@channel.io/bezier-tokens/beta'

import {
  type ExtractKeys,
  type RemovePrefix,
  type StartsWithPrefix,
} from './utils'

// TODO: Change theme name constant to import from bezier-tokens
export type BetaThemeName = 'light' | 'dark'

export type BetaGlobalToken = typeof tokens.global
export type BetaSemanticToken =
  | typeof tokens.lightTheme
  | typeof tokens.darkTheme

// NOTE: (@timo) Do not remove beta- prefix to match CSS variable names
export type BetaFlattenGlobalToken = ExtractKeys<
  BetaGlobalToken[keyof BetaGlobalToken]
>
export type BetaFlattenSemanticToken = ExtractKeys<
  BetaSemanticToken[keyof BetaSemanticToken]
>
export type BetaFlattenAllToken =
  | BetaFlattenGlobalToken
  | BetaFlattenSemanticToken

/**
 * Global color tokens (internal use only, not for props)
 */
export type BetaGlobalColor = RemovePrefix<
  'beta-color',
  keyof BetaGlobalToken['color']
>

/**
 * Semantic color tokens (for props)
 */
export type BetaSemanticColor = RemovePrefix<
  'beta-color',
  keyof BetaSemanticToken['color']
>

/**
 * Text semantic color tokens
 */
export type BetaTextSemanticColor = StartsWithPrefix<'text', BetaSemanticColor>

/**
 * Icon semantic color tokens
 */
export type BetaIconSemanticColor = StartsWithPrefix<'icon', BetaSemanticColor>

/**
 * Fill semantic color tokens (for background)
 */
type BetaFillSemanticColor = StartsWithPrefix<'fill', BetaSemanticColor>
/**
 * Surface semantic color tokens (for background)
 */
type BetaSurfaceSemanticColor = StartsWithPrefix<'surface', BetaSemanticColor>
/**
 * Background semantic color tokens (for props)
 */
export type BetaBackgroundSemanticColor =
  | BetaFillSemanticColor
  | BetaSurfaceSemanticColor

/**
 * Border semantic color tokens
 */
export type BetaBorderSemanticColor = StartsWithPrefix<
  'border',
  BetaSemanticColor
>

/**
 * Dim semantic color tokens
 */
export type BetaDimSemanticColor = StartsWithPrefix<'dim', BetaSemanticColor>

/**
 * State semantic color tokens
 */
export type BetaStateSemanticColor = StartsWithPrefix<
  'state',
  BetaSemanticColor
>

/**
 * Elevation semantic color tokens
 */
export type BetaElevationSemanticColor = StartsWithPrefix<
  'elevation',
  BetaSemanticColor
>

/**
 * Semantic radius tokens (for props)
 */
export type BetaRadius = RemovePrefix<
  'beta-radius',
  keyof BetaSemanticToken['radius']
>

/**
 * Semantic opacity tokens (for props)
 */
export type BetaOpacity = RemovePrefix<
  'beta-opacity',
  keyof BetaSemanticToken['opacity']
>

/**
 * Semantic elevation tokens (for props)
 */
export type BetaElevation = RemovePrefix<
  'beta-elevation',
  keyof BetaSemanticToken['elevation']
>

/**
 * Semantic z-index tokens (for props)
 */
export type BetaZIndex = RemovePrefix<
  'beta-layer-z-index',
  keyof BetaSemanticToken['layer']
>
