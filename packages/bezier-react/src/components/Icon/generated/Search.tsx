import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSearch(props: SVGProps<SVGSVGElement>) {
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
        d="M18 10a8 8 0 1 0-3.094 6.32l5.387 5.387a1 1 0 0 0 1.414-1.414l-5.387-5.387A7.965 7.965 0 0 0 18 10Zm-2 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSearch)
