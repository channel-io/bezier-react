// eslint-disable-next-line no-restricted-imports
import {
  Feature,
  FeatureType,
} from '../Feature'

import { smoothCornersScript } from './smoothCornersScript'

class SmoothCornersFeature extends Feature {
  private activated = false

  async activate() {
    if (typeof CSS === 'undefined') {
      return false
    }

    if ('paintWorklet' in CSS && this.activated) {
      return true
    }

    if (!this.activated) {
      const workletURL = URL.createObjectURL(
        new Blob([smoothCornersScript], { type: 'application/javascript' }),
      )

      // @ts-ignore
      CSS.paintWorklet.addModule(workletURL)

      this.activated = true

      return true
    }

    return false
  }
}

export default new SmoothCornersFeature(FeatureType.SmoothCorners)
