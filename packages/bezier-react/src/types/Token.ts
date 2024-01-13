import { type tokens } from '@channel.io/bezier-tokens'

type RemovePrefix<
  Prefix extends string,
  Value extends string,
> = Value extends `${Prefix}-${infer Rest}` ? Rest : never

type StartsWithPrefix<
  Prefix extends string,
  Value extends string,
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  > = Value extends `${Prefix}-${infer Rest}` ? Value : never

type ExtractKeys<T> = T extends Record<infer K, any> ? K : never

export type GlobalToken = typeof tokens.global
export type SemanticToken = typeof tokens.lightTheme | typeof tokens.darkTheme

export type FlattenGlobalToken = ExtractKeys<GlobalToken[keyof GlobalToken]>
export type FlattenSemanticToken = ExtractKeys<SemanticToken[keyof SemanticToken]>
export type FlattenAllToken = FlattenGlobalToken | FlattenSemanticToken

export enum TokenPrefix {
  Font = 'font',
  Opacity = 'opacity',
  Radius = 'radius',
  Transition = 'transition',
  ZIndex = 'z-index',
  Elevation = 'ev',
  Input = 'input',
}

export type GlobalColor = keyof GlobalToken['color']
export type Font = RemovePrefix<TokenPrefix.Font, keyof GlobalToken['font']>
export type Opacity = RemovePrefix<TokenPrefix.Opacity, keyof GlobalToken['opacity']>
export type Radius = RemovePrefix<TokenPrefix.Radius, keyof GlobalToken['radius']>
export type Transition = RemovePrefix<TokenPrefix.Transition, keyof GlobalToken['transition']>
export type ZIndex = RemovePrefix<TokenPrefix.ZIndex, keyof GlobalToken['z-index']>

export type SemanticColor = keyof SemanticToken['color']
export type BackgroundSemanticColor = StartsWithPrefix<'bg', SemanticColor>
export type BackgroundTextSemanticColor = StartsWithPrefix<'bgtxt', SemanticColor>
export type TextSemanticColor = StartsWithPrefix<'txt', SemanticColor>
export type BorderSemanticColor = StartsWithPrefix<'bdr', SemanticColor>
export type ShadowSemanticColor = StartsWithPrefix<'shdw', SemanticColor>

export type Elevation = Exclude<RemovePrefix<TokenPrefix.Elevation, keyof SemanticToken['elevation']>, 'base' | 'inner'>
export type InputShadow = RemovePrefix<TokenPrefix.Input, keyof SemanticToken['input']>
