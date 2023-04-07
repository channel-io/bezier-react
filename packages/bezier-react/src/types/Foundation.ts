import {
  type css,
  type Foundation,
} from '~/src/foundation'

export interface FoundationProps {
  foundation?: Foundation
}

export type InjectedInterpolation = ReturnType<typeof css>

export interface InterpolationProps {
  interpolation?: InjectedInterpolation
}
