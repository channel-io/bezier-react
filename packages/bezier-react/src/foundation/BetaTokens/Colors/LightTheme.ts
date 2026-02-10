/**
 * v3 (Beta) Light Theme
 *
 * main 브랜치의 packages/bezier-tokens/src/beta/semantic/light-theme/color.json 기반
 * 시맨틱 키 → BetaPalette 값 매핑
 */

import { BetaPalette } from './Palette'

const BetaLightTheme = {
  // Text
  'color-text-action': BetaPalette['color-blue-400'],
  'color-text-success': BetaPalette['color-green-400'],
  'color-text-highlight': BetaPalette['color-cobalt-400'],
  'color-text-warning': BetaPalette['color-orange-400'],
  'color-text-critical': BetaPalette['color-red-400'],
  'color-text-neutral-heaviest': BetaPalette['color-black-100'],
  'color-text-neutral': BetaPalette['color-black-85'],
  'color-text-neutral-light': BetaPalette['color-black-60'],
  'color-text-neutral-lighter': BetaPalette['color-black-40'],
  'color-text-accent-blue': BetaPalette['color-blue-400'],
  'color-text-accent-cobalt': BetaPalette['color-cobalt-400'],
  'color-text-accent-green': BetaPalette['color-green-400'],
  'color-text-accent-red': BetaPalette['color-red-400'],
  'color-text-accent-orange': BetaPalette['color-orange-400'],
  'color-text-accent-yellow': BetaPalette['color-yellow-400'],
  'color-text-accent-olive': BetaPalette['color-olive-300'],
  'color-text-accent-teal': BetaPalette['color-teal-400'],
  'color-text-accent-navy': BetaPalette['color-navy-400'],
  'color-text-accent-purple': BetaPalette['color-purple-400'],
  'color-text-accent-pink': BetaPalette['color-pink-400'],
  'color-text-absolute-white': BetaPalette['color-white-100'],
  'color-text-absolute-black': BetaPalette['color-black-100'],
  'color-text-inverse': BetaPalette['color-white-100'],

  // Icon
  'color-icon-action': BetaPalette['color-blue-400'],
  'color-icon-success': BetaPalette['color-green-400'],
  'color-icon-highlight': BetaPalette['color-cobalt-400'],
  'color-icon-warning': BetaPalette['color-orange-400'],
  'color-icon-critical': BetaPalette['color-red-400'],
  'color-icon-neutral': BetaPalette['color-black-40'],
  'color-icon-neutral-heavy': BetaPalette['color-black-60'],
  'color-icon-neutral-heavier': BetaPalette['color-black-85'],
  'color-icon-accent-blue': BetaPalette['color-blue-400'],
  'color-icon-accent-cobalt': BetaPalette['color-cobalt-400'],
  'color-icon-accent-green': BetaPalette['color-green-400'],
  'color-icon-accent-red': BetaPalette['color-red-400'],
  'color-icon-accent-orange': BetaPalette['color-orange-400'],
  'color-icon-accent-yellow': BetaPalette['color-yellow-400'],
  'color-icon-accent-olive': BetaPalette['color-olive-400'],
  'color-icon-accent-teal': BetaPalette['color-teal-400'],
  'color-icon-accent-navy': BetaPalette['color-navy-400'],
  'color-icon-accent-purple': BetaPalette['color-purple-400'],
  'color-icon-accent-pink': BetaPalette['color-pink-400'],
  'color-icon-absolute-white': BetaPalette['color-white-100'],
  'color-icon-absolute-black': BetaPalette['color-black-100'],
  'color-icon-inverse-heavier': BetaPalette['color-white-100'],

  // Fill - Neutral
  'color-fill-neutral-heaviest': BetaPalette['color-black-85'],
  'color-fill-neutral-heavier': BetaPalette['color-black-40'],
  'color-fill-neutral-heavy': BetaPalette['color-black-15'],
  'color-fill-neutral-light': BetaPalette['color-black-5'],
  'color-fill-neutral-lighter': BetaPalette['color-black-3'],
  'color-fill-neutral-lightest': BetaPalette['color-black-1'],
  'color-fill-neutral-transparent': BetaPalette['color-black-0'],

  // Fill - Semantic
  'color-fill-action': BetaPalette['color-blue-400'],
  'color-fill-action-light': BetaPalette['color-blue-400-20'],
  'color-fill-action-lighter': BetaPalette['color-blue-400-10'],
  'color-fill-action-transparent': BetaPalette['color-blue-400-0'],
  'color-fill-success': BetaPalette['color-green-400'],
  'color-fill-success-light': BetaPalette['color-green-400-20'],
  'color-fill-success-lighter': BetaPalette['color-green-400-10'],
  'color-fill-success-transparent': BetaPalette['color-green-400-0'],
  'color-fill-highlight': BetaPalette['color-cobalt-400'],
  'color-fill-highlight-light': BetaPalette['color-cobalt-400-20'],
  'color-fill-highlight-lighter': BetaPalette['color-cobalt-400-10'],
  'color-fill-highlight-transparent': BetaPalette['color-cobalt-400-0'],
  'color-fill-warning': BetaPalette['color-orange-400'],
  'color-fill-warning-light': BetaPalette['color-orange-400-20'],
  'color-fill-warning-lighter': BetaPalette['color-orange-400-10'],
  'color-fill-warning-transparent': BetaPalette['color-orange-400-0'],
  'color-fill-critical': BetaPalette['color-red-400'],
  'color-fill-critical-light': BetaPalette['color-red-400-20'],
  'color-fill-critical-lighter': BetaPalette['color-red-400-10'],
  'color-fill-critical-transparent': BetaPalette['color-red-400-0'],

  // Fill - Grey
  'color-fill-grey-light': BetaPalette['color-grey-25'],
  'color-fill-grey': BetaPalette['color-grey-50'],
  'color-fill-grey-heavy': BetaPalette['color-grey-100'],
  'color-fill-grey-heavier': BetaPalette['color-grey-200'],

  // Fill - Accent
  'color-fill-accent-blue': BetaPalette['color-blue-400-10'],
  'color-fill-accent-blue-heavy': BetaPalette['color-blue-400-20'],
  'color-fill-accent-blue-heavier': BetaPalette['color-blue-400'],
  'color-fill-accent-blue-transparent': BetaPalette['color-blue-400-0'],
  'color-fill-accent-cobalt': BetaPalette['color-cobalt-400-10'],
  'color-fill-accent-cobalt-heavy': BetaPalette['color-cobalt-400-20'],
  'color-fill-accent-cobalt-heavier': BetaPalette['color-cobalt-400'],
  'color-fill-accent-cobalt-transparent': BetaPalette['color-cobalt-400-0'],
  'color-fill-accent-green': BetaPalette['color-green-400-10'],
  'color-fill-accent-green-heavy': BetaPalette['color-green-400-20'],
  'color-fill-accent-green-heavier': BetaPalette['color-green-400'],
  'color-fill-accent-green-transparent': BetaPalette['color-green-400-0'],
  'color-fill-accent-red': BetaPalette['color-red-400-10'],
  'color-fill-accent-red-heavy': BetaPalette['color-red-400-20'],
  'color-fill-accent-red-heavier': BetaPalette['color-red-400'],
  'color-fill-accent-red-transparent': BetaPalette['color-red-400-0'],
  'color-fill-accent-orange': BetaPalette['color-orange-400-10'],
  'color-fill-accent-orange-heavy': BetaPalette['color-orange-400-20'],
  'color-fill-accent-orange-heavier': BetaPalette['color-orange-400'],
  'color-fill-accent-orange-transparent': BetaPalette['color-orange-400-0'],
  'color-fill-accent-yellow': BetaPalette['color-yellow-400-10'],
  'color-fill-accent-yellow-heavy': BetaPalette['color-yellow-400-20'],
  'color-fill-accent-yellow-heavier': BetaPalette['color-yellow-400'],
  'color-fill-accent-yellow-transparent': BetaPalette['color-yellow-400-0'],
  'color-fill-accent-olive': BetaPalette['color-olive-400-10'],
  'color-fill-accent-olive-heavy': BetaPalette['color-olive-400-20'],
  'color-fill-accent-olive-heavier': BetaPalette['color-olive-400'],
  'color-fill-accent-olive-transparent': BetaPalette['color-olive-400-0'],
  'color-fill-accent-teal': BetaPalette['color-teal-400-10'],
  'color-fill-accent-teal-heavy': BetaPalette['color-teal-400-20'],
  'color-fill-accent-teal-heavier': BetaPalette['color-teal-400'],
  'color-fill-accent-teal-transparent': BetaPalette['color-teal-400-0'],
  'color-fill-accent-navy': BetaPalette['color-navy-400-10'],
  'color-fill-accent-navy-heavy': BetaPalette['color-navy-400-20'],
  'color-fill-accent-navy-heavier': BetaPalette['color-navy-400'],
  'color-fill-accent-navy-transparent': BetaPalette['color-navy-400-0'],
  'color-fill-accent-purple': BetaPalette['color-purple-400-10'],
  'color-fill-accent-purple-heavy': BetaPalette['color-purple-400-20'],
  'color-fill-accent-purple-heavier': BetaPalette['color-purple-400'],
  'color-fill-accent-purple-transparent': BetaPalette['color-purple-400-0'],
  'color-fill-accent-pink': BetaPalette['color-pink-400-10'],
  'color-fill-accent-pink-heavy': BetaPalette['color-pink-400-20'],
  'color-fill-accent-pink-heavier': BetaPalette['color-pink-400'],
  'color-fill-accent-pink-transparent': BetaPalette['color-pink-400-0'],

  // Fill - Absolute
  'color-fill-absolute-white': BetaPalette['color-white-100'],
  'color-fill-absolute-white-light': BetaPalette['color-white-20'],
  'color-fill-absolute-white-transparent': BetaPalette['color-white-0'],
  'color-fill-absolute-black': BetaPalette['color-black-100'],
  'color-fill-absolute-black-light': BetaPalette['color-black-20'],
  'color-fill-absolute-black-transparent': BetaPalette['color-black-0'],

  // Fill - Bright
  'color-fill-bright': BetaPalette['color-grey-25'],

  // Border
  'color-border-neutral': BetaPalette['color-black-8'],
  'color-border-neutral-heavy': BetaPalette['color-black-15'],
  'color-border-neutral-heavier': BetaPalette['color-black-40'],
  'color-border-detach': BetaPalette['color-white-100'],
  'color-border-detach-highest': BetaPalette['color-white-100'],
  'color-border-detach-higher': BetaPalette['color-white-100'],
  'color-border-detach-high': BetaPalette['color-white-100'],
  'color-border-detach-low': BetaPalette['color-grey-50'],
  'color-border-absolute-white': BetaPalette['color-white-100'],

  // Surface
  'color-surface': BetaPalette['color-white-100'],
  'color-surface-highest': BetaPalette['color-white-100'],
  'color-surface-higher': BetaPalette['color-white-100'],
  'color-surface-high': BetaPalette['color-white-100'],
  'color-surface-low': BetaPalette['color-grey-50'],
  'color-surface-glass': BetaPalette['color-white-90'],
  'color-surface-glass-highest': BetaPalette['color-grey-200-90'],
  'color-surface-glass-higher': BetaPalette['color-grey-100-90'],
  'color-surface-glass-high': BetaPalette['color-white-90'],

  // Dim
  'color-dim-absolute-black': BetaPalette['color-black-40'],
  'color-dim-absolute-black-heavy': BetaPalette['color-black-60'],
  'color-dim-absolute-white': BetaPalette['color-white-40'],
  'color-dim-absolute-white-heavy': BetaPalette['color-white-60'],

  // Gradient
  'color-gradient-green': BetaPalette['color-green-400'],
  'color-gradient-green-heavy': BetaPalette['color-green-300'],

  // State
  'color-state-default': BetaPalette['color-black-15'],
  'color-state-action': BetaPalette['color-blue-400'],
  'color-state-action-light': BetaPalette['color-blue-400-30'],
  'color-state-warning': BetaPalette['color-orange-400'],
  'color-state-warning-light': BetaPalette['color-orange-400-30'],

  // Elevation
  'color-elevation-xlarge': BetaPalette['color-black-30'],
  'color-elevation-large': BetaPalette['color-black-22'],
  'color-elevation-medium': BetaPalette['color-black-15'],
  'color-elevation-small': BetaPalette['color-black-8'],
  'color-elevation-base': BetaPalette['color-black-5'],
  'color-elevation-base-inner': BetaPalette['color-white-12'],

  // Chart
  'color-chart-theme-default-01': '#7c72fd',
  'color-chart-theme-default-02': '#81dfdd',
  'color-chart-theme-default-03': '#fc9783',
  'color-chart-theme-default-04': '#b1596a',
  'color-chart-theme-default-05': '#fe71ba',
  'color-chart-theme-default-06': '#c971ec',
  'color-chart-theme-default-07': '#4a75e3',
  'color-chart-theme-default-08': '#80b6fd',
  'color-chart-theme-default-09': '#fb90f1',
  'color-chart-theme-default-10': '#b4d6e5',
} as const

export default BetaLightTheme

export type BetaSemanticNames = keyof typeof BetaLightTheme
export type BetaThemeType = Record<BetaSemanticNames, string>
