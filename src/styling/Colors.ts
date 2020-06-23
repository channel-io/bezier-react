/* Internal dependencies */
import Palette from './Palette'

export interface Colors {
  textBase?: string

  // Backgrounds
  background2?: string
  background1?: string
}

export const LightColors: Colors = {
  textBase: Palette.grey900,
  background2: Palette.grey200,
  background1: Palette.grey100,
}

export const DarkColors: Colors = {
  textBase: Palette.grey100,
  background2: Palette.grey900,
  background1: Palette.grey700,
}

const LIGHT_KEYWORD = 'light'
const DARK_KEYWORD = 'dark'

interface createColorsConfig {
  colors: Partial<Colors>
  base?: string
}

function getColorsFromKeyword(keyword: string) {
  switch (keyword) {
    case DARK_KEYWORD:
      return DarkColors
    case LIGHT_KEYWORD:
    default:
      return LightColors
  }
}

export function createColors({
  colors,
  base = 'light',
}: createColorsConfig): Colors {
  return {
    ...getColorsFromKeyword(base),
    ...colors,
  }
}

export default {
  LightColors,
  DarkColors,
}
