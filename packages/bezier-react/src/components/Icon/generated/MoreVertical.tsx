import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMoreVertical(props: SVGProps<SVGSVGElement>) {
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
        d="M9.75 4.75A2.257 2.257 0 0 0 12 7a2.257 2.257 0 0 0 2.25-2.25A2.257 2.257 0 0 0 12 2.5a2.257 2.257 0 0 0-2.25 2.25Zm2.25 9.5A2.257 2.257 0 0 1 9.75 12 2.257 2.257 0 0 1 12 9.75 2.257 2.257 0 0 1 14.25 12 2.257 2.257 0 0 1 12 14.25Zm0 7.25a2.257 2.257 0 0 1-2.25-2.25A2.257 2.257 0 0 1 12 17a2.257 2.257 0 0 1 2.25 2.25A2.257 2.257 0 0 1 12 21.5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMoreVertical)
