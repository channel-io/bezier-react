import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronUpdown(props: SVGProps<SVGSVGElement>) {
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
        d="M5.793 7.793a1 1 0 0 0 1.414 1.414L12 4.414l4.793 4.793a1 1 0 1 0 1.414-1.414l-5.5-5.5a1 1 0 0 0-1.414 0l-5.5 5.5ZM18.207 16.207a1 1 0 0 0-1.414-1.414L12 19.586l-4.793-4.793a1 1 0 0 0-1.414 1.414l5.5 5.5a1 1 0 0 0 1.414 0l5.5-5.5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronUpdown)
