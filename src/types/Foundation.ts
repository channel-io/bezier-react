/* Internal dependencies */
import { Foundation, css } from 'Foundation'

export interface WithFoundation {
  foundation?: Foundation
}

export type InjectedInterpolation = ReturnType<typeof css>

export interface WithInterpolation {
  interpolation?: InjectedInterpolation
}
