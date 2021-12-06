/* Internal dependencies */
import type { css } from 'Foundation'

export type InjectedInterpolation = ReturnType<typeof css>

export interface WithInterpolation {
  interpolation?: InjectedInterpolation
}

export default InjectedInterpolation
