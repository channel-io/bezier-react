export enum AbsoluteUnit {
  cm = 'cm',
  mm = 'mm',
  in = 'in',
  px = 'px',
  pt = 'pt',
  pc = 'pc',
}

export enum RelativeUnit {
  em = 'em',
  ex = 'ex',
  ch = 'ch',
  rem = 'rem',
  vw = 'vw',
  vh = 'vh',
  vmin = 'vmin',
  vmax = 'vmax',
  perc = '%',
}

export type Units = `${AbsoluteUnit}` | `${RelativeUnit}`
