import {
  tokens as betaTokenStore,
  type ThemeName as BezierThemeName,
} from '@channel.io/bezier-tokens'
import type {
  BackgroundSemanticColor,
  Radius,
} from '@channel.io/bezier-react'

export {
  tokens,
  type FlattenAllToken,
} from '@channel.io/bezier-tokens'

const cssPath = '@channel.io/bezier-tokens/css/styles.css'
const scssPath = '@channel.io/bezier-tokens/dist/scss'
const exportedCssPath = '@channel.io/bezier-tokens/css/styles.css'
const exportedScssPath = '@channel.io/bezier-tokens/scss'

type Surface = BackgroundSemanticColor
type LocalRadius = Radius
type Theme = BezierThemeName

export { betaTokenStore, cssPath, exportedCssPath, exportedScssPath, scssPath }
export type { LocalRadius, Surface, Theme }
