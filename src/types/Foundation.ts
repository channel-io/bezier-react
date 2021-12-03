/* Internal dependencies */
import { Foundation, css } from '../foundation'

export interface WithFoundation {
  foundation?: Foundation
}

export type InjectedInterpolation = ReturnType<typeof css>

export interface WithInterpolation {
  interpolation?: InjectedInterpolation
}
