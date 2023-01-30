import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgVolumeOffFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M21.546 19.425a1 1 0 1 1-1.414 1.414L3.162 3.868a1 1 0 1 1 1.413-1.414l3.78 3.779 3.938-3.94C12.481 2.106 12.735 2 13 2h1a1 1 0 0 1 1 1v9.879l6.546 6.546ZM2 8a1 1 0 0 1 1-1h1.88L15 17.121v3.88a1 1 0 0 1-1 1h-1a.997.997 0 0 1-.707-.294L7.586 17H3a1 1 0 0 1-1-1V8Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgVolumeOffFilled)
