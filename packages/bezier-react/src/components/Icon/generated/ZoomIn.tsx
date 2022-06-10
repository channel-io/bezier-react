import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgZoomIn(props: SVGProps<SVGSVGElement>) {
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
        d="M4 10c0 3.31 2.691 6 6 6 3.31 0 6-2.69 6-6 0-3.309-2.69-6-6-6-3.309 0-6 2.691-6 6Zm17.707 10.293a1 1 0 1 1-1.414 1.414l-5.396-5.395A7.948 7.948 0 0 1 10 18c-4.41 0-8-3.589-8-8 0-4.41 3.59-8 8-8 4.411 0 8 3.59 8 8a7.948 7.948 0 0 1-1.688 4.897l5.395 5.396ZM9 9V6h2v3h3v2h-3v3H9v-3H6V9h3Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgZoomIn)
