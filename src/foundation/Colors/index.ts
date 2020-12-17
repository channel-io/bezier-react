/* Internal dependencies */
import { Palette } from '../Palette'
import Spectrum from '../Palette/Spectrum'

type TextHoverColor = `text-hover-${Spectrum}`
type BannerBackgroundColor = `bg-banner-${Spectrum}`

export type Color =
  Partial<
  Record<TextHoverColor, string> &
  Record<BannerBackgroundColor, string>
  >

type Opacity = 30 | 20 | 10

function getOpacityColor(HEX: string, opacity: Opacity) {
  const opacityHEX = (() => {
    switch (opacity) {
      case 30:
        return '4D'
      case 20:
        return '33'
      case 10:
      default:
        return '1A'
    }
  })()

  return `${HEX}${opacityHEX}`
}

interface GetColorParams {
  baseColor: {
    [key in Exclude<Spectrum, Spectrum.grey>]: [string, string]
  }
  isDarkColor?: boolean
}

function getColor({ baseColor }: GetColorParams): Color {
  // TODO: 용법 별로 color 이름 정할 것
  return {
    // Text Hover
    'text-hover-blue': baseColor.blue[0],
    'text-hover-cobalt': baseColor.cobalt[0],

    // Banner Background
    'bg-banner-blue': getOpacityColor(baseColor.blue[0], 30),
    'bg-banner-cobalt': getOpacityColor(baseColor.cobalt[0], 30),
  }
}

export const LightColor: Color = getColor({
  baseColor: {
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

export const DarkColor: Color = getColor({
  baseColor: {
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
  isDarkColor: true,
})

const LIGHT_KEYWORD = 'light'
const DARK_KEYWORD = 'dark'

function getColorsFromKeyword(keyword: string) {
  switch (keyword) {
    case DARK_KEYWORD:
      return LightColor
    case LIGHT_KEYWORD:
    default:
      return DarkColor
  }
}

interface CreateColorsConfig {
  color: Partial<Color>
  base?: string
}

export function createColors({
  color,
  base = 'light',
}: CreateColorsConfig): Color {
  return {
    ...getColorsFromKeyword(base),
    ...color,
  }
}

export const Colors = {
  createColors,
  LightColor,
  DarkColor,
}
