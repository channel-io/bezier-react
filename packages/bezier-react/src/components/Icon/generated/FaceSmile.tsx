import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFaceSmile(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.478 6.477 2 12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10C6.477 22 2 17.522 2 12Zm18 0c0-4.41-3.589-8-8-8-4.412 0-8 3.59-8 8 0 4.411 3.588 8 8 8 4.411 0 8-3.589 8-8Zm-8.01 5.708h.004c4.317 0 5.506-3.459 5.554-3.606a1 1 0 1 0-1.899-.625v.001c-.02.057-.791 2.23-3.655 2.23h-.003c-2.823-.002-3.608-2.14-3.643-2.239a.999.999 0 0 0-1.897.632c.048.147 1.232 3.603 5.54 3.607Zm-3.204-5.883c-.845 0-1.199-.61-1.199-2.105s.354-2.106 1.2-2.106c.844 0 1.197.611 1.197 2.106 0 1.495-.353 2.105-1.198 2.105Zm5.229-2.105c0 1.495.353 2.105 1.199 2.105.845 0 1.198-.61 1.198-2.105s-.353-2.106-1.198-2.106c-.846 0-1.199.611-1.199 2.106Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFaceSmile)
