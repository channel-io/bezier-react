import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMetro(props: SVGProps<SVGSVGElement>) {
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
        d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM15 14.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 2a4 4 0 0 1 4 4v12a1 1 0 0 1-1 1h-3l2.146 2.146a.5.5 0 0 1-.353.854h-2.379a1 1 0 0 1-.707-.293L13 19h-2l-2.707 2.707a1 1 0 0 1-.707.293H5.207a.5.5 0 0 1-.353-.854L7 19H4a1 1 0 0 1-1-1V6a4 4 0 0 1 4-4h10Zm2 4v4h-6V4h4l.15.005A2 2 0 0 1 19 6Zm-8-2H7a2 2 0 0 0-1.995 1.85L5 6v4h6V4ZM5 17h14v-5H5v5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMetro)
