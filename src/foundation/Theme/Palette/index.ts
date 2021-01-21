/* Internal dependencies */
import BasePaletteKey, {
  BaseMonoPaletteKey,
  BaseColorfulPaletteKey,
} from './BasePaletteKey'
import { getAlphaHex } from './utils'

type BaseColorfulPaletteKey300 = `${BaseColorfulPaletteKey}300`
type BaseColorfulPaletteKey400 = `${BaseColorfulPaletteKey}400`
type BaseColorfulPaletteKey500 = `${BaseColorfulPaletteKey}500`

type GreyKeyWithoutAlpha =
  | `${BasePaletteKey.grey}50`
  | `${BasePaletteKey.grey}100`
  | `${BasePaletteKey.grey}200`
  | `${BasePaletteKey.grey}700`
  | `${BasePaletteKey.grey}800`
  | `${BasePaletteKey.grey}850`
  | `${BasePaletteKey.grey}900`

export type PaletteKeyWithoutAlpha =
  | BaseColorfulPaletteKey300
  | BaseColorfulPaletteKey400
  | BaseColorfulPaletteKey500
  | GreyKeyWithoutAlpha
  | Exclude<BaseMonoPaletteKey, BasePaletteKey.grey>

export type PaletteWithoutAlphaType = Record<PaletteKeyWithoutAlpha, string>

const PaletteWithoutAlpha: PaletteWithoutAlphaType = {
  // Blue
  blue300: '#6688FF',
  blue400: '#5E56F0',
  blue500: '#4E40C9',

  // Cobalt
  cobalt300: '#5CCEFF',
  cobalt400: '#329BE7',
  cobalt500: '#327AB8',

  // Teal
  teal300: '#3CDDCD',
  teal400: '#0EB1A0',
  teal500: '#449C8A',

  // Green
  green300: '#4FD85F',
  green400: '#31A551',
  green500: '#41904F',

  // Olive
  olive300: '#CAD649',
  olive400: '#A0A540',
  olive500: '#818628',

  // Yellow
  yellow300: '#FDD353',
  yellow400: '#EDBC40',
  yellow500: '#C39E37',

  // Orange
  orange300: '#FFAB5E',
  orange400: '#F19639',
  orange500: '#C07A2A',

  // Red
  red300: '#F86363',
  red400: '#E94D56',
  red500: '#AC3E46',

  // Pink
  pink300: '#EC6FD3',
  pink400: '#CC48AD',
  pink500: '#A32E92',

  // Purple
  purple300: '#B570FF',
  purple400: '#915CE0',
  purple500: '#6B23B3',

  // Navy
  navy300: '#647CC9',
  navy400: '#3A4F8D',
  navy500: '#333D5B',

  // Grey
  grey50: '#FCFCFC',
  grey100: '#F6F6F7',
  grey200: '#F0F0F1',
  grey700: '#464748',
  grey800: '#313234',
  grey850: '#2A2B2D',
  grey900: '#242428',

  // White
  white: '#FFFFFF',

  // Black
  black: '#000000',
}

/* eslint-disable @typescript-eslint/naming-convention */
type BaseColorfulPaletteKey400_30 = `${BaseColorfulPaletteKey400}_30`
type BaseColorfulPaletteKey400_20 = `${BaseColorfulPaletteKey400}_20`
type BaseColorfulPaletteKey400_10 = `${BaseColorfulPaletteKey400}_10`

type BaseColorfulPaletteKey300_40 = `${BaseColorfulPaletteKey300}_40`
type BaseColorfulPaletteKey300_30 = `${BaseColorfulPaletteKey300}_30`
type BaseColorfulPaletteKey300_20 = `${BaseColorfulPaletteKey300}_20`
/* eslint-enable @typescript-eslint/naming-convention */

type AlphaGreyKey =
  | `${BasePaletteKey.grey}800_80`
  | `${BasePaletteKey.grey}700_80`
  | `${BasePaletteKey.grey}200_80`
  | `${BasePaletteKey.grey}100_80`

type AlphaWhiteKey =
  | `${BasePaletteKey.white}_90`
  | `${BasePaletteKey.white}_60`
  | `${BasePaletteKey.white}_40`
  | `${BasePaletteKey.white}_20`
  | `${BasePaletteKey.white}_12`
  | `${BasePaletteKey.white}_8`
  | `${BasePaletteKey.white}_5`

