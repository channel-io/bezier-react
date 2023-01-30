import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCall(props: SVGProps<SVGSVGElement>) {
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
        d="M4.7 4.455c-1.614 1.614-1.614 6.133 3.55 11.298 5.166 5.165 9.685 5.165 11.3 3.551.968-.968 1.23-2.384.645-3.228-.517-.775-1.974-1.937-3.228-1.937-1.291 0-2.274 1.627-2.905 1.614-.632-.012-2.276-.707-3.69-2.121-1.414-1.414-2.109-3.058-2.121-3.69-.013-.631 1.614-1.613 1.614-2.905 0-1.254-1.162-2.711-1.937-3.228-.844-.585-2.26-.323-3.228.646Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCall)
