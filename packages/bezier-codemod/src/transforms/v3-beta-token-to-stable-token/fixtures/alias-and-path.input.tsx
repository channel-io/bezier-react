import {
  betaTokens as betaTokenStore,
  type BetaThemeName as BezierThemeName,
} from '@channel.io/bezier-tokens/beta'
import type {
  BetaBackgroundSemanticColor,
  BetaRadius,
} from '@channel.io/bezier-react'

export {
  betaTokens,
  type BetaFlattenAllToken,
} from '@channel.io/bezier-tokens/beta'

const cssPath = '@channel.io/bezier-tokens/dist/beta/css/styles.css'
const scssPath = '@channel.io/bezier-tokens/dist/beta/scss'
const exportedCssPath = '@channel.io/bezier-tokens/beta/css/styles.css'
const exportedScssPath = '@channel.io/bezier-tokens/beta/scss'

type Surface = BetaBackgroundSemanticColor
type LocalRadius = BetaRadius
type Theme = BezierThemeName

export { betaTokenStore, cssPath, exportedCssPath, exportedScssPath, scssPath }
export type { LocalRadius, Surface, Theme }
