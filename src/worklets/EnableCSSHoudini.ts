/* Internal dependencies */
import smoothCornersScript from './smoothCorners'

interface EnableCSSHoudiniOptions {
  smoothCorners: boolean
}

export default function EnalbeCSSHoudini({
  smoothCorners = false,
}: EnableCSSHoudiniOptions) {
  if ('paintWorklet' in CSS) {
    if (smoothCorners) {
      const workletURL = URL.createObjectURL(new Blob([smoothCornersScript], { type: 'application/javascript' }))
      // @ts-ignore
      CSS.paintWorklet.addModule(workletURL)
    }
  }
}
