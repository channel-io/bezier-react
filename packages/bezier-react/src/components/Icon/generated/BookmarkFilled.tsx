import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgBookmarkFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M18.072 2H6a1 1 0 0 0-1 1v18.715l7.036-5.875 7.036 5.875V3a1 1 0 0 0-1-1"
      />
    </svg>
  )
}

export default createBezierIcon(SvgBookmarkFilled)
