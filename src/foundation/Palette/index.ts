/* Internal dependencies */
import Spectrum from './Spectrum'
import Achromatic from './Achromatic'

type SpectrumWithoutGrey = Exclude<Spectrum, Spectrum.grey>

type SpectrumLightKey = `${SpectrumWithoutGrey}300`
type SpectrumMediumKey = `${SpectrumWithoutGrey}400`
type SpectrumDarkKey = `${SpectrumWithoutGrey}500`

// NOTE: Grey has unique scale
type GreyKey =
  | `${Spectrum.grey}50`
  | `${Spectrum.grey}100`
  | `${Spectrum.grey}200`
  | `${Spectrum.grey}750`
  | `${Spectrum.grey}800`
  | `${Spectrum.grey}850`
  | `${Spectrum.grey}900`

export type PaletteKey =
  | SpectrumLightKey
  | SpectrumMediumKey
  | SpectrumDarkKey
  | GreyKey
  | Achromatic

export type PaletteType = Record<PaletteKey, string>

export const Palette: PaletteType = {
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

  // Achromatic
  white: '#FFFFFF',
  black_3: '#00000008',
  black_5: '#0000000D',
  black_8: '#00000014',
  black_15: '#00000026',
  black_20: '#00000033',
  black_40: '#00000066',
  black_60: '#00000099',
  black: '#000000',
}
