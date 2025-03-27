import { type tokens } from '@channel.io/bezier-tokens/alpha'

import {
  type ExtractKeys,
  type RemovePrefix,
  type StartsWithPrefix,
} from './utils'

// TODO: Change theme name constant to import from bezier-tokens
export type ThemeName = 'light' | 'dark'

export type GlobalToken = typeof tokens.global
/**
 * FIXME: Separate functional and semantic tokens?
 */
export type SemanticToken = typeof tokens.lightTheme | typeof tokens.darkTheme

// NOTE: (@ed) Do not remove alpha- prefix to match CSS variable names
export type FlattenGlobalToken = ExtractKeys<GlobalToken[keyof GlobalToken]>
export type FlattenSemanticToken = ExtractKeys<
  SemanticToken[keyof SemanticToken]
>
export type FlattenAllToken = FlattenGlobalToken | FlattenSemanticToken

export type GlobalColor = RemovePrefix<
  'alpha-color',
  keyof GlobalToken['color']
>

/**
 * Functional & Semantic color tokens
 */
export type BaseSemanticColor = RemovePrefix<
  'alpha-color',
  keyof SemanticToken['color']
>

export type BackgroundFunctionalColor = StartsWithPrefix<
  'bg',
  BaseSemanticColor
>
export type ForegroundFunctionalColor = StartsWithPrefix<
  'fg',
  BaseSemanticColor
>
export type SurfaceFunctionalColor = StartsWithPrefix<
  'surface',
  BaseSemanticColor
>
export type ShadowFunctionalColor = StartsWithPrefix<
  'shadow',
  BaseSemanticColor
>
export type DimFunctionalColor = StartsWithPrefix<'dim', BaseSemanticColor>

export type FunctionalColor =
  | BackgroundFunctionalColor
  | ForegroundFunctionalColor
  | SurfaceFunctionalColor
  | ShadowFunctionalColor
  | DimFunctionalColor

export type SemanticColor = StartsWithPrefix<
  'primary' | 'critical' | 'warning' | 'accent' | 'success',
  BaseSemanticColor
>

export type Color = GlobalColor | FunctionalColor | SemanticColor

export type Radius = RemovePrefix<'alpha-radius', keyof GlobalToken['radius']>
export type Opacity = RemovePrefix<
  'alpha-opacity',
  keyof GlobalToken['opacity']
>
export type Font = RemovePrefix<'alpha-font', keyof GlobalToken['font']>
export type Typography = RemovePrefix<
  'alpha-typography',
  keyof GlobalToken['typography']
>
export type SourceSize = RemovePrefix<
  'alpha-source-size',
  keyof GlobalToken['source-size']
>
export type GlobalGradient = RemovePrefix<
  'alpha-gradient',
  keyof GlobalToken['gradient']
>

export type Shadow = RemovePrefix<'alpha-shadow', keyof SemanticToken['shadow']>
export type FunctionalGradient = RemovePrefix<
  'alpha-gradient',
  keyof SemanticToken['gradient']
>
