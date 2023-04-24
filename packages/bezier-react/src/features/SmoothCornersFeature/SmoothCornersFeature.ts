// eslint-disable-next-line no-restricted-imports
import {
  Feature,
  FeatureType,
} from '../Feature'

import { smoothCornersScript } from './smoothCornersScript'

class SmoothCornersFeature extends Feature {
  private activated = false

  async activate() {
    if (
      !this.activated
      && typeof CSS !== 'undefined'
      && 'paintWorklet' in CSS
    ) {
      const workletURL = URL.createObjectURL(
        new Blob([smoothCornersScript], { type: 'application/javascript' }),
      )

      // @ts-ignore
      const promise = CSS.paintWorklet.addModule(workletURL) as Promise<void>

      return promise
        .then(() => {
          this.activated = true
          return this.activated
        }).catch(() => {
          this.activated = false
          return this.activated
        })
    }

    return this.activated
  }
}

export default new SmoothCornersFeature(FeatureType.SmoothCorners)
