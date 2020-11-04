/* Internal dependencies */
import Palette from './Palette'

export interface Colors {
  textBase: string
  text7?: string
  text5?: string

  // Backgrounds
  background5?: string
  background3?: string
  background2?: string
  background1?: string
  background0?: string

  // Disabled
  disabled3?: string
  disabled5?: string

  // Borders
  border7?: string
  border5?: string
  border3?: string
  border2?: string
  border1?: string
  border0?: string

  // Success
  success1?: string
  success1Hover?: string

  // Default
  default1?: string
  default1Hover?: string

  // Handle
  handle5?: string
  handle2?: string
  handle1?: string

  // Shadow
  shadow1?: string

  // Icon
  iconBase?: string

  // Sidebar
  focus5?: string
  focus4?: string
  focus1?: string
}

export const Light: Colors = {
  textBase: Palette.grey900,
  text7: Palette.grey700,
  text5: Palette.grey500,
  background5: Palette.grey500,
  background3: Palette.grey300,
  background2: Palette.grey200,
  background1: Palette.grey100,
  background0: Palette.white,
  border7: Palette.grey700,
  border5: Palette.grey500,
  border3: Palette.grey300,
  border2: Palette.grey200,
  border1: Palette.grey100,
  border0: Palette.white,
  disabled3: Palette.grey300,
  disabled5: Palette.grey500,
  success1: Palette.green400,
  success1Hover: Palette.green500,
  default1: Palette.grey300,
  default1Hover: Palette.grey500,
  handle5: Palette.grey500,
  handle2: Palette.grey200,
  handle1: Palette.white,
  shadow1: Palette.black15,
  iconBase: Palette.grey700,
  focus5: Palette.blue500,
  focus4: Palette.blue400,
  focus1: Palette.blue100,
}

export const Dark: Colors = {
  textBase: Palette.grey100,
  background2: Palette.grey900,
  background1: Palette.grey700,
}

const LIGHT_KEYWORD = 'light'
const DARK_KEYWORD = 'dark'

interface CreateColorsConfig {
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
}: CreateColorsConfig): Colors {
  return {
    ...getColorsFromKeyword(base),
    ...colors,
  }
}

export default {
  Light,
  Dark,
}
