/* Internal dependencies */
import type { ThemeType, SemanticNames } from './Theme'
import { LightTheme, DarkTheme } from './Theme'

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
  theme: Partial<ThemeType>
  base?: string
}

export function createThemes({
  theme,
  base = 'light',
}: CreateThemesConfig): ThemeType {
  return {
    ...getThemesFromKeyword(base),
    ...theme,
  }
}

// To prevent circular dependency, re-export type from here.
export type Theme = ThemeType

export type { SemanticNames }

export const Themes = {
  createThemes,
  LightTheme,
  DarkTheme,
}
