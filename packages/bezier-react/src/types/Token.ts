import { type tokens } from '@channel.io/bezier-tokens'

type RemovePrefix<
  Prefix extends string,
  Value extends string,
> = Value extends `${Prefix}-${infer Rest}` ? Rest : never

export type GlobalToken = typeof tokens.global
export type SemanticToken = typeof tokens.lightTheme | typeof tokens.darkTheme

export type GlobalColor = keyof GlobalToken['color']
export type Font = RemovePrefix<'font', keyof GlobalToken['font']>
export type Opacity = RemovePrefix<'opacity', keyof GlobalToken['opacity']>
export type Radius = RemovePrefix<'radius', keyof GlobalToken['radius']>
export type Transition = RemovePrefix<'transition', keyof GlobalToken['transition']>
export type Typography = RemovePrefix<'typography', keyof GlobalToken['typography']>
export type ZIndex = RemovePrefix<'z-index', keyof GlobalToken['z-index']>

export type SemanticColor = keyof SemanticToken['color']
export type Elevation = RemovePrefix<'ev', keyof SemanticToken['elevation']>
export type InputShadow = RemovePrefix<'input', keyof SemanticToken['input']>
