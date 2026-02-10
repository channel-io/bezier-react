/**
 * v3 (Beta) Elevation
 *
 * main 브랜치의 packages/bezier-tokens/src/beta/semantic/elevation.json 기반
 * 색상은 ThemeVars로 주입되는 CSS variable 참조
 */

const small = 'var(--color-elevation-small)'
const base = 'var(--color-elevation-base)'
const baseInner = 'var(--color-elevation-base-inner)'

export const BetaElevation = {
  1: `0 1px 2px 0 ${small}, 0 0 2px 1px ${base}, inset 0 0 2px 0 ${baseInner}`,
  2: `0 2px 6px 0 ${small}, 0 0 2px 1px ${base}, inset 0 0 2px 0 ${baseInner}`,
  3: `0 4px 12px 0 ${small}, 0 0 2px 1px ${base}, inset 0 0 2px 0 ${baseInner}`,
  4: `0 4px 24px 0 ${small}, 0 0 2px 1px ${base}, inset 0 0 2px 0 ${baseInner}`,
  5: `0 6px 40px 0 ${small}, 0 0 2px 1px ${base}, inset 0 0 2px 0 ${baseInner}`,
  6: `0 12px 60px 0 ${small}, 0 0 2px 1px ${base}, inset 0 0 2px 0 ${baseInner}`,
} as const

