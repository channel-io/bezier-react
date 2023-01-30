import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgImage(props: SVGProps<SVGSVGElement>) {
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
        d="M5 19h14V5H5v14ZM19.5 3h-15C3.673 3 3 3.673 3 4.5v15c0 .827.673 1.5 1.5 1.5h15c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5ZM18 18v-6l-3.995-2L6 14v4h12ZM10 8A2 2 0 1 1 6 8 2 2 0 0 1 10 8Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgImage)
