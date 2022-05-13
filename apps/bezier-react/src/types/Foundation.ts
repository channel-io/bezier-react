/* Internal dependencies */
import { Foundation, css } from 'Foundation'

export interface FoundationProps {
  foundation?: Foundation
}

export type InjectedInterpolation = ReturnType<typeof css>

export interface InterpolationProps {
  interpolation?: InjectedInterpolation
}
