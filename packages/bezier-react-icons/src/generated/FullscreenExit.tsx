import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgFullscreenExit(props: SVGProps<SVGSVGElement>) {
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
        d="M15.5 10H21V8h-5V3h-2v5.5c0 .827.673 1.5 1.5 1.5ZM14 21h2v-5h5v-2h-5.5c-.827 0-1.5.673-1.5 1.5V21Zm-4 0H8v-5H3v-2h5.5c.827 0 1.5.673 1.5 1.5V21ZM3 10h5.5c.827 0 1.5-.673 1.5-1.5V3H8v5H3v2Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgFullscreenExit)
