import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCrop(props: SVGProps<SVGSVGElement>) {
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
        d="M5 7v9a3 3 0 0 0 3 3h9v4h2v-4h4v-2h-4V8a3 3 0 0 0-3-3H7V1H5v4H1v2h4Zm2 0v9a1 1 0 0 0 1 1h9V8a1 1 0 0 0-1-1H7Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCrop)
