/**
 * date: 2021.04.22
 * version: 1
 */

/* Internal dependencies */
import {
  type BaseMonoPaletteKey,
  type BaseColorfulPaletteKey,
} from './BasePaletteKey'
import type BasePaletteKey from './BasePaletteKey'
import { getAlphaHex } from './alphaUtils'

type BaseColorfulPaletteKey300 = `${BaseColorfulPaletteKey}300`
type BaseColorfulPaletteKey400 = `${BaseColorfulPaletteKey}400`
type BaseColorfulPaletteKey500 = `${BaseColorfulPaletteKey}500`

type GreyKeyWithoutAlpha =
  | `${BasePaletteKey.Grey}50`
  | `${BasePaletteKey.Grey}100`
  | `${BasePaletteKey.Grey}200`
  | `${BasePaletteKey.Grey}500`
  | `${BasePaletteKey.Grey}700`
  | `${BasePaletteKey.Grey}800`
  | `${BasePaletteKey.Grey}850`
  | `${BasePaletteKey.Grey}900`

type PaletteKeyWithoutAlpha =
  | BaseColorfulPaletteKey300
  | BaseColorfulPaletteKey400
  | BaseColorfulPaletteKey500
  | GreyKeyWithoutAlpha
  | Exclude<BaseMonoPaletteKey, BasePaletteKey.Grey>

type PaletteWithoutAlphaType = Record<PaletteKeyWithoutAlpha, string>

const PaletteWithoutAlpha: PaletteWithoutAlphaType = {
  // Blue
  blue300: '#6687FF',
  blue400: '#5E56F0',
  blue500: '#4E40C9',

  // Cobalt
  cobalt300: '#47C8FF',
  cobalt400: '#329BE7',
  cobalt500: '#327AB8',

  // Teal
  teal300: '#3CDDCD',
  teal400: '#0FB3A3',
  teal500: '#449C8A',

  // Green
  green300: '#3ACF5A',
  green400: '#31A552',
  green500: '#41904F',

  // Olive
  olive300: '#CAD548',
  olive400: '#A0A540',
  olive500: '#818628',

  // Yellow
  yellow300: '#FDD353',
  yellow400: '#EDBC40',
  yellow500: '#C39E37',

  // Orange
  orange300: '#FFAB5C',
  orange400: '#F4800B',
  orange500: '#C57417',

  // Red
  red300: '#FF5C5C',
  red400: '#E94E58',
  red500: '#AC3E46',

  // Pink
  pink300: '#EC6FD3',
  pink400: '#CB48AD',
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
  grey100: '#F7F7F8',
  grey200: '#EFEFF0',
  grey500: '#A7A7AA',
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
  | `${BasePaletteKey.Grey}900_90`
  | `${BasePaletteKey.Grey}800_80`
  | `${BasePaletteKey.Grey}700_80`
  | `${BasePaletteKey.Grey}200_80`
  | `${BasePaletteKey.Grey}100_90`
  | `${BasePaletteKey.Grey}100_80`

type AlphaWhiteKey =
  | `${BasePaletteKey.White}_90`
  | `${BasePaletteKey.White}_80`
  | `${BasePaletteKey.White}_60`
  | `${BasePaletteKey.White}_40`
  | `${BasePaletteKey.White}_20`
  | `${BasePaletteKey.White}_12`
  | `${BasePaletteKey.White}_8`
  | `${BasePaletteKey.White}_5`

type AlphaBlackKey =
  | `${BasePaletteKey.Black}_85`
  | `${BasePaletteKey.Black}_60`
  | `${BasePaletteKey.Black}_40`
  | `${BasePaletteKey.Black}_30`
  | `${BasePaletteKey.Black}_22`
  | `${BasePaletteKey.Black}_20`
  | `${BasePaletteKey.Black}_15`
  | `${BasePaletteKey.Black}_8`
  | `${BasePaletteKey.Black}_5`
  | `${BasePaletteKey.Black}_3`

type PaletteKey =
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

type PaletteType = Record<PaletteKey, string>

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
  grey900_90: getAlphaHex(PaletteWithoutAlpha.grey900, 90),
  grey800_80: getAlphaHex(PaletteWithoutAlpha.grey800, 80),
  grey700_80: getAlphaHex(PaletteWithoutAlpha.grey700, 80),
  grey200_80: getAlphaHex(PaletteWithoutAlpha.grey200, 80),
  grey100_90: getAlphaHex(PaletteWithoutAlpha.grey100, 90),
  grey100_80: getAlphaHex(PaletteWithoutAlpha.grey100, 80),

  // Alpha White
  white_90: getAlphaHex(PaletteWithoutAlpha.white, 90),
  white_80: getAlphaHex(PaletteWithoutAlpha.white, 80),
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
  black_30: getAlphaHex(PaletteWithoutAlpha.black, 30),
  black_22: getAlphaHex(PaletteWithoutAlpha.black, 22),
  black_20: getAlphaHex(PaletteWithoutAlpha.black, 20),
  black_15: getAlphaHex(PaletteWithoutAlpha.black, 15),
  black_8: getAlphaHex(PaletteWithoutAlpha.black, 8),
  black_5: getAlphaHex(PaletteWithoutAlpha.black, 5),
  black_3: getAlphaHex(PaletteWithoutAlpha.black, 3),
}
