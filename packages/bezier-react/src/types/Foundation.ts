import {
  type Foundation,
  type css,
} from '~/src/foundation'

export interface FoundationProps {
  foundation?: Foundation
}

export type InjectedInterpolation = ReturnType<typeof css>

export interface InterpolationProps {
  interpolation?: InjectedInterpolation
}
