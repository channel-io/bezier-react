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
export type ThemeToken = typeof tokens.lightTheme | typeof tokens.darkTheme

// NOTE: (@ed) Do not remove alpha- prefix to match CSS variable names
export type FlattenGlobalToken = ExtractKeys<GlobalToken[keyof GlobalToken]>
export type FlattenThemeToken = ExtractKeys<ThemeToken[keyof ThemeToken]>
export type FlattenAllToken = FlattenGlobalToken | FlattenThemeToken

export type GlobalColor = RemovePrefix<
  'alpha-color',
  keyof GlobalToken['color']
>

/**
 * Functional & Semantic color tokens
 */
export type ThemeColor = RemovePrefix<'alpha-color', keyof ThemeToken['color']>

export type BackgroundFunctionalColor = StartsWithPrefix<'bg', ThemeColor>
export type ForegroundFunctionalColor = StartsWithPrefix<'fg', ThemeColor>
export type SurfaceFunctionalColor = StartsWithPrefix<'surface', ThemeColor>
export type ShadowFunctionalColor = StartsWithPrefix<'shadow', ThemeColor>
export type DimFunctionalColor = StartsWithPrefix<'dim', ThemeColor>

export type FunctionalColor =
  | BackgroundFunctionalColor
  | ForegroundFunctionalColor
  | SurfaceFunctionalColor
  | ShadowFunctionalColor
  | DimFunctionalColor

export type SemanticColor = StartsWithPrefix<
  'primary' | 'critical' | 'warning' | 'accent' | 'success',
  ThemeColor
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
export type GlobalGradient = RemovePrefix<
  'alpha-gradient',
  keyof GlobalToken['gradient']
>

export type Shadow = RemovePrefix<'alpha-shadow', keyof ThemeToken['shadow']>
export type FunctionalGradient = RemovePrefix<
  'alpha-gradient',
  keyof ThemeToken['gradient']
>
