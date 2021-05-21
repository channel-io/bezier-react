enum BasePaletteKey {
  Blue = 'blue',
  Cobalt = 'cobalt',
  Teal = 'teal',
  Green = 'green',
  Olive = 'olive',
  Yellow = 'yellow',
  Orange = 'orange',
  Red = 'red',
  Pink = 'pink',
  Purple = 'purple',
  Navy = 'navy',
  Grey = 'grey',

  Black = 'black',
  White = 'white',
}

export type BaseMonoPaletteKey =
  | BasePaletteKey.Grey
  | BasePaletteKey.Black
  | BasePaletteKey.White

export type BaseColorfulPaletteKey =
  | BasePaletteKey.Blue
  | BasePaletteKey.Cobalt
  | BasePaletteKey.Teal
  | BasePaletteKey.Green
  | BasePaletteKey.Olive
  | BasePaletteKey.Yellow
  | BasePaletteKey.Orange
  | BasePaletteKey.Red
  | BasePaletteKey.Pink
  | BasePaletteKey.Purple
  | BasePaletteKey.Navy

export default BasePaletteKey
