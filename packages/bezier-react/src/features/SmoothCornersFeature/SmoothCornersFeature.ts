// eslint-disable-next-line no-restricted-imports
import {
  type Feature,
  FeatureType,
} from '../Feature'

import { smoothCornersScript } from './smoothCornersScript'

/**
 * @see {@link https://fetch.spec.whatwg.org/#requestcredentials}
 */
type RequestCredentials = 'omit' | 'same-origin' | 'include'

type WorkletOptions = {
  credentials: RequestCredentials
}

/**
 * @see {@link https://html.spec.whatwg.org/multipage/worklets.html#worklets-worklet}
 */
interface Worklet {
  addModule: (moduleURL: string, options?: WorkletOptions) => Promise<void>
}

declare global {
  namespace CSS {
    export const paintWorklet: Worklet
  }
}

/**
 * 🚨 This is an experimental feature! It may not be suitable for use in production.
 *
 * Instead of CSS border-radius, Use *Superellipse* masking using the CSS Houdini API.
 * When enabled, the feature will be applied to components with the `smoothCorners` property set to `true`.
 */
class SmoothCornersFeature implements Feature {
  readonly name = FeatureType.SmoothCorners

  private globalObject: typeof globalThis | null = null

  /**
   * @deprecated (@ed) Upcoming improvements
   * Changed to private property, and will be referenced via the useFeatureFlag context rather than directly externally.
   */
  activated: WeakMap<typeof globalThis, boolean> = new WeakMap([[globalThis, false]])

  private updateCurrentGlobalObject(globalObject: typeof globalThis) {
    this.globalObject = globalObject
  }

  private isGlobalObjectIdentical(globalObject: typeof globalThis) {
    return Object.is(this.globalObject, globalObject)
  }

  private supportCSSPaintWorklet(globalObject: typeof globalThis) {
    return typeof globalObject.CSS !== 'undefined' && 'paintWorklet' in globalObject.CSS
  }

  async activate(globalObject: typeof globalThis = globalThis) {
    if (!this.isGlobalObjectIdentical(globalObject) && this.supportCSSPaintWorklet(globalObject)) {
      const workletURL = URL.createObjectURL(
        new Blob([smoothCornersScript], { type: 'application/javascript' }),
      )

      try {
        await globalObject.CSS.paintWorklet.addModule(workletURL)
        this.activated.set(globalObject, true)
      } catch {
        this.activated.set(globalObject, false)
      }
    }

    this.updateCurrentGlobalObject(globalObject)

    return this.activated.get(globalObject) as boolean
  }
}

export default new SmoothCornersFeature()
