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
  'color',
  keyof BetaGlobalToken['color']
>

/**
 * Semantic color tokens (for props)
 */
export type BetaSemanticColor = RemovePrefix<
  'color',
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
 * Dim semantic color tokens (for background)
 */
type BetaDimSemanticColor = StartsWithPrefix<'dim', BetaSemanticColor>
/**
 * Background semantic color tokens (for props)
 */
export type BetaBackgroundSemanticColor =
  | BetaFillSemanticColor
  | BetaSurfaceSemanticColor
  | BetaDimSemanticColor
/**
 * Border semantic color tokens
 */
export type BetaBorderSemanticColor = StartsWithPrefix<
  'border',
  BetaSemanticColor
>

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
  'radius',
  keyof BetaSemanticToken['radius']
>

/**
 * Semantic opacity tokens (for props)
 */
export type BetaOpacity = RemovePrefix<
  'opacity',
  keyof BetaSemanticToken['opacity']
>

/**
 * Semantic elevation tokens (for props)
 */
export type BetaElevation = RemovePrefix<
  'elevation',
  keyof BetaSemanticToken['elevation']
>

/**
 * Semantic z-index tokens (for props)
 */
export type BetaZIndex = RemovePrefix<
  'layer-z-index',
  keyof BetaSemanticToken['layer']
>
