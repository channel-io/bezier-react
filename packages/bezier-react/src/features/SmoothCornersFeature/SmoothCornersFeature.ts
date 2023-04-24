// eslint-disable-next-line no-restricted-imports
import {
  Feature,
  FeatureType,
} from '../Feature'

import { smoothCornersScript } from './smoothCornersScript'

/**
 * 🚨 This is an experimental feature! It may not be suitable for use in production.
 *
 * Instead of CSS border-radius, Use *Superellipse* masking using the CSS Houdini API.
 * When enabled, the feature will be applied to components with the `smoothCorners` property set to `true`.
 */
class SmoothCornersFeature extends Feature {
  /**
   * @deprecated (@ed) Upcoming improvements
   * Changed to private property, and will be referenced via the useFeatureFlag context rather than directly externally.
   */
  activated = false

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
