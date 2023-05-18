import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFaceWow(props: SVGProps<SVGSVGElement>) {
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
        d="M15.21 6.6c.85 0 1.2.61 1.2 2.1 0 1.5-.35 2.11-1.2 2.11-.84 0-1.2-.61-1.2-2.11 0-1.49.36-2.1 1.2-2.1ZM12 11c1.16 0 2.1 1.02 2.1 3s-.94 3-2.1 3c-1.16 0-2.1-1.02-2.1-3s.94-3 2.1-3ZM8.79 6.6c.84 0 1.2.61 1.2 2.1 0 1.5-.35 2.11-1.2 2.11s-1.2-.61-1.2-2.11c0-1.49.35-2.1 1.2-2.1ZM12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8Zm0-2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFaceWow)
