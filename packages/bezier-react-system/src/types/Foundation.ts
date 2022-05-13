/* Internal dependencies */
import { Foundation, css } from '@channel.io/bezier-react-foundation'

export interface FoundationProps {
  foundation?: Foundation
}

export type InjectedInterpolation = ReturnType<typeof css>

export interface InterpolationProps {
  interpolation?: InjectedInterpolation
}
