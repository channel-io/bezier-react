/* Internal dependencies */
import type { css } from '../foundation'

type InjectedInterpolation = ReturnType<typeof css>

export interface WithInterpolation {
  interpolation?: InjectedInterpolation
}

export default InjectedInterpolation
