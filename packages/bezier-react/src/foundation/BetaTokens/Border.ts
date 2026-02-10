/**
 * v3 (Beta) Border
 *
 * main 브랜치의 packages/bezier-tokens/src/beta/semantic/border.json 기반
 * 색상은 ThemeVars로 주입되는 CSS variable 참조
 */

const neutral = 'var(--color-border-neutral)'
const surfaceHigh = 'var(--color-surface-high)'
const surfaceHigher = 'var(--color-surface-higher)'
const surfaceHighest = 'var(--color-surface-highest)'

export const BetaBorder = {
  default: `0 0 0 1px ${neutral}`,
  bottom: `0 -1px 0 0 ${neutral}`,
  right: `-1px 0 0 0 ${neutral}`,
  left: `1px 0 0 0 ${neutral}`,
  top: `0 1px 0 0 ${neutral}`,
  'white-high': `0 0 0 1px ${surfaceHigh}`,
  'white-higher': `0 0 0 1px ${surfaceHigher}`,
  'white-highest': `0 0 0 1px ${surfaceHighest}`,
} as const

