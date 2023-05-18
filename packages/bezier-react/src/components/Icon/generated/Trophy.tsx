import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTrophy(props: SVGProps<SVGSVGElement>) {
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
        d="M7 4h10v5A5 5 0 0 1 7 9V4Zm10.745 9a7.012 7.012 0 0 1-3.83 2.735A2.996 2.996 0 0 0 16.365 17h.136a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h.136c1.01 0 1.905-.5 2.448-1.265A7.012 7.012 0 0 1 6.254 13H6a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2h1a2 2 0 0 1 2 2v3a4 4 0 0 1-4 4h-.255ZM5 6H4v3a2 2 0 0 0 1.248 1.854A7.008 7.008 0 0 1 5 9V6Zm13.752 4.854A2 2 0 0 0 20 9V6h-1v3a7.01 7.01 0 0 1-.248 1.854ZM9 18.812V20h6v-1.188a5.012 5.012 0 0 1-3-2.37 5.012 5.012 0 0 1-3 2.37Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTrophy)
