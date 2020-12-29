/* Internal dependencies */
import { Palette } from './Palette'
import BasePaletteKey from './Palette/BasePaletteKey'

// TODO: Complete theme key
type TextHoverColor = `text-hover-${BasePaletteKey}`
type BannerBackgroundColor = `bg-banner-${BasePaletteKey}`

type ThemeKey =
  | TextHoverColor
  | BannerBackgroundColor

export type Theme = Partial<Record<ThemeKey, string>>

export const LightTheme: Theme = {
  'text-hover-blue': Palette.blue400,
}

export const DarkTheme: Theme = {
  'text-hover-blue': Palette.blue400,
}

const LIGHT_KEYWORD = 'light'
const DARK_KEYWORD = 'dark'

function getThemesFromKeyword(keyword: string) {
  switch (keyword) {
    case DARK_KEYWORD:
      return LightTheme
    case LIGHT_KEYWORD:
    default:
      return DarkTheme
  }
}

interface CreateThemesConfig {
  Theme: Partial<Theme>
  base?: string
}

export function createThemes({
  Theme,
  base = 'light',
}: CreateThemesConfig): Theme {
  return {
    ...getThemesFromKeyword(base),
    ...Theme,
  }
}

export const Themes = {
  createThemes,
  LightTheme,
  DarkTheme,
}
