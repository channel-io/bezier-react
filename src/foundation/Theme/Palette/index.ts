/* Internal dependencies */
import BasePaletteKey from './BasePaletteKey'
import { getAlphaHex } from './utils'

type BasePaletteKeyWithoutMono = Exclude<BasePaletteKey, BasePaletteKey.grey | BasePaletteKey.black | BasePaletteKey.white>

type BasePaletteKeyWithoutMono300 = `${BasePaletteKeyWithoutMono}300`
type BasePaletteKeyWithoutMono400 = `${BasePaletteKeyWithoutMono}400`
type BasePaletteKeyWithoutMono500 = `${BasePaletteKeyWithoutMono}500`

type GreyKeyWithoutAlpha =
  | `${BasePaletteKey.grey}50`
  | `${BasePaletteKey.grey}100`
  | `${BasePaletteKey.grey}200`
  | `${BasePaletteKey.grey}750`
  | `${BasePaletteKey.grey}800`
  | `${BasePaletteKey.grey}850`
  | `${BasePaletteKey.grey}900`

type WhiteKeyWithoutAlpha = 'white'
type BlackKeyWithoutAlpha = 'black'

export type PaletteKeyWithoutAlpha =
  | BasePaletteKeyWithoutMono300
  | BasePaletteKeyWithoutMono400
  | BasePaletteKeyWithoutMono500
  | GreyKeyWithoutAlpha
  | WhiteKeyWithoutAlpha
  | BlackKeyWithoutAlpha

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
  grey750: '#404143',
  grey800: '#313234',
  grey850: '#2A2B2D',
  grey900: '#242428',

  // White
  white: '#FFFFFF',

  // Black
  black: '#000000',
}

/* eslint-disable @typescript-eslint/naming-convention */
type BasePaletteKeyWithoutMono400_30 = `${BasePaletteKeyWithoutMono}400_30`
type BasePaletteKeyWithoutMono400_20 = `${BasePaletteKeyWithoutMono}400_20`
type BasePaletteKeyWithoutMono400_10 = `${BasePaletteKeyWithoutMono}400_10`

type BasePaletteKeyWithoutMono300_40 = `${BasePaletteKeyWithoutMono}300_40`
type BasePaletteKeyWithoutMono300_30 = `${BasePaletteKeyWithoutMono}300_30`
type BasePaletteKeyWithoutMono300_20 = `${BasePaletteKeyWithoutMono}300_20`
/* eslint-enable @typescript-eslint/naming-convention */

type AlphaGreyKey =
  | `${BasePaletteKey.grey}200_80`
  | `${BasePaletteKey.grey}100_80`

type AlphaWhiteKey =
  | `${WhiteKeyWithoutAlpha}_90`
  | `${WhiteKeyWithoutAlpha}_70`
  | `${WhiteKeyWithoutAlpha}_40`
  | `${WhiteKeyWithoutAlpha}_15`
  | `${WhiteKeyWithoutAlpha}_8`

type AlphaBlackKey =
  | `${BlackKeyWithoutAlpha}_85`
  | `${BlackKeyWithoutAlpha}_60`
  | `${BlackKeyWithoutAlpha}_40`
  | `${BlackKeyWithoutAlpha}_20`
  | `${BlackKeyWithoutAlpha}_15`
  | `${BlackKeyWithoutAlpha}_8`
  | `${BlackKeyWithoutAlpha}_5`
  | `${BlackKeyWithoutAlpha}_3`

export type PaletteKey =
  | PaletteKeyWithoutAlpha
  | BasePaletteKeyWithoutMono400_30
  | BasePaletteKeyWithoutMono400_20
  | BasePaletteKeyWithoutMono400_10
  | BasePaletteKeyWithoutMono300_40
  | BasePaletteKeyWithoutMono300_30
  | BasePaletteKeyWithoutMono300_20
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
  grey200_80: getAlphaHex(PaletteWithoutAlpha.grey200, 80),
  grey100_80: getAlphaHex(PaletteWithoutAlpha.grey100, 80),

  // Alpha White
  white_90: getAlphaHex(PaletteWithoutAlpha.white, 90),
  white_70: getAlphaHex(PaletteWithoutAlpha.white, 70),
  white_40: getAlphaHex(PaletteWithoutAlpha.white, 40),
  white_15: getAlphaHex(PaletteWithoutAlpha.white, 15),
  white_8: getAlphaHex(PaletteWithoutAlpha.white, 8),

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
