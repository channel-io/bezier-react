/* Internal dependencies */
import { Palette } from './Palette'
import Spectrum from './Palette/Spectrum'
import { getOpacityTheme } from './utils'

type TextHoverColor = `text-hover-${Spectrum}`
type BannerBackgroundColor = `bg-banner-${Spectrum}`

export type Theme =
  Partial<
  Record<TextHoverColor, string> &
  Record<BannerBackgroundColor, string>
  >

interface GetThemeParams {
  baseTheme: {
    [key in Exclude<Spectrum, Spectrum.grey>]: [string, string]
  }
  isDarkTheme?: boolean
}

function getTheme({ baseTheme }: GetThemeParams): Theme {
  // TODO: 용법 별로 Theme 이름 정할 것
  return {
    // Text Hover
    'text-hover-blue': baseTheme.blue[0],
    'text-hover-cobalt': baseTheme.cobalt[0],

    // Banner Background
    'bg-banner-blue': getOpacityTheme(baseTheme.blue[0], 30),
    'bg-banner-cobalt': getOpacityTheme(baseTheme.cobalt[0], 30),
  }
}

export const LightTheme: Theme = getTheme({
  baseTheme: {
    blue: [Palette.blue400, Palette.blue500],
    cobalt: [Palette.cobalt400, Palette.cobalt500],
    teal: [Palette.teal400, Palette.teal500],
    green: [Palette.green400, Palette.green500],
    olive: [Palette.olive400, Palette.olive500],
    yellow: [Palette.yellow400, Palette.yellow500],
    orange: [Palette.orange400, Palette.orange500],
    red: [Palette.red400, Palette.red500],
    pink: [Palette.pink400, Palette.pink500],
    purple: [Palette.purple400, Palette.purple500],
    navy: [Palette.navy400, Palette.navy500],
  },
})

export const DarkTheme: Theme = getTheme({
  baseTheme: {
    blue: [Palette.blue300, Palette.blue400],
    cobalt: [Palette.cobalt300, Palette.cobalt400],
    teal: [Palette.teal300, Palette.teal400],
    green: [Palette.green300, Palette.green400],
    olive: [Palette.olive300, Palette.olive400],
    yellow: [Palette.yellow300, Palette.yellow400],
    orange: [Palette.orange300, Palette.orange400],
    red: [Palette.red300, Palette.red400],
    pink: [Palette.pink300, Palette.pink400],
    purple: [Palette.purple300, Palette.purple400],
    navy: [Palette.navy300, Palette.navy400],
  },
  isDarkTheme: true,
})

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
