/* Internal dependencies */
import Palette from './Palette'

export interface Colors {
  textBase: string
}

export const LightColors: Colors = {
  textBase: Palette.grey900,
}

export const DarkColors: Colors = {
  textBase: Palette.grey100,
}

const LIGHT_KEYWORD = 'light'
const DARK_KEYWORD = 'dark'

interface createColorsConfig {
  colors: Partial<Colors>
  base?: string
}

function getColorsFromKeyword(keyword: string) {
  switch (keyword) {
    case LIGHT_KEYWORD:
      return DarkColors
    case DARK_KEYWORD:
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
