/* Internal dependencies */
import Palette from './Palette'

export interface Colors {
  textBase: string

  // Backgrounds
  background3?: string
  background2?: string
  background1?: string

  // Disabled
  disabled3?: string

  // Borders
  border3?: string
  border2?: string

  // Success
  success1?: string
  success1Hover?: string

  // Default
  default1?: string
  default1Hover?: string

  // Handle
  handle1?: string

  // Shadow
  shadow1?: string

  // Icon
  iconBase?: string
}

export const Light: Colors = {
  textBase: Palette.grey900,
  background3: Palette.grey300,
  background2: Palette.grey200,
  background1: Palette.grey100,
  disabled3: Palette.grey300,
  border3: Palette.grey300,
  border2: Palette.grey200,
  success1: Palette.green400,
  success1Hover: Palette.green500,
  default1: Palette.grey300,
  default1Hover: Palette.grey500,
  handle1: Palette.white,
  shadow1: Palette.black15,
  iconBase: Palette.grey700,
}

export const Dark: Colors = {
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
      return Dark
    case LIGHT_KEYWORD:
    default:
      return Light
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
  Light,
  Dark,
}
