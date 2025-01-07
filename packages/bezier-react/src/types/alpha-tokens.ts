import { type tokens } from '@channel.io/bezier-tokens/alpha'

import {
  type ExtractKeys,
  type RemovePrefix,
  type StartsWithPrefix,
} from './utils'

// TODO: Change theme name constant to import from bezier-tokens
export type ThemeName = 'light' | 'dark'

export type GlobalToken = typeof tokens.global
export type SemanticToken = typeof tokens.lightTheme | typeof tokens.darkTheme

// NOTE: (@ed) Do not remove alpha- prefix to match CSS variable names
export type FlattenGlobalToken = ExtractKeys<GlobalToken[keyof GlobalToken]>
export type FlattenSemanticToken = ExtractKeys<
  SemanticToken[keyof SemanticToken]
>
export type FlattenAllToken = FlattenGlobalToken | FlattenSemanticToken

export type GlobalColor = RemovePrefix<'alpha', keyof GlobalToken['color']>

export type FunctionalAndSemanticColor = RemovePrefix<
  'alpha',
  keyof SemanticToken['color']
>

export type Color = GlobalColor | FunctionalAndSemanticColor

export type BackgroundFunctionalColor = StartsWithPrefix<
  'bg',
  FunctionalAndSemanticColor
>
export type ForegroundFunctionalColor = StartsWithPrefix<
  'fg',
  FunctionalAndSemanticColor
>
export type SurfaceFunctionalColor = StartsWithPrefix<
  'surface',
  FunctionalAndSemanticColor
>
export type ShadowFunctionalColor = StartsWithPrefix<
  'shadow',
  FunctionalAndSemanticColor
>
export type DimFunctionalColor = StartsWithPrefix<
  'dim',
  FunctionalAndSemanticColor
>

export type FunctionalColor =
  | BackgroundFunctionalColor
  | ForegroundFunctionalColor
  | SurfaceFunctionalColor
  | ShadowFunctionalColor
  | DimFunctionalColor

export type SemanticColor = StartsWithPrefix<
  'primary' | 'critical' | 'warning' | 'accent' | 'success',
  FunctionalAndSemanticColor
>

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

export type Shadow = RemovePrefix<'alpha-shadow', keyof SemanticToken['shadow']>
export type FunctionalGradient = RemovePrefix<
  'alpha-gradient',
  keyof SemanticToken['gradient']
>
