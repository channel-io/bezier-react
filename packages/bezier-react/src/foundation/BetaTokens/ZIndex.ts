/**
 * v3 (Beta) Z-Index
 *
 * main 브랜치의 packages/bezier-tokens/src/beta/semantic/layer.json 기반
 */

export const BetaZIndex = {
  hidden: -1,
  base: 0,
  floating: 1,
  overlay: 1000,
  modal: 1100,
  toast: 1200,
  tooltip: 1300,
  important: 2000,
} as const
