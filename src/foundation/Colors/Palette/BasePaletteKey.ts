enum BasePaletteKey {
  blue = 'blue',
  cobalt = 'cobalt',
  teal = 'teal',
  green = 'green',
  olive = 'olive',
  yellow = 'yellow',
  orange = 'orange',
  red = 'red',
  pink = 'pink',
  purple = 'purple',
  navy = 'navy',
  grey = 'grey',

  black = 'black',
  white = 'white',
}

export type BaseMonoPaletteKey =
  | BasePaletteKey.grey
  | BasePaletteKey.black
  | BasePaletteKey.white

export type BaseColorfulPaletteKey =
  | BasePaletteKey.blue
  | BasePaletteKey.cobalt
  | BasePaletteKey.teal
  | BasePaletteKey.green
  | BasePaletteKey.olive
  | BasePaletteKey.yellow
  | BasePaletteKey.orange
  | BasePaletteKey.red
  | BasePaletteKey.pink
  | BasePaletteKey.purple
  | BasePaletteKey.navy

export default BasePaletteKey
