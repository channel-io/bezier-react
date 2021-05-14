/**
 * Specification: https://drafts.csswg.org/css-cascade/#defaulting-keywords
 */
export enum ExplicitDefaulting {
  Initial = 'initial',
  Inherit = 'inherit',
  Unset = 'unset',
  Revert = 'revert',
}

/**
 * Specification: https://drafts.csswg.org/css-values-4/#absolute-lengths
 */
export enum AbsoluteUnit {
  cm = 'cm',
  mm = 'mm',
  Q = 'Q',
  in = 'in',
  pc = 'pc',
  pt = 'pt',
  px = 'px',
}

/**
 * Specification: https://drafts.csswg.org/css-values-4/#relative-lengths
 */
export enum RelativeUnit {
  em = 'em',
  ex = 'ex',
  cap = 'cap',
  ch = 'ch',
  ic = 'ic',
  rem = 'rem',
  lh = 'lh',
  rlh = 'rlh',
  vw = 'vw',
  vh = 'vh',
  vi = 'vi',
  vb = 'vb',
  vmin = 'vmin',
  vmax = 'vmax',
  percentage = '%',
}

/**
 * Specification: https://drafts.csswg.org/css-sizing-4/#specifying-sizes
 */
export enum BoxSizingUnit {
  Auto = 'auto',
  MaxContent = 'max-content',
  MinContent = 'min-content',
  FitContent = 'fit-content',
}

export type CSSUnits = `${AbsoluteUnit}` | `${RelativeUnit}`
