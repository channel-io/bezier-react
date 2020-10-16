/* Internal dependencies */
import { SmoothCornersScript } from './smoothCorners'

interface EnableCSSHoudiniOptions {
  smoothCorners: boolean
}

export default function EnalbeCSSHoudini({
  smoothCorners = false,
}: EnableCSSHoudiniOptions) {
  // NOTE: CSS namespace 에 접근 가능할 경우에만 사용
  if (typeof CSS === 'undefined') { return }

  if ('paintWorklet' in CSS) {
    if (smoothCorners) {
      const workletURL = URL.createObjectURL(new Blob([SmoothCornersScript], { type: 'application/javascript' }))
      // @ts-ignore
      CSS.paintWorklet.addModule(workletURL)
    }
  }
}
