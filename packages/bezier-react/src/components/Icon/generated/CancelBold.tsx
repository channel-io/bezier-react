import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCancelBold(props: SVGProps<SVGSVGElement>) {
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
        d="M4.929 4.929a1.5 1.5 0 0 0 0 2.121L9.879 12l-4.95 4.95A1.5 1.5 0 0 0 7.05 19.07l4.95-4.95 4.95 4.95a1.5 1.5 0 0 0 2.121-2.121L14.121 12l4.95-4.95A1.5 1.5 0 1 0 16.95 4.93L12 9.879l-4.95-4.95a1.5 1.5 0 0 0-2.121 0Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCancelBold)