type AlphaBlackKey =
  | `${BasePaletteKey.black}_85`
  | `${BasePaletteKey.black}_60`
  | `${BasePaletteKey.black}_40`
  | `${BasePaletteKey.black}_20`
  | `${BasePaletteKey.black}_15`
  | `${BasePaletteKey.black}_8`
  | `${BasePaletteKey.black}_5`
  | `${BasePaletteKey.black}_3`

export type PaletteKey =
  | PaletteKeyWithoutAlpha
  | BaseColorfulPaletteKey400_30
  | BaseColorfulPaletteKey400_20
  | BaseColorfulPaletteKey400_10
  | BaseColorfulPaletteKey300_40
  | BaseColorfulPaletteKey300_30
  | BaseColorfulPaletteKey300_20
  | AlphaGreyKey
  | AlphaWhiteKey
  | AlphaBlackKey

export type PaletteType = Record<PaletteKey, string>

export const Palette: PaletteType = {
  ...PaletteWithoutAlpha,

  // Alpha Blue
  blue400_30: getAlphaHex(PaletteWithoutAlpha.blue400, 30),
  blue400_20: getAlphaHex(PaletteWithoutAlpha.blue400, 20),
  blue400_10: getAlphaHex(PaletteWithoutAlpha.blue400, 10),
  blue300_40: getAlphaHex(PaletteWithoutAlpha.blue300, 40),
  blue300_30: getAlphaHex(PaletteWithoutAlpha.blue300, 30),
  blue300_20: getAlphaHex(PaletteWithoutAlpha.blue300, 20),

  // Alpha Cobalt
  cobalt400_30: getAlphaHex(PaletteWithoutAlpha.cobalt400, 30),
  cobalt400_20: getAlphaHex(PaletteWithoutAlpha.cobalt400, 20),
  cobalt400_10: getAlphaHex(PaletteWithoutAlpha.cobalt400, 10),
  cobalt300_40: getAlphaHex(PaletteWithoutAlpha.cobalt300, 40),
  cobalt300_30: getAlphaHex(PaletteWithoutAlpha.cobalt300, 30),
  cobalt300_20: getAlphaHex(PaletteWithoutAlpha.cobalt300, 20),

  // Alpha Teal
  teal400_30: getAlphaHex(PaletteWithoutAlpha.teal400, 30),
  teal400_20: getAlphaHex(PaletteWithoutAlpha.teal400, 20),
  teal400_10: getAlphaHex(PaletteWithoutAlpha.teal400, 10),
  teal300_40: getAlphaHex(PaletteWithoutAlpha.teal300, 40),
  teal300_30: getAlphaHex(PaletteWithoutAlpha.teal300, 30),
  teal300_20: getAlphaHex(PaletteWithoutAlpha.teal300, 20),

  // Alpha Green
  green400_30: getAlphaHex(PaletteWithoutAlpha.green400, 30),
  green400_20: getAlphaHex(PaletteWithoutAlpha.green400, 20),
  green400_10: getAlphaHex(PaletteWithoutAlpha.green400, 10),
  green300_40: getAlphaHex(PaletteWithoutAlpha.green300, 40),
  green300_30: getAlphaHex(PaletteWithoutAlpha.green300, 30),
  green300_20: getAlphaHex(PaletteWithoutAlpha.green300, 20),

  // Alpha Olive
  olive400_30: getAlphaHex(PaletteWithoutAlpha.olive400, 30),
  olive400_20: getAlphaHex(PaletteWithoutAlpha.olive400, 20),
  olive400_10: getAlphaHex(PaletteWithoutAlpha.olive400, 10),
  olive300_40: getAlphaHex(PaletteWithoutAlpha.olive300, 40),
  olive300_30: getAlphaHex(PaletteWithoutAlpha.olive300, 30),
  olive300_20: getAlphaHex(PaletteWithoutAlpha.olive300, 20),

  // Alpha Yellow
  yellow400_30: getAlphaHex(PaletteWithoutAlpha.yellow400, 30),
  yellow400_20: getAlphaHex(PaletteWithoutAlpha.yellow400, 20),
  yellow400_10: getAlphaHex(PaletteWithoutAlpha.yellow400, 10),
  yellow300_40: getAlphaHex(PaletteWithoutAlpha.yellow300, 40),
  yellow300_30: getAlphaHex(PaletteWithoutAlpha.yellow300, 30),
  yellow300_20: getAlphaHex(PaletteWithoutAlpha.yellow300, 20),

  // Alpha Orange
  orange400_30: getAlphaHex(PaletteWithoutAlpha.orange400, 30),
  orange400_20: getAlphaHex(PaletteWithoutAlpha.orange400, 20),
  orange400_10: getAlphaHex(PaletteWithoutAlpha.orange400, 10),
  orange300_40: getAlphaHex(PaletteWithoutAlpha.orange300, 40),
  orange300_30: getAlphaHex(PaletteWithoutAlpha.orange300, 30),
  orange300_20: getAlphaHex(PaletteWithoutAlpha.orange300, 20),

  // Alpha Red
  red400_30: getAlphaHex(PaletteWithoutAlpha.red400, 30),
  red400_20: getAlphaHex(PaletteWithoutAlpha.red400, 20),
  red400_10: getAlphaHex(PaletteWithoutAlpha.red400, 10),
  red300_40: getAlphaHex(PaletteWithoutAlpha.red300, 40),
  red300_30: getAlphaHex(PaletteWithoutAlpha.red300, 30),
  red300_20: getAlphaHex(PaletteWithoutAlpha.red300, 20),

  // Alpha Pink
  pink400_30: getAlphaHex(PaletteWithoutAlpha.pink400, 30),
  pink400_20: getAlphaHex(PaletteWithoutAlpha.pink400, 20),
  pink400_10: getAlphaHex(PaletteWithoutAlpha.pink400, 10),
  pink300_40: getAlphaHex(PaletteWithoutAlpha.pink300, 40),
  pink300_30: getAlphaHex(PaletteWithoutAlpha.pink300, 30),
  pink300_20: getAlphaHex(PaletteWithoutAlpha.pink300, 20),

  // Alpha Purple
  purple400_30: getAlphaHex(PaletteWithoutAlpha.purple400, 30),
  purple400_20: getAlphaHex(PaletteWithoutAlpha.purple400, 20),
  purple400_10: getAlphaHex(PaletteWithoutAlpha.purple400, 10),
  purple300_40: getAlphaHex(PaletteWithoutAlpha.purple300, 40),
  purple300_30: getAlphaHex(PaletteWithoutAlpha.purple300, 30),
  purple300_20: getAlphaHex(PaletteWithoutAlpha.purple300, 20),

  // Alpha Navy
  navy400_30: getAlphaHex(PaletteWithoutAlpha.navy400, 30),
  navy400_20: getAlphaHex(PaletteWithoutAlpha.navy400, 20),
  navy400_10: getAlphaHex(PaletteWithoutAlpha.navy400, 10),
  navy300_40: getAlphaHex(PaletteWithoutAlpha.navy300, 40),
  navy300_30: getAlphaHex(PaletteWithoutAlpha.navy300, 30),
  navy300_20: getAlphaHex(PaletteWithoutAlpha.navy300, 20),

  // Alpha Grey
  grey800_80: getAlphaHex(PaletteWithoutAlpha.grey800, 80),
  grey700_80: getAlphaHex(PaletteWithoutAlpha.grey700, 80),
  grey200_80: getAlphaHex(PaletteWithoutAlpha.grey200, 80),
  grey100_80: getAlphaHex(PaletteWithoutAlpha.grey100, 80),

  // Alpha White
  white_90: getAlphaHex(PaletteWithoutAlpha.white, 90),
  white_60: getAlphaHex(PaletteWithoutAlpha.white, 60),
  white_40: getAlphaHex(PaletteWithoutAlpha.white, 40),
  white_20: getAlphaHex(PaletteWithoutAlpha.white, 20),
  white_12: getAlphaHex(PaletteWithoutAlpha.white, 12),
  white_8: getAlphaHex(PaletteWithoutAlpha.white, 8),
  white_5: getAlphaHex(PaletteWithoutAlpha.white, 5),

  // Alpha Black
  black_85: getAlphaHex(PaletteWithoutAlpha.black, 85),
  black_60: getAlphaHex(PaletteWithoutAlpha.black, 60),
  black_40: getAlphaHex(PaletteWithoutAlpha.black, 40),
  black_20: getAlphaHex(PaletteWithoutAlpha.black, 20),
  black_15: getAlphaHex(PaletteWithoutAlpha.black, 15),
  black_8: getAlphaHex(PaletteWithoutAlpha.black, 8),
  black_5: getAlphaHex(PaletteWithoutAlpha.black, 5),
  black_3: getAlphaHex(PaletteWithoutAlpha.black, 3),
}
